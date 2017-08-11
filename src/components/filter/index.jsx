import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Filter = ({ filter, onChangeFilter }) => (
  <section className="container filter">
    <div className="col-12">
      <div className="filter--buttons-panel">
        <input
          className={`filter--button ${(filter === '') ? 'filter--button-selected' : ''}`}
          type="button"
          value="All"
          onClick={() => onChangeFilter('')}
        />
        <input
          className={`filter--button ${(filter === 'false') ? 'filter--button-selected' : ''}`}
          type="button"
          value="Complete"
          onClick={() => onChangeFilter('false')}
        />
        <input
          className={`filter--button ${(filter === 'true') ? 'filter--button-selected' : ''}`}
          type="button"
          value="In process"
          onClick={() => onChangeFilter('true')}
        />
      </div>
    </div>
  </section>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
