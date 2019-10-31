import React from 'react';

class TodoForm extends React.Component {
  handleChanges = event => {
    console.log(`event handler`);
  };

  render() {
    return (
      <form>
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
