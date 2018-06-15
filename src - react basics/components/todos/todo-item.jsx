import React, { Component } from "react";

class TodoItem extends Component {

    handleDelete = () => {
        this.props.deleteTodo(this.props.mytodo.id);
     }

render(){

       return (
        <div>
        <button className = "ui red basic button" onClick={this.handleDelete}>
        Delete
        </button>   
        <span>  
            {this.props.mytodo.id} - {this.props.mytodo.text}
        </span>
        </div>
    )
}
}
export default TodoItem;