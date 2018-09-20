import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { TaskList } from '../../components/elements';

class Home extends Component {

  static propTypes = {
    tasks: PropTypes.array,
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

  render() {
    const { tasks } = this.props;
    return (
      <div className="Home">
        <TaskList items={tasks} onChangeTaskActive={this.onChangeTaskActive} />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  tasks: state.tasks.list
}))(Home))
