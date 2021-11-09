import React, { createRef } from "react";
import { Network, DataSet } from "vis-network/standalone/esm/vis-network";
import campinho from '/home/pedro/Documentos/pedro/react/prancheta/src/campinho.jpg'

export default class Campo extends React.Component {

    state = {
        nodes: this.props.nodes,
        data: {
            nodes: this.nodes,
            edges: new DataSet([])
        },
        options: {
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

        }
    }

    constructor(props) {
        super(props);
        this.network = {};
        this.visJsRef = createRef();
        console.log('construtor campo ' + props.nodes)
    }

    componentDidMount() {
      console.log('component did mount ' + this.props.nodes)
        this.network = new Network(this.visJsRef.current, this.state.data, this.state.options);
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