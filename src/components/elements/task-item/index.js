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
    dueTime: PropTypes.string,
    executionTime: PropTypes.string,
  };

  getFormattedDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formatter =  new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    return formatter.format(date);
  };

  render() {
    const { title, description, active, priority, dueTime, executionTime } = this.props;
    const formattedDueTime = dueTime ? this.getFormattedDateTime(dueTime) : '';
    const formattedExecutionTime= executionTime ? this.getFormattedDateTime(executionTime) : '';

    return (
      <div className="TaskItem">
        <TaskRow
          cells={[
            active,
            title,
            description,
            priority,
            formattedDueTime,
            formattedExecutionTime
          ]}
        />
      </div>
    );
  }
}

export default TaskItem;