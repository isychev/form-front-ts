import * as React from 'react';

const getRenderFields = function(groupFields, arrProps) {
  if (Array.isArray(groupFields) && Array.isArray(arrProps)) {
    return arrProps.filter(function(el) {
      return groupFields.indexOf(el.name) > -1;
    });
  }
  return [];
};
export const isGroupField = function(fieldName, uiGroup) {
  const _a = uiGroup.groups,
    groups = _a === void 0 ? [] : _a;
  return groups.some(function(_a) {
    const name = _a.name;
    return name === fieldName;
  });
};
const getChildrenGroup = function(props) {
  const group = props.group,
    groupComponents = props.groupComponents,
    properties = props.properties,
    registry = props.registry,
    formContext = props.formContext;
  const childrenGroups = group.groups || [];
  const childrenFields = group.fields || [];
  const childrenGroupNames = childrenGroups.map(function(childrenGroup) {
    return childrenGroup.name;
  });
  const order =
    group && group.order
      ? group.order
      : childrenGroupNames.concat(childrenFields);
  return order.map(function(fieldName, index) {
    const isGroup = isGroupField(fieldName, group);
    if (isGroup && groupComponents) {
      const currentGroup = (group.groups || []).find(function(_a) {
        const name = _a.name;
        return name === fieldName;
      });
      if (currentGroup) {
        const GroupComponent = groupComponents[currentGroup.type];
        if (GroupComponent) {
          return React.createElement(GroupComponent, {
            key: '' + (index + 1) + fieldName,
            properties: properties,
            group: currentGroup,
            groupComponents: groupComponents,
            registry: registry,
            formContext: formContext,
          });
        }
      }
      return null;
    }
    const fieldProperties = getRenderFields([fieldName], properties);
    const renderField = fieldProperties.length ? fieldProperties[0] : null;
    if (renderField) {
      return renderField.content;
    }
    return null;
  });
};
export default getChildrenGroup;
