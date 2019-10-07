import * as tslib_1 from 'tslib';
import * as React from 'react';
import ObjectField from './ObjectField';

const InlineField = function(props) {
  const _a = props.schema,
    schema = _a === void 0 ? {} : _a,
    uiSchema = props.uiSchema;
  const _b = schema.properties,
    properties = _b === void 0 ? {} : _b;
  const newUiSchema = tslib_1.__assign({}, uiSchema, {
    'ui:group': {
      name: 'inline',
      type: 'inline',
      fields: Object.keys(properties),
      order: Object.keys(properties),
      groups: [],
    },
  });
  return React.createElement(
    ObjectField,
    tslib_1.__assign({}, props, { uiSchema: newUiSchema }),
  );
};
export default InlineField;
