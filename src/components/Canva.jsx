import React, { useRef, useEffect, useState } from "react";
import campinho from './../campinho.jpg'

export default class Canva extends React.Component {

    state = {
        canvasRef: 0,
        ctx: 0,
        ships: this.props.ships || Array(1),
        // mouseX: 0,
        // mouseY: 0,
        offsetX: 0,
        offsetY: 0,
        mouseIsDown: false,
        lastX: 0,
        lastY: 0
    }

    constructor(props) {
        super(props)

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

        // this.setState({
        //     mouseX: parseInt(e.clientX - this.state.offsetX),
        //     mouseY: parseInt(e.clientY - this.state.offsetY)
        // });

        var mouseX= parseInt(e.clientX - this.state.offsetX);
        var mouseY= parseInt(e.clientY - this.state.offsetY);

        console.log('primeiro mouse move - ' + mouseX)
        console.log('primeiro mouse move - ' + mouseY)


        for (var i = 0; i < this.state.ships.length; i++) {
            var ship = this.state.ships[i];
            this.draw(ship);
            if (this.state.ctx.isPointInPath(this.state.lastX, this.state.lastY)) {
                console.log('CLICOU')
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
            </div>

        )
    }
}

// https://stackblitz.com/edit/react-z7nhgd?file=index.js
// export default Canvas
// http://jsfiddle.net/6xerkts8/6/
// https://stackoverflow.com/questions/35850118/setting-state-on-componentdidmount/35853603#:~:text=You%20may%20call%20setState(),t%20see%20the%20intermediate%20state.