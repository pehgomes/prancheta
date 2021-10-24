import React from "react";

export default class Teste extends React.Component {

    constructor() {
        super();


        this.state = {
            canvas: null,
            ctx: null,
            nome: "Pedro"
        };

        this.clicaNiMim = this.clicaNiMim.bind(this);
        this.desenhar = this.desenhar.bind(this);
    }

    clicaNiMim(e) {
        this.setState({
            nome: "Jenny"
        })
    }

    desenhar(e) {
        this.state.ctx.beginPath()
        this.state.ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        this.state.ctx.fill()
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        this.setState({
            canvas: canvas,
            ctx: ctx
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.nome}</h3>
                <canvas ref="canvas" onMouseMove={this.clicaNiMim}></canvas>
                <button onClick={this.desenhar}> desenhar </button>
            </div>
        )
    }
}