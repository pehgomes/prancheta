import React, { useRef, useState } from "react";
import Image from "react-bootstrap/Image"

import './ListaJogadores.css'

const ListaJogadores = ({ height, nodes, onSubmit, updateSearch }) => {

    const refe = useRef(null)
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(nodes);

    const [playerObj, setPlayerObj] = useState({
        id: null,
        label: null,
        shape: null,
        x: null,
        y: null, position: null,
        image: null,
    })

    const onProjectClick = p => event => {
        setPlayerObj(p);
    }


    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: playerObj.id,
            label: playerObj.label,
            shape: "circularImage",
            x: playerObj.x,
            y: playerObj.y,
            position: null,
            image: playerObj.image
        });

        setPlayerObj({})
    }

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = nodes.filter((user) => {
                return user.label.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(nodes);
        }

        // updateSearch({ foundUsers: foundUsers })
        setName(keyword);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <center>
                    <h5>Elenco </h5>
                </center>
                <div className="card-body">
                    <input 
                        class="form-control"
                        type="search"
                        value={name}
                        onChange={filter}
                        placeholder="Filter"
                    />

                </div>

                <div ref={refe} style={{ height: height, overflowY: 'scroll' }} className="card-body">

                    <div class="list-group">
                        {

                            foundUsers.length == 0 ? nodes.map((p, key) => (
                                <button
                                    key={p.id}
                                    class="list-group-item list-group-item-action"
                                    onClick={onProjectClick(p)}>
                                    <Image class="card-title" src={p.image}
                                        style={{ width: 47, height: 47, marginRight: 47 }} roundedCircle />
                                    {p.label}
                                </button>
                            )) :
                                foundUsers.map((p, key) => (
                                    <button
                                        key={p.id}
                                        class="list-group-item list-group-item-action"
                                        onClick={onProjectClick(p)}>
                                        <Image class="card-title" src={p.image}
                                            style={{ width: 47, height: 47, marginRight: 47 }} roundedCircle />
                                        {p.label}
                                    </button>
                                ))}
                    </div>
                </div>
            </form>
        </>
    )
};

export default ListaJogadores;