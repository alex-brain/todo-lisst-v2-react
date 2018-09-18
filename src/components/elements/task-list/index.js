import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../lists';
import { TaskItem, TaskRow } from '../index';
import './style.scss';

class TaskList extends Component {

  static propTypes = {
    items: PropTypes.array,
  };

  renderItem = (item) => (
    <TaskItem
      title={item.title}
      description={item.description}
      priority={item.priority}
      active={item.active}
    />
  );

  render() {
    const { items } = this.props;
    return (
      <div className="TaskList">
        <TaskRow
          cells={[
            'Выполнено',
            'Название',
            'Описание',
            'Важность',
          ]}
        />
        <List
          items={items}
          renderItem={this.renderItem}
          getItemId={item => item.id}
        />
      </div>
    );
  }
}

export default TaskList;