import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTask } from './../actions/addTask';
import { changeTaskInput } from './../actions/changeTaskInput';

import AddTask from './../components/addTask';

const AddTaskContainer = ({ taskInput, onAdd, onChangeTaskInput }) => (
  <AddTask taskInput={taskInput} onAdd={onAdd} onChangeTaskInput={onChangeTaskInput} />
);

AddTaskContainer.propTypes = {
  taskInput: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChangeTaskInput: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    taskInput: state.taskInput,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (task) => dispatch(addTask(task)),
    onChangeTaskInput: (value) => dispatch(changeTaskInput(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);
