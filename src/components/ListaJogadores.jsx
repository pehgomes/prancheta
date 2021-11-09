import React, {useRef, createRef} from "react";
import Table from "react-bootstrap/Table"
import Image from "react-bootstrap/Image"
import TableScrollbar from "react-bootstrap/"

import './ListaJogadores.css'

const ListaJogadores = ({ height, nodes }) => {

    var teste = []

    const refe = useRef(null)

    return (
        <>
            <center><h5>Elenco </h5></center>
            <div ref={refe} style={{ height: height, overflowY: 'scroll' }} className="card-body">
                {nodes.map((squad) => (

                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">
                                <Image class="card-title" src="https://i.pinimg.com/originals/82/a0/c0/82a0c08f08e799ae8c0e4745598d0bf4.png" style={{ width: 47, height: 47, marginRight: 47 }} roundedCircle />
                                {squad.label} <span class="badge bg-success"> {squad.position ? squad.position.toUpperCase() : null }</span>
                            </h6>


                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default ListaJogadores