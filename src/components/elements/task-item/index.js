import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TaskRow } from '../index';
import './style.scss';

class TaskItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
    priority: PropTypes.string,
  };

  render() {
    const { title, description, active, priority } = this.props;
    return (
      <div className="TaskItem">
        <TaskRow
          cells={[
            active,
            title,
            description,
            priority
          ]}
        />
      </div>
    );
  }
}

export default TaskItem;