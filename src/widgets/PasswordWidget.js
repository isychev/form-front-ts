import * as tslib_1 from 'tslib';
import * as React from 'react';
import BaseInput from './BaseInput';

const TextWidget = function(props) {
  return React.createElement(
    BaseInput,
    tslib_1.__assign({ type: 'password' }, props),
  );
};
export default TextWidget;
