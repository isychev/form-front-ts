import * as tslib_1 from 'tslib';
import * as React from 'react';
import BaseInput from './BaseInput';

const TextWidget = function(props) {
  return React.createElement(
    BaseInput,
    tslib_1.__assign({ Component: 'textarea' }, props),
  );
};
export default TextWidget;
