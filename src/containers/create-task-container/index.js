import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../store/actions';
import { FormCreateTask } from '../../components/forms';

class CreateTaskContainer extends Component {

  static propTypes = {
    formCreateTask: PropTypes.object,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  onSubmit = (data) => {
    this.props.dispatch(actions.formCreateTask.submit(data));
    this.props.history.push('/');
  };

  onReset = () => {
    this.props.dispatch(actions.formCreateTask.reset());
  };

  onChange = (data) => {
    this.props.dispatch(actions.formCreateTask.change(data));
  };

  render() {
    const { data, options, errors } = this.props.formCreateTask;
    return (
      <div className="CreateTaskContainer">
        <FormCreateTask
          data={data}
          options={options}
          errors={errors}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  formCreateTask: state.formCreateTask
}))(CreateTaskContainer))
