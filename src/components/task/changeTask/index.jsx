import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class ChangeTask extends Component {
  constructor(props) {
    super(props);
    this.state = { editedValue: props.children };
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(value) {
    this.setState({ editedValue: value });
  }

  render() {
    return (
      <div>
        <div
          className="change-task--background"
          onClick={() => this.props.onClose()}
        />
        <div className="change-task--form">
          <div className="change-task--cancel">
            <span className="change-task-title">Change task</span>
            <div
              className="change-task--cancel-button"
              onClick={() => this.props.onClose()}
            />
          </div>
          <textarea
            className="change-task--area"
            defaultValue={this.state.editedValue}
            onChange={(e) => this.onEdit(e.target.value)}
          />
          <input
            type="button"
            value="DONE"
            className="change-task--confirm-button"
            onClick={() => {
              this.props.onChangeTask(this.props.children, this.state.editedValue);
              this.props.onClose();
            }}
          />
        </div>
      </div>
    );
  }
}

ChangeTask.propTypes = {
  onChangeTask: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChangeTask;
