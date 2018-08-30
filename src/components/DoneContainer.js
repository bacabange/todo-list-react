import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DoneContainer extends Component {
  constructor(props) {
    super(props);
  }

  getTaskListItems() {
    return this.props.tasks.map((task, index) => (
      <li key={index}>
        {task.name}
        <button className="remove-item btn btn-default btn-xs pull-right">
          <i className="fa fa-times" />
        </button>
      </li>
    ));
  }

  render() {
    const tasks = this.getTaskListItems();

    return (
      <div className="col-md-6">
        <div className="todolist">
          <h1>{this.props.title}</h1>
          <ul className="list-unstyled">{tasks}</ul>
        </div>
      </div>
    );
  }
}

DoneContainer.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string,
};

DoneContainer.defaultProps = {
  tasks: [],
  title: '',
};

export default DoneContainer;
