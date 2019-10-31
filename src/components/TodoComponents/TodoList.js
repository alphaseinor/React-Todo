import React from 'react';

const TodoList = props => {
  return (
    <div>
      {props.task.map(item => console.log(`item: ${item}`))}
      <button onClick={props.completedTask}>Clear Completed Tasks</button>
    </div>
  );
};
