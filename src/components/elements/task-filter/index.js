import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../index';
import './style.scss';

class TaskFilter extends Component {

  static propTypes = {
    onChangeTaskFilterPriority: PropTypes.func,
    options: PropTypes.array,
    data: PropTypes.object,
  };

  onChange = (name) => {
    return () => {
      this.props.onChangeTaskFilterPriority(name);
    };
  };

  getCheckBoxChecked = (item) => {
    const { data } = this.props;
    return data.priority.indexOf(item) !== -1;
  };

  render() {
    const { options } = this.props;
    return (
      <div className="TaskFilter">
        <div className="TaskFilter__label">
          Важность задачи:
        </div>
        <div className="TaskFilter__checkboxes">
          <Checkbox  label={'любая'} onChange={this.onChange('любая')} checked={this.getCheckBoxChecked('любая')}/>
          {options.map((item, index) => (
            <Checkbox key={index} label={item} onChange={this.onChange(item)} checked={this.getCheckBoxChecked(item)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskFilter;