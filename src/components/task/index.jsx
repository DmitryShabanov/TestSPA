import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';

import ChangeTask from './changeTask';

import './index.scss';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.onIsOpened = this.onIsOpened.bind(this);
  }

  onIsOpened() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const taskText = (
      <span className="task--text" onClick={() => this.onIsOpened()}>
        {this.props.task.task}
      </span>
    );
    return (
      <p className="task">
        <span
          className={`task--mark ${(this.props.task.complete) ? 'task--mark-done' : 'task--mark-expected'}`}
          onClick={(e) => this.props.onComplete(e.target.nextElementSibling.innerHTML)}
        />
        {taskText}
        <Portal isOpened={this.state.isOpened} closeOnEsc>
          <ChangeTask onChangeTask={this.props.onChangeTask} onClose={this.onIsOpened}>
            {taskText.props.children}
          </ChangeTask>
        </Portal>
        <span
          className="task--delete-button"
          onClick={(e) => (this.props.onDelete(e.target.previousElementSibling.innerHTML))}
        />
      </p>
    );
  }
}

Task.propTypes = {
  task: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onChangeTask: PropTypes.func.isRequired,
};

export default Task;
