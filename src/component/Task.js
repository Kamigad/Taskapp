import React from 'react'
import TaskDisplay from './TaskDisplay'

export default class Task extends React.Component 
{
    render() {
        return this.props.task.map(Todo=> <TaskDisplay task={Todo} key= {Todo.id} index={this.props.llave} deleteTask={this.props.deleteTask}></TaskDisplay>)
    }
}