import * as tslib_1 from 'tslib';
import * as React from 'react';
import SelectSchema from '../SelectSchema';

const SelectWidget = function(props) {
  const _a = props.options,
    options = _a === void 0 ? {} : _a;
  const _b = options.labelKey,
    labelKey = _b === void 0 ? 'title' : _b;
  return React.createElement(
    SelectSchema,
    tslib_1.__assign({}, props, { labelKey: labelKey }),
  );
};
SelectWidget.defaultProps = {
  options: {},
};
export default SelectWidget;
