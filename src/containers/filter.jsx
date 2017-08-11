import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeFilter } from './../actions/changeFilter';

import Filter from './../components/filter';

const FilterContainer = ({ filter, onChangeFilter }) => (
  <Filter filter={filter} onChangeFilter={onChangeFilter} />
);

FilterContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeFilter: (value) => dispatch(changeFilter(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
