import React, { useRef, createRef, useState } from "react";
import Table from "react-bootstrap/Table"
import Image from "react-bootstrap/Image"
import TableScrollbar from "react-bootstrap/"

import './ListaJogadores.css'

const ListaJogadores = ({ height, nodes, onSubmit }) => {

    const refe = useRef(null)

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
            y: playerObj.y, position: null,
            image: playerObj.image
        });

        setPlayerObj({})
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <center><h5>Elenco </h5></center>
            <div ref={refe} style={{ height: height, overflowY: 'scroll' }} className="card-body">
                <div class="list-group">
                    {nodes.map((p, key) => (
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