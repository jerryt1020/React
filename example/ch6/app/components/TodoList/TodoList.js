import React, { PropTypes } from 'react';

const TodoList = (props) => (
  <div>
    <h1>TodoList</h1>
    <ul>
      {
        props.todos.map((todo, index) => (
          <li key={index}>
            <p>{todo.title}</p>
          </li>
        ))
      }
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
