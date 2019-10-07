import * as tslib_1 from 'tslib';
import * as React from 'react';

const ObjectGroupField = /** @class */ (function(_super) {
  tslib_1.__extends(ObjectGroupField, _super);
  function ObjectGroupField() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ObjectGroupField.prototype.getRegistry = function() {
    const properties = this.props.properties;
    return (
      properties &&
      properties[0] &&
      properties[0].content &&
      properties[0].content.props.registry
    );
  };
  ObjectGroupField.prototype.render = function() {
    const _a = this.props,
      _b = _a.uiSchema,
      uiSchema = _b === void 0 ? {} : _b,
      properties = _a.properties,
      formContext = _a.formContext;
    const group = uiSchema['ui:group'];
    if (group) {
      const registry = this.getRegistry();
      const RenderGroupComponent = registry.groups[group.type];
      if (RenderGroupComponent) {
        return React.createElement(RenderGroupComponent, {
          properties: properties,
          group: group,
          groupComponents: registry.groups,
          formContext: formContext,
          registry: registry,
        });
      }
      return null;
    }
    return null;
  };
  return ObjectGroupField;
})(React.PureComponent);
export default ObjectGroupField;
