import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useCanvas } from './hooks/useCanvas';
import produtos from './players'

// import Canvas from './Canvas'

import logo from './logo.svg';
import campinho from './campinho.jpg'
import './App.css';

import Navbar from './components/layout/Navbar.js'
import Container from './components/layout/Container'
import Card from './components/Card.js'
import CardListView from './components/CardListView.js'
import Canvas from './components/Canva'
import Teste from './components/Teste'
import ListaJogadores from './components/ListaJogadores';
import Formacao from './components/Formacao';



export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;



export default class App extends React.Component {

  state = {
    canvasRef: React.createRef(),
    ships: []
  }

  constructor(props) {
    super(props)

    var a = this.createPlayer(100, 75, 50, 0, 2 * Math.PI, 25, 25, "purple");
    var b = this.createPlayer(200, 75, 50, 0, 2 * Math.PI, 25, 25, "purple")
    var c = this.createPlayer(200, 20, 50, 0, 2 * Math.PI, 25, 25, "purple")

    let { ships } = this.state;
    ships.push(a);
    ships.push(b);
    ships.push(c);

    this.createPlayer = this.createPlayer.bind(this)
  }

  createPlayer(x, y, r, sAngle, eAngle, width, height, fill) {
    var p = {
      x: x,
      y: y,
      r: r,
      sAngle: sAngle,
      eAngle: eAngle,
      width: width,
      height: height,
      right: x + width,
      bottom: y + height,
      fill: fill
    }



    return p;
  }

  getProdutosListItem() {
    return produtos.map(prod => {
      return <li key={prod.id}>{prod.id} - {prod.name}</li>
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
        </Router>

        <div className="Cards">
          <Card titulo="Esquerda" color="#FA6900">
           <ListaJogadores></ListaJogadores> 
          </Card>


          <div className="CardDoMeio">
            {/* <Teste></Teste> */}
            <Canvas
              ships={this.state.ships}
              width={canvasWidth}
              height={600}>

            </Canvas>

          </div>

          <Card titulo="Direita" color="#FA6900">
            <Formacao></Formacao>
          </Card>
        </div>
      </div >
    )
  }

}


