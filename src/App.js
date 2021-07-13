import logo from './logo.svg';
import './App.css';
import React from 'react'
import Todo from './Todo.json'
import Task from './component/Task'
import Form from './component/Form'

export default class App extends React.Component
{
  state =
  {
    Todo:Todo
  }

  handleAdd =(title, responsible, description, priority)=> {

    const newTodo={
      title:title,
      responsible:responsible,
      description:description,
      priority:priority,
      id:this.state.Todo.length
    }
    this.setState({
      Todo: [...this.state.Todo, newTodo]
    })
    
  }

  removeTask =(index)=> {
    const newTodo = this.state.Todo.filter(todo => todo.id !==index)
    this.setState({Todo: newTodo})
}

  render() 
  {

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.Todo.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <Form onAdd={this.handleAdd} ></Form>
            </div>

            <div className="col-md-8">
          <div className="row">
          <Task task={this.state.Todo} deleteTask={this.removeTask} llave={this.state.Todo.length}></Task>
          </div>
        </div>
          </div>

        </div>

        
        

      </div>
    );
  }
}



