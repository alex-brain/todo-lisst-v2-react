import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LayoutField } from '../../layouts';
import { Input, Textarea, Select, Button } from '../../elements';
import './style.scss';

class FormCreateTask extends Component {

  static propTypes = {
    data: PropTypes.object,
    options: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
  };

  onChange = name => {
    return (value) => {
      const data = {...this.props.data, [name]: value};
      this.props.onChange(data);
    };
  };

  onCreateTaskBtnClick = () => {
    this.props.onSubmit(this.props.data);
  };

  onResetBtnClick = () => {
    this.props.onReset();
  };

  render() {
    const { data, options, errors, onReset } = this.props;
    return (
      <div className="FormCreateTask">
        <div className="FormCreateTask__fields">
          <LayoutField
            label={'Название задачи'}
            input={<Input type="text" value={data.title} onChange={this.onChange('title')}/>}
            error={errors.title}
          >
          </LayoutField>
          <LayoutField
            label={'Описание задачи'}
            input={<Textarea
              type="text" value={data.description}
              onChange={this.onChange('description')}
            />}
            error={errors.description}
          >
          </LayoutField>
          <LayoutField
            label={'Важность задачи'}
            input={<Select
              options={options.priority}
              data={data.priority}
              onChange={this.onChange('priority')}
              theme={'short'}
            />}
            error={errors.priority}
          >
          </LayoutField>
          <LayoutField
            label={'Ожидаемое время выполнения задачи'}
            input={<Input
              type="datetime-local"
              value={data.dueTime}
              onChange={this.onChange('dueTime')}
              theme={'small'}/>}
            error={errors.dueTime}
          />
        </div>
        <div className="FormCreateTask__buttons">
          <div className="FormCreateTask__reset-btn">
            <Button onClick={onReset}>
              Очистить
            </Button>
          </div>
          <div className="FormCreateTask__create-btn">
            <Button theme={'green'} onClick={this.onCreateTaskBtnClick}>
              Создать задачу
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCreateTask;