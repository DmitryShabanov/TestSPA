import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteTask } from './../actions/deleteTask';
import { changeTaskStatus } from './../actions/changeTaskStatus';
import { changeTask } from './../actions/changeTask';

import TaskList from './../components/taskList';

const TaskListContainer = ({ tasks, onDelete, onComplete, onChangeTask }) => (
  <TaskList
    taskList={tasks}
    onDelete={onDelete}
    onComplete={onComplete}
    onChangeTask={onChangeTask}
  />
);

TaskListContainer.propTypes = {
  tasks: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onChangeTask: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const tasks = state.tasks.filterNot((value) => value.complete.toString() === state.filter);
  return {
    tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (value) => dispatch(deleteTask(value)),
    onComplete: (value) => dispatch(changeTaskStatus(value)),
    onChangeTask: (task, editedTask) => dispatch(changeTask(task, editedTask)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
