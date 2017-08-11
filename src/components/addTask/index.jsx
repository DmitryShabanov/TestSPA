import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const AddTask = ({ taskInput, onAdd, onChangeTaskInput }) => (
  <section className="container add-task">
    <div className="col-12">
      <div className="add-task--form">
        <input
          className="add-task--input"
          type="text"
          placeholder="Task here"
          value={taskInput}
          onChange={(event) => onChangeTaskInput(event.target.value)}
        />
        <input
          className="add-task--button"
          type="button"
          value="ADD TASK"
          onClick={() => {
            onAdd(taskInput);
            onChangeTaskInput('');
          }}
        />
      </div>
    </div>
  </section>
);

AddTask.propTypes = {
  taskInput: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChangeTaskInput: PropTypes.func.isRequired,
};

export default AddTask;
