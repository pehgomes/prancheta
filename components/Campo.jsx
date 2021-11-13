import React, { useRef } from "react";
import { Network} from "vis-network/standalone/esm/vis-network";
import campinho from '/home/pedro/Documentos/pedro/react/prancheta/src/campinho.jpg'

const Campo = ({ nodes }) => {

    const options = {
        nodes: {
            borderWidth: 4,
            size: 30,
            color: {
                border: "#222222",
                background: "#673AB7",
            },
            font: { color: "#fefefe" },
        },
        physics: false,
        interaction: {
            zoomView: false,
            dragView: false
        }
    };

    const refe = useRef(null)
    const data = {
        nodes: nodes,
        edges: []
    }


    if (refe.current) {
        new Network(refe.current, data, options)
    }

    return (
        <>
            <div ref={refe}
                height={600}
                width={800}
                style={{
                    height: 600,
                    width: 800,
                    backgroundImage: `url(${campinho})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />
        </>
    );
}

export default Campo