import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { TaskList } from '../../components/elements';

class Home extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className="Home">
        <TaskList items={tasks}/>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  tasks: state.tasks.list
}))(Home))
