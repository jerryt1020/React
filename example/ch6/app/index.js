import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.state = {
      todos: [],
      todo: {
        id: '',
        title: '',
        updatedAt: '',
      },
    };
  }
  handleTodoTextChange(e) {
    this.setState({
      todo: {
        title: e.target.value,
      },
    });
    console.log(e.target.value);
  }
  handleAddTodo() {
    this.state.todos.push(this.state.todo);
    this.setState({
      todos: this.state.todos,
      todo: {
        id: '',
        title: '',
        updatedAt: '',
      },
    });
    console.log(this.state.todo);
  }
  render() {
    return (
      <div>
        <TodoHeader
          todo={this.state.todo}
          onTodoTextChange={this.handleTodoTextChange}
          onAddTodo={this.handleAddTodo}
        />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
