import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import DoneContainer from './components/DoneContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      tasks_todo: [],
      tasks_done: [],
    };
  }

  componentDidMount() {
    const tasks = [
      { name: 'Aprender react', success: false },
      { name: 'Aprender angular', success: false },
      { name: 'Aprender nodejs', success: true },
      { name: 'Aprender en devhack', success: false },
    ];

    this.setState({
      tasks,
    });
  }

  handleAddTaskToList = title => {
    this.setState({
      tasks: [...this.state.tasks, { name: title, success: false }],
    });
  };

  checkTask = index => {
    // cambiar estado de la tarea para que pase a Already Done
  };

  render() {
    const { tasks } = this.state;
    const task_todo = tasks.filter(task => task.success === false);
    const task_done = tasks.filter(task => task.success === true);

    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoContainer
              tasks={task_todo}
              checkTask={this.checkTask}
              onAddTask={this.handleAddTaskToList}
              title="ToDo List"
            />
            <DoneContainer tasks={task_done} title="Already Done" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
