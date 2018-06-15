import React, { Component } from "react";
//import TodoList from './todos-list';
//import TodoItem from './todo-item';

class TodoForm extends Component {
 state = { 
    // todos: [ { id: 1, text: 'Learn React'}, {id: 2, text: 'Listen to Music' }],
    newTodoText: ''
 }

handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Form Submission: ', this.state.newTodoText);
    this.props.addTodo(this.state.newTodoText);
    this.setState({
       newTodoText: ''
    });
}

handleChange = (evt) => {
    this.setState({
        newTodoText: evt.target.value
    })
}
    render(){
        return (
            <div className="field">
            {/* <h3>List of Todos</h3> */}
            <form onSubmit = {this.handleSubmit} className="ui form"> 
            <input type = "text" value={this.state.newTodoText}
            onChange={this.handleChange}/>
            <button>Add Todo</button>
            </form>
            <ul>
                {/*this.state.todos.map(todo => <li key = {todo.id}>{todo.id} - {todo.text}</li>)*/}
                {/* {this.state.todos.map(tododd => <TodoItem key={tododd.id} mytodo={tododd} /> )} */}

            </ul>    
            </div>
        )
    }
}

export default TodoForm;