import React, { Component } from "react";
import TodoItem from './todo-item';
import TodoForm from './todo-form';

class TodoList extends Component {
state = { 
    todos: [ { id: 1, text: 'Learn React'}, {id: 2, text: 'Listen to Music'}],
    latestId: 3
   
}

addTodo = (newTodoText) => {
    let newTodo = {};
    newTodo.id = this.state.todos.length+1;
    newTodo.text = newTodoText;
    
    let newList = [...this.state.todos, newTodo];
    this.setState({
        todos: newList,
        latestId: this.state.latestId + 1
    });
}

deleteTodo = (id) => {
    console.log('Delete method called with id:', id);
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos});
}
// handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log('Form Submission: ', this.state.newTodoList);
//     let newTodo = {};
//     newTodo.id = this.state.todos.length+1;
//     newTodo.text = this.state.newTodoText;

//     let newList = [...this.state.todos, newTodo];
//     this.setState({
//         todos: newList,
//         newTodoText: ''
//     });
// }

// handleChange = (evt) => {
//     this.setState({
//         newTodoText: evt.target.value
//     })
// }
    render(){
        return (
            <div>
            <h3>List of Todos</h3>
            {/* <form onSubmit = {this.handleSubmit}>
            <input type = "text" value={this.state.newTodoText}
            onChange={this.handleChange}/>
            <button>Add Todo</button>
            </form> */}
            <TodoForm addTodo = {this.addTodo} deleteTodo={this.deleteTodo} />
            <ul>
                {/* {this.state.todos.map(todo => <li key = {todo.id}>{todo.id} - {todo.text}</li>)} */}
                {this.state.todos.map(tododd => <TodoItem key={tododd.id} mytodo={tododd} /> )} 

            </ul>    
            </div>
        )
    }
}

export default TodoList;