import React, { Component } from 'react';

export default class InputTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  handleChangeInput = event => {
    this.setState({
      title: event.target.value,
    });
  };

  handeAddTask = event => {
    if (event.keyCode == 13) {
      this.props.onAddTask(event.target.value);
      this.setState({
        title: '',
      });
    }
  };

  render() {
    return (
      // React.Fragment es un elemento de react para envolver elementos si no queremos mostrar un div u otro elemento de html
      // Pueden ver más en https://reactjs.org/docs/fragments.html
      <React.Fragment>
        <input
          type="text"
          onChange={this.handleChangeInput}
          value={this.state.title}
          onKeyDown={this.handeAddTask}
          className="form-control add-todo"
          placeholder="Add todo"
        />

        {/* <button id="checkAll" className="btn btn-success">
          Mark all as done
        </button> */}
      </React.Fragment>
    );
  }
}
