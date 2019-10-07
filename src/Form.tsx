import * as tslib_1 from "tslib";
import * as React from "react";
import DefaultFields from "./fields";
import FormComponent from "./FormComponent";
import FieldTemplate from "./DefaultTemplate";
import DefaultGroups from "./groups";
import DefaultWidgets from "./widgets";
import withForm from "./withForm";

var Form = function (props) {
  var widgets = props.widgets,
      fields = props.fields,
      groups = props.groups,
      otherProps = tslib_1.__rest(props, ["widgets", "fields", "groups"]);

  return <FormComponent {...tslib_1.__assign({}, otherProps, {
    FieldTemplate: FieldTemplate,
    widgets: tslib_1.__assign({}, DefaultWidgets, widgets),
    fields: tslib_1.__assign({}, DefaultFields, fields),
    groups: tslib_1.__assign({}, DefaultGroups, groups),
    BaseInput: DefaultWidgets.BaseInput
  })} />;
};

export default withForm(Form);
