import React from 'react';

const TodoList = props => {
  return (
    <div>
      {props.task.map(item => (
        <Item key={item.id} item={item} completedTask={props.completedTask} />
      ))}
      <button onClick={props.completedTask}>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
