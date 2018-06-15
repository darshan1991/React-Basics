import React, { Component } from 'react';
import EmpList from './components/employees/emp-list';
//import TodoItem from './components/todos/todo-item';
//import Counter from './components/counter';
//import TodoList from './components/todos/todos-list';
class App extends Component {
  render() {
    return (
      <div className="ui container">
<h1> React JS </h1>
{/* <TodoItem /> */}
{/* <Counter InitialCount={100} /> */}
<EmpList />
      </div>

    );
  }
}

export default App;
