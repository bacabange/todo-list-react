import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTask from './InputTask';

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  // Ciclo de vida que se ejecuta antes de recibir props
  componentWillReceiveProps(props) {
    this.setState({ tasks: props.tasks });
  }

  getTaskListItems() {
    return this.state.tasks.map((task, index) => (
      <li className="list-group-item" onClick={() => this.checkTask(index)} key={index}>
        {task.name}
      </li>
    ));
  }

  checkTask = task => {
    this.props.checkTask(task);
  };

  handleAddTaskToList = title => {
    this.props.onAddTask(title);
  };

  render() {
    const tasks = this.getTaskListItems();

    return (
      <div className="col-md-6">
        <div className="todolist not-done">
          <h1>{this.props.title}</h1>
          <InputTask onAddTask={this.handleAddTaskToList} />

          <ul className="ui-list list-group list-group-flush">
            {tasks.length > 0 ? tasks : <li className="list-group-item">Loading...</li>}
          </ul>

          <div className="todo-footer">
            <strong>
              <span className="count-todos">{tasks.length} </span>
            </strong>
            Items Left
          </div>
        </div>
      </div>
    );
  }
}

TodoContainer.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string,
  checkTask: PropTypes.func.isRequired,
};

TodoContainer.defaultProps = {
  tasks: [],
  title: '',
};

export default TodoContainer;
