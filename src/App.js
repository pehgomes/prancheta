import React, { createRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layout/Navbar.js'
import Card from './components/Card.js'
import Formacao from './components/Formacao';
import ListaJogadores from './components/ListaJogadores';
import Campo from './components/Campo'
import Todo from './components/Todo';

export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
      officialSquad: [],
      canvasRef: React.createRef(),
      teamResource: [],
      minhaRef: {},
      todos: []
    }

    this.addTodo = this.addTodo.bind(this)
  }

  updateSearch = lista => {
    this.setState({ todos: lista })
  }

  addTodo = todo => {
    if (!todo.label || /^\s*$/.test(todo.text)) {
      return;
    }

    if (this.state.todos.length == 11) return;

    if (this.state.todos.filter(a => a.id == todo.id).length != 0) return;
    const newTodos = [todo, ...this.state.todos]

    this.setState({ todos: newTodos })
  }

  removeTodo = id => {
    const removedArr = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos: removedArr })
  }

  completeTodo = id => {
    let updateTodos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    this.setState({
      todos: updateTodos
    })
  }


  componentDidMount() {
    fetch(`http://localhost:8080/football/3984/players`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ nodes: this.toNode(data) })
      })
  }

  toNode(squads) {
    let id = 0;
    var nodes = []
    squads.forEach(squad => {
      nodes.push({
        id: squad.randomId,
        shape: "dot",
        image: "https://i.pinimg.com/originals/82/a0/c0/82a0c08f08e799ae8c0e4745598d0bf4.png",
        label: squad.name, x: Math.floor(Math.random() * -400), y: Math.floor(Math.random() * 200),
        position: squad.position
      })
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
            <ListaJogadores nodes={this.state.nodes} height={canvasHeight} onSubmit={this.addTodo}
              updateSearch={this.updateSearch} />

            <div class="card-body">
              <Todo todos={this.state.todos}
                completeTodo={this.completeTodo}
                removeTodo={this.removeTodo}></Todo>
            </div>
          </Card>

          <div className="CardDoMeio">
            <Campo nodes={this.state.todos} ></Campo>
          </div>

          <Card titulo="Direita" color="#FA6900">
            <Formacao height={canvasHeight}></Formacao>
          </Card>
        </div>
      </div >
    )
  }

}


