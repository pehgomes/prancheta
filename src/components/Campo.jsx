import React, { createRef } from "react";
import { Network, DataSet } from "vis-network/standalone/esm/vis-network";
import campinho from '/home/pedro/Documentos/pedro/react/prancheta/src/campinho.jpg'

var nodes = new DataSet([
    { id: 1, shape: "circularImage", image: './camisa.png', label: "Teste", x: -400, y: 200 },
    { id: 2, shape: "circularImage", image: "./camisa.png" , x: -400, y: 90 },
    { id: 3, shape: "circularImage", image: "./camisa.png" , x: -400, y: -20},
    { id: 4, shape: "circularImage", image: "./camisa.png" },
    { id: 5, shape: "circularImage", image: "./camisa.png" },
    { id: 6, shape: "circularImage", image: "./camisa.png" },
    { id: 7, shape: "circularImage", image: "./camisa.png" },
    { id: 8, shape: "circularImage", image: "./camisa.png" },
    { id: 9, shape: "circularImage", image: "./camisa.png" },
    { id: 10, shape: "circularImage", image: "./camisa.png" },
]);

var edges = new DataSet([
]);

var data = {
    nodes: nodes,
    edges: edges
};

var options = {
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

export default class Campo extends React.Component {


    constructor() {
        super();
        this.network = {};
        this.visJsRef = createRef();
    }

    componentDidMount() {
        this.network = new Network(this.visJsRef.current, data, options);
    }

    render() {
        return (
            <div ref={this.visJsRef}
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
        );
    }
}