import React, { Component } from "react";

export default class Form extends Component {
state ={
    title: '',
    responsible: '',
    description: '',
    priority: 'low'
    
}

handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name
    this.setState({
        [name]: value
    })
}

handleSubmit =(e)=>{
    e.preventDefault();
    this.props.onAdd(this.state.title, this.state.responsible, this.state.description, this.state.priority);
}

render() {

    return (
        <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" onChange={this.handleInput} class="form-control"  placeholder="Title"/>
                    <br></br>
                </div>
                <div className="form-group">
                    <input type="text" name="responsible" onChange={this.handleInput} class="form-control"  placeholder="Responsible"/>
                    <br></br>
                </div>
                <div className="form-group">
                    <input type="text" name="description" onChange={this.handleInput} class="form-control"  placeholder="Description"/>
                    <br></br>
                </div>
                <div className="form-group">
                    <select
                    name="priority"
                    className="form-control"
                    onChange={this.handleInput}
                    >

                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                    <br></br>
                </div>

                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    )
}
}