import * as tslib_1 from 'tslib';
import * as React from 'react';
import getChildrenGroup from './childrenGroup';

const InlineGroup = /** @class */ (function(_super) {
  tslib_1.__extends(InlineGroup, _super);
  function InlineGroup() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  InlineGroup.prototype.render = function() {
    const _a = this.props,
      properties = _a.properties,
      group = _a.group,
      registry = _a.registry,
      formContext = _a.formContext;
    const FieldTemplate = registry.FieldTemplate;
    const _b = group.props,
      groupProps = _b === void 0 ? {} : _b;
    if (!properties.length || !FieldTemplate) {
      return null;
    }
    const classNames = '';
    const children = getChildrenGroup(this.props);
    return React.createElement(
      FieldTemplate,
      tslib_1.__assign(
        { formContext: formContext, classNames: classNames },
        groupProps,
      ),
      React.createElement(
        'div',
        { className: 'row' },
        children.map(function(child) {
          return React.createElement(
            'div',
            { key: child.key, className: 'col' },
            child,
          );
        }),
      ),
    );
  };
  return InlineGroup;
})(React.PureComponent);
InlineGroup.defaultProps = {};
export default InlineGroup;
