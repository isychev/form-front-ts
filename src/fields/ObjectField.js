import * as tslib_1 from 'tslib';
import * as React from 'react';
import FormObjectWidget from 'react-jsonschema-form/lib/components/fields/ObjectField';
import ObjectGroupField from '../groups/ObjectGroupField';

const ObjectField = /** @class */ (function(_super) {
  tslib_1.__extends(ObjectField, _super);
  function ObjectField() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ObjectField.prototype.render = function() {
    const _a = this.props,
      _b = _a.uiSchema,
      uiSchema = _b === void 0 ? {} : _b,
      registry = _a.registry;
    if (uiSchema['ui:group']) {
      return React.createElement(
        FormObjectWidget,
        tslib_1.__assign({}, this.props, {
          registry: tslib_1.__assign({}, registry, {
            ObjectFieldTemplate: ObjectGroupField,
          }),
        }),
      );
    }
    return React.createElement(
      FormObjectWidget,
      tslib_1.__assign({}, this.props),
    );
  };
  return ObjectField;
})(React.PureComponent);
export default ObjectField;
