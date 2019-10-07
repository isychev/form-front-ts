import * as tslib_1 from 'tslib';
import * as React from 'react';
import { throttle } from '../utils';

const DEFAULT_DEBOUNCE_TIME = 1000;
const BaseInput = /** @class */ (function(_super) {
  tslib_1.__extends(BaseInput, _super);
  /**
   * set default state
   * @param props
   */
  function BaseInput(props) {
    const _this = _super.call(this, props) || this;
    _this.handleKeyDown = function(event) {
      if (event.key === 'Enter') {
        _this.onChange();
      }
    };
    _this.handleChangeInput = function(e) {
      if (e.currentTarget) {
        _this.setState({
          value: e.currentTarget.value,
          wasBlur: false,
        });
      }
      _this.onChangeDebounce();
    };
    _this.handleBlur = function() {
      const _a = _this.props,
        id = _a.id,
        onBlur = _a.onBlur;
      if (onBlur) {
        onBlur({ id: id });
        _this.onChange();
        _this.setState(function(state) {
          return tslib_1.__assign({}, state, { wasBlur: true });
        });
      }
    };
    _this.onChange = function() {
      const _a = _this.props,
        onChange = _a.onChange,
        options = _a.options;
      const wasBlur = _this.state.wasBlur;
      if (onChange && !wasBlur) {
        const value = _this.state.value;
        onChange(value === '' && options ? options.emptyValue : value);
      }
    };
    _this.state = {
      value: props.value,
      wasBlur: false,
    };
    const options = _this.props.options;
    const debounceTime =
      options && options.debounceTime
        ? options.debounceTime
        : DEFAULT_DEBOUNCE_TIME;
    _this.onChangeDebounce = throttle(_this.onChange, debounceTime);
    return _this;
  }
  /**
   * copy value from props to state
   * @param nextProps
   */
  BaseInput.prototype.componentWillReceiveProps = function(nextProps) {
    const value = this.state.value;
    if (nextProps.value !== value) {
      this.setState({
        value: nextProps.value,
      });
    }
  };
  BaseInput.prototype.render = function() {
    const _a = this.props,
      _b = _a.options,
      options =
        _b === void 0
          ? {
              inputType: 'text',
              componentProps: {},
            }
          : _b,
      readonly = _a.readonly,
      id = _a.id,
      type = _a.type,
      disabled = _a.disabled;
    const Component = this.props.Component;
    const componentType = options.inputType || type || 'text';
    const _c = options.componentProps,
      componentProps = _c === void 0 ? {} : _c;
    const value = this.state.value;
    return React.createElement(
      'div',
      null,
      React.createElement(
        Component,
        tslib_1.__assign({}, componentProps, {
          id: id,
          disabled: disabled,
          type: componentType,
          className: 'form-control',
          readOnly: readonly,
          value: value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChangeInput,
          onBlur: this.handleBlur,
        }),
      ),
    );
  };
  BaseInput.propTypes = {};
  BaseInput.defaultProps = {
    type: 'text',
    required: false,
    disabled: false,
    readonly: false,
    placeholder: '',
    value: '',
    options: {},
    Component: 'input',
    rawErrors: {},
    formContext: {},
    autofocus: false,
    schema: {},
    registry: {},
  };
  return BaseInput;
})(React.PureComponent);
export default BaseInput;
