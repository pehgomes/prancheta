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
    nodes: [],
    canvasRef: React.createRef(),
    teamResource: []
  }

  componentDidMount() {
    fetch(`http://localhost:8080/football/3984/players`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ nodes: data })
      })
      .catch(console.log)
  }

  toNode(squads) {
    let id = 0;
    var nodes = []
    squads.forEach(squad => {
      nodes.push({ id: id, shape: "dot", label: squad.name, x: -400, y: 200 })
    })

    return nodes;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
        </Router>

        <div className="Cards">
          <Card width={canvasWidth} titulo="Esquerda" color="#FA6900">
            <ListaJogadores nodes={this.state.nodes} height={canvasHeight} className="Teste"></ListaJogadores>
          </Card>


          <div className="CardDoMeio">
            <Campo nodes={this.state.nodes}></Campo>
          </div>

          <Card titulo="Direita" color="#FA6900">
            <Formacao height={canvasHeight}></Formacao>
          </Card>
        </div>
      </div >
    )
  }

}


