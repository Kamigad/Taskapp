import React, { Component } from "react";


export default class TaskDisplay extends Component 
{
    

    render()
    {
        const {task} = this.props;

        return (
        <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h3>{task.title}</h3>
                    <span className="badge bg-danger">{task.priority}</span>
                </div>
                <div className="card-body">
                    <p>{task.description}</p>
                    <p><mark>{task.responsible}</mark></p>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.props.deleteTask.bind(this, task.id)}>
                            Delete
                        </button>

                    </div>
                </div>
             
            </div>
        </div>
        )
    }
}