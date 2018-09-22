import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { TaskList, TaskFilter } from '../../components/elements';

class Home extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    taskFilter: PropTypes.object,
    priority: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  onChangeTaskActive = (item) => () => {
    item.completed = !item.completed;
    if (item.completed) {
      item.executionTime = new Date();
    } else {
      item.executionTime = '';
    }
    this.props.dispatch(actions.tasks.update(item));
  };

  onChangeTaskFilterPriority = (priority) => {
    let data = this.props.taskFilter.data.priority;
    const priorityIndex = data.indexOf(priority);
    if (priorityIndex !== -1) {
      if (priority !== 'любая'){
        data.splice(priorityIndex, 1);
      } else {
        data = [];
      }
    } else {
      if (priority !== 'любая'){
        data.push(priority);
      } else {
        data = ['любая', ...this.props.priority];
      }
    }
    this.props.dispatch(actions.taskFilter.change({priority: data}));
  };

  getFilteredTasks = () => {
    const { tasks, taskFilter } = this.props;
    return tasks.filter(item => taskFilter.data.priority.indexOf(item.priority) !== -1);
  };

  render() {
    const { taskFilter, priority } = this.props;
    const filteredTasks = this.getFilteredTasks();
    return (
      <div className="Home">
        <TaskFilter onChangeTaskFilterPriority={this.onChangeTaskFilterPriority} data={taskFilter.data} options={priority} />
        <TaskList items={filteredTasks} onChangeTaskActive={this.onChangeTaskActive} />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  tasks: state.tasks.list,
  taskFilter: state.taskFilter,
  priority: state.priority.data
}))(Home))
