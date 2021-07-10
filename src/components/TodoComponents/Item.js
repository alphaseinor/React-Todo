import React from 'react';

const Item = props => {
  let itemClassName = 'item';
  if (props.item.completed) {
    itemClassName = itemClassName + ' completed';
  }

  const handleClick = () => {
    //do something with the completedTask?
    props.completedTask(props.item.id);
  };

  return (
    <div onClick={handleClick} classname={itemClassName}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Item;
