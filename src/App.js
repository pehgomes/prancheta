import React, { useState, useEffect, useRef } from 'react'
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

export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;



export default function App() {

  const [canvasRef] = useState(React.createRef())
  const [ships, setShip] = useState(Array(1))

  // const handleCanvasClick = (event) => {
  //   // on each click get current mouse location 
  //   const currentCoord = { x: event.clientX, y: event.clientY };
  //   // add the newest mouse location to an array in state 
  //   setCoordinates([...coordinates, currentCoord]);
  // };

  // const handleClearCanvas = (event) => {
  //   setCoordinates([]);
  // };

  function constructor(props) {
    const p = {
      x: 100,
      y: 75,
      r: 50,
      sAngle: 0,
      eAngle: 2 * Math.PI,
      width: 100,
      height: 100,
      right: 100 + 100,
      bottom: 75 + 100,
      fill: 'blue'
    }

    this.setState({
      ships: [...ships, p]
    })
  }

  function getShips() {
    const p = {
      x: 50,
      y: 25,
      r: 20,
      sAngle: 0,
      eAngle: 2 * Math.PI,
      width: 50,
      height: 25,
      right: 100 + 50,
      bottom: 75 + 25,
      fill: 'blue'
    }

    const a = {
      x: 100,
      y: 75,
      r: 50,
      sAngle: 0,
      eAngle: 2 * Math.PI,
      width: 50,
      height: 25,
      right: 100 + 50,
      bottom: 75 + 25,
      fill: 'green'
    }

    const arr = []

    arr.push(a)
    arr.push(p)
    // arr.push(a)
    return arr;
  }

  function getProdutosListItem() {
    return produtos.map(prod => {
      return <li key={prod.id}>{prod.id} - {prod.name}</li>
    })
  }

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>

      <div className="Cards">
        <Card titulo="Esquerda" color="#FA6900">
          <ul>
            {getProdutosListItem()}
          </ul>
        </Card>


        <div className="CardDoMeio">
          {/* <Teste></Teste> */}
          <Canvas
            ships={getShips()}
            width={canvasWidth}
            height={canvasHeight}></Canvas>
        </div>

        <Card titulo="Direita" color="#FA6900">

          <ul >
            <li className="item">3  -  5  -2</li>
            <li className="item">4  -  4  -  2</li>
            <li className="item">4  -  3  -  1  -  2</li>
            <li className="item">3  -  5  -2</li>
            <li className="item">4  -  4  -  2</li>
            <li className="item">3  -  5  -2</li>
            <li className="item">4  -  4  -  2</li>
            <li className="item">3  -  5  -2</li>
            <li className="item">4  -  4  -  2</li>
          </ul>

        </Card>
      </div>
    </div >
  )
}


