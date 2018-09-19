import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import themes from '../../../utils/themes';
import './style.scss';

export default class Textarea extends PureComponent {

  static propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    name: PropTypes.string,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    autoFocus: false,
    name: '',
    theme: 'full'
  };

  constructor(props) {
    super(props);
    this.defaultHeight = 0;
  }

  componentDidMount() {
    this.changeHeight();
    this.defaultHeight = this.textarea.style.height;
  }

  autoResize = () => {
    this.changeHeight();
  };

  changeHeight = () => {
    this.textarea.style.height = this.textarea.scrollHeight + 2 + 'px';
  };

  onChange = (e) => {
    const value = e.target.value;
    return this.props.onChange(value);
  };

  onBlur = (e) => {
    let textarea = this.textarea;
    let currentValue = textarea.value;
    textarea.value = '';
    textarea.style.height = this.defaultHeight;
    textarea.value = currentValue;
    this.changeHeight();
    this.props.onBlur(e);
  };

  render() {
    const {theme, autoFocus, name} = this.props;

    return (
      <textarea
        {...this.props}
        className={cn("Textarea", themes('Textarea', theme))}
        onInput={this.autoResize}
        onChange={this.onChange}
        onBlur={this.onBlur}
        autoFocus={autoFocus}
        name={name}
        ref={(item) => this.textarea = item}
      />
    );
  }
}