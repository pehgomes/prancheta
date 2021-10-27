import React, { useRef, useEffect, useState } from "react";
import campinho from './../campinho.jpg'

export default class Canva extends React.Component {

    state = {
        canvasRef: 0,
        ctx: 0,
        ships: this.props.ships || Array(1),
        offsetX: 0,
        offsetY: 0,
        mouseIsDown: false,
        lastX: 0,
        lastY: 0,
        count: 0,
        formacao: {
            id: 123,
            output: "3  -  5  -  2",
            zag: 3,
            mei: 5,
            ata: 2,
            xZag: [
                { x: 170, y: 150, z: 35 },
                { x: 170, y: 250, z: 35 },
                { x: 170, y: 390, z: 35 }
            ],
            xMei: [
                { x: 365, y: 85, z: 35 },
                { x: 355, y: 210, z: 35 },
                { x: 355, y: 330, z: 35 },
                { x: 365, y: 492, z: 35 },
                { x: 480, y: 330, z: 35 }
            ]
        }
    }


    mudarFormacao = () => {
        var formacao = this.state.formacao;
        var esq = null;

        for (var i = 0; i < this.state.ships.length; i++) {
            var ship = this.state.ships[i]

            if (i < formacao.zag) {
                esq = formacao.xZag[i]
            } else if (i < formacao.mei + formacao.zag) {
                esq = formacao.xMei[i - formacao.zag]
            }

            ship.x = esq.x;
            ship.y = esq.y;
            ship.r = esq.z;

            this.handleMouseMoveTeste(esq.x, esq.y)

        }

        this.state.formacao.xZag.map((zag) => (
            this.setState({
                count: this.count + 1
            })
        ))
    }

    handleMouseMoveTeste(x, y) {


        var mouseX = parseInt(x- this.state.offsetX);
        var mouseY = parseInt(y - this.state.offsetY);


        for (var i = 0; i < this.state.ships.length; i++) {
            var ship = this.state.ships[i];
            this.draw(ship);
            if (this.state.ctx.isPointInPath(this.state.lastX, this.state.lastY)) {
                ship.x += (mouseX - this.state.lastX);
                ship.y += (mouseY - this.state.lastY);
                ship.right = ship.x + ship.width;
                ship.bottom = ship.y + ship.height;
            }

        }

        this.setState({
            lastX: mouseX,
            lastY: mouseY,
        })

        this.drawAllShips();

    }

    constructor(props) {
        super(props)
        this.mudarFormacao = this.mudarFormacao.bind(this)

        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.draw = this.draw.bind(this)
        this.drawAllShips = this.drawAllShips.bind(this)
    }


    draw = (ship) => {
        //  this.state.ctx.clearRect(0, 0, this.state.ctx.canvas.width, this.state.ctx.canvas.height)
        if (ship != undefined) {
            this.state.ctx.beginPath()
            this.state.ctx.moveTo(ship.x, ship.y)
            this.state.ctx.arc(ship.x, ship.y, ship.r, ship.sAngle, ship.eAngle);
            this.state.ctx.stroke();
        }
    }

    drawAllShips() {
        this.state.ctx.clearRect(0, 0, this.state.canvasRef.width, this.state.canvasRef.height);
        for (var i = 0; i < this.state.ships.length; i++) {
            var ship = this.state.ships[i]
            this.draw(ship);
            this.state.ctx.fillStyle = ship.fill;
            this.state.ctx.fill();
            this.state.ctx.stroke();
        }
    }



    handleMouseDown(e) {
        var mouseX = parseInt(e.clientX - this.state.offsetX);
        var mouseY = parseInt(e.clientY - this.state.offsetY);

        this.setState({
            lastX: mouseX,
            lastY: mouseY,
            mouseIsDown: true
        })

        console.log(`acabei de clicar em:\n x - ${mouseX}\n y - ${mouseY} `)

    }

    handleMouseUp(e) {
        var mouseX = parseInt(e.clientX - this.state.offsetX);
        var mouseY = parseInt(e.clientY - this.state.offsetY);

        this.setState({
            mouseIsDown: false
        })
    }

    handleMouseMove(e) {

        if (!this.state.mouseIsDown) {
            return;
        }


        var mouseX = parseInt(e.clientX - this.state.offsetX);
        var mouseY = parseInt(e.clientY - this.state.offsetY);


        for (var i = 0; i < this.state.ships.length; i++) {
            var ship = this.state.ships[i];
            this.draw(ship);
            if (this.state.ctx.isPointInPath(this.state.lastX, this.state.lastY)) {
                ship.x += (mouseX - this.state.lastX);
                ship.y += (mouseY - this.state.lastY);
                ship.right = ship.x + ship.width;
                ship.bottom = ship.y + ship.height;
            }

        }

        this.setState({
            lastX: mouseX,
            lastY: mouseY,
        })

        this.drawAllShips();

    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        this.setState({
            ctx: ctx,
            canvasRef: canvas,
            offsetX: canvas.offsetLeft,
            offsetY: canvas.offsetTop,
        })

        if (this.state.ctx != 0) {
            this.drawAllShips();
        }
    }



    render() {
        return (
            <div>
                <canvas ref="canvas" width={this.props.width} height={this.props.height}
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.handleMouseUp}
                    style={{
                        backgroundImage: `url(${campinho})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}>
                </canvas>

                <button onClick={this.mudarFormacao}>Mudar Formação</button>
            </div>

        )
    }
}

// https://stackblitz.com/edit/react-z7nhgd?file=index.js
// export default Canvas
// http://jsfiddle.net/6xerkts8/6/
// https://stackoverflow.com/questions/35850118/setting-state-on-componentdidmount/35853603#:~:text=You%20may%20call%20setState(),t%20see%20the%20intermediate%20state.