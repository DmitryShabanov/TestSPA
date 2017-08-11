import React from 'react';

import AddTaskContainer from './addTask';
import TaskListContainer from './taskList';
import FilterContainer from './filter';
import MainHeader from './../components/mainHeader';

const App = () => (
  <div>
    <AddTaskContainer />
    <MainHeader />
    <FilterContainer />
    <TaskListContainer />
  </div>
);

export default App;
