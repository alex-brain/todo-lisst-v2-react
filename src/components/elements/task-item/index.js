import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TaskRow, Input } from '../index';
import './style.scss';

class TaskItem extends Component {

  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      completed: PropTypes.bool,
      priority: PropTypes.string,
      dueTime: PropTypes.string,
      executionTime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    }),
    onChangeTaskActive: PropTypes.func
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
    const { data, onChangeTaskActive } = this.props;
    const { title, description, completed, priority, dueTime, executionTime } = data;
    const formattedDueTime = dueTime ? this.getFormattedDateTime(dueTime) : '';
    const formattedExecutionTime= executionTime ? this.getFormattedDateTime(executionTime) : '';

    return (
      <div className="TaskItem">
        <TaskRow
          cells={[
            <Input
              type={'checkbox'}
              theme={'checkbox'}
              value={completed}
              checked={completed}
              onChange={onChangeTaskActive(data)}
            />,
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