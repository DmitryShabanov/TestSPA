import React from 'react';
import PropTypes from 'prop-types';

import Task from './../task';

import './index.scss';

const TaskList = ({ taskList, onDelete, onComplete, onChangeTask }) => (
  <section className="container task-list">
    <div className="col-12">
      {
        // eslint-disable-next-line
        taskList.map((task, id) => <Task key={id} task={task} onDelete={onDelete} onComplete={onComplete} onChangeTask={onChangeTask} />)
      }
    </div>
  </section>
);

TaskList.propTypes = {
  taskList: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onChangeTask: PropTypes.func.isRequired,
};

export default TaskList;
