import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App with redux  <span role="img" aria-label="dog">🐕 💨</span></h2>
        </div>
        <div className="Todo-App">
          <TodoForm
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.changeCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default App;
