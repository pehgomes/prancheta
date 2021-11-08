import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import produtos from './players'

import Navbar from './components/layout/Navbar.js'
import Card from './components/Card.js'
import Formacao from './components/Formacao';
import ListaJogadores from './components/ListaJogadores';
import Campo from './components/Campo'

export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;

export default class App extends React.Component {

  state = {
    canvasRef: React.createRef(),
    ships: [],
    teamResource: []
  }

  constructor(props) {
    super(props)

    var a = this.createPlayer(100, 100, 35, 0, 2 * Math.PI, 25, 10, "#673AB7");
    var b = this.createPlayer(200, 130, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var c = this.createPlayer(200, 160, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var d = this.createPlayer(100, 190, 35, 0, 2 * Math.PI, 25, 10, "#673AB7");
    var e = this.createPlayer(200, 220, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var f = this.createPlayer(200, 250, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var g = this.createPlayer(200, 280, 35, 0, 2 * Math.PI, 25, 10, "#673AB7");

    var h = this.createPlayer(300, 300, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var i = this.createPlayer(300, 472, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var j = this.createPlayer(420, 285, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")
    var k = this.createPlayer(413, 117, 35, 0, 2 * Math.PI, 25, 10, "#673AB7")

    let { ships } = this.state;

    ships.push(a);

    ships.push(b);
    ships.push(c);
    ships.push(i);

    ships.push(j);
    ships.push(k);
    ships.push(d);
    ships.push(e);
    ships.push(f);

    ships.push(g);
    ships.push(h);

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
          <Card width={canvasWidth} titulo="Esquerda" color="#FA6900">
            <ListaJogadores className="Teste"></ListaJogadores>
          </Card>


          <div className="CardDoMeio">
            <Campo></Campo>
          </div>

          <Card titulo="Direita" color="#FA6900">
            <Formacao></Formacao>
          </Card>
        </div>
      </div >
    )
  }

}


