import * as tslib_1 from 'tslib';
import * as ru from 'date-fns/locale/ru';
import * as React from 'react';
import DatepickerComponent, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateFormat } from '../utils';

registerLocale('ru', ru);
setDefaultLocale('ru');
const Datepicker = /** @class */ (function(_super) {
  tslib_1.__extends(Datepicker, _super);
  function Datepicker() {
    const _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.handleChange = function(date) {
      const _a = _this.props,
        onChange = _a.onChange,
        _b = _a.options,
        options = _b === void 0 ? {} : _b;
      if (onChange) {
        const value = date;
        if (value && options && options.format) {
          value = dateFormat(value, options.format);
        }
        onChange(value);
      }
    };
    return _this;
  }
  Datepicker.prototype.render = function() {
    const _a = this.props,
      value = _a.value,
      disabled = _a.disabled,
      _b = _a.options,
      options = _b === void 0 ? {} : _b,
      placeholder = _a.placeholder;
    const additionProps = options.componentProps || {};
    const _c = options.displayFormat,
      displayFormat = _c === void 0 ? 'dd.MM.yyyy' : _c,
      _d = options.locale,
      locale = _d === void 0 ? 'ru' : _d;
    return React.createElement(
      DatepickerComponent,
      tslib_1.__assign({}, additionProps, {
        className: 'form-control',
        disabled: disabled,
        placeholderText: placeholder,
        selected: value,
        dateFormat: displayFormat,
        onChange: this.handleChange,
        locale: locale,
      }),
    );
  };
  Datepicker.defaultProps = {};
  return Datepicker;
})(React.PureComponent);
Datepicker.defaultProps = {
  placeholder: 'Выберите дату',
  disabled: false,
  onChange: function(date) {
    return date;
  },
  value: null,
  options: {},
};
export default Datepicker;
