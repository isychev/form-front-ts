import * as tslib_1 from "tslib";
import * as React from "react";
import { getDefaultRegistry } from "react-jsonschema-form/lib/utils";
const FormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormComponent, _super);
    function FormComponent() {
        const _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (formData, newErrorSchema) {
            const _a = _this.props, onChange = _a.onChange, formAlias = _a.formAlias;
            if (onChange) {
                onChange({
                    formData: formData,
                    formAlias: formAlias,
                    newErrorSchema: newErrorSchema,
                });
            }
        };
        _this.onBlur = function (params) {
            const _a = _this.props, onBlur = _a.onBlur, formAlias = _a.formAlias;
            if (onBlur) {
                onBlur(tslib_1.__assign({ formAlias: formAlias }, params));
            }
        };
        _this.onFocus = function (params) {
            const _a = _this.props, onFocus = _a.onFocus, formAlias = _a.formAlias;
            if (onFocus) {
                onFocus(tslib_1.__assign({ formAlias: formAlias }, params));
            }
        };
        _this.onSubmit = function (event) {
            event.preventDefault();
            const _a = _this.props, onSubmit = _a.onSubmit, formAlias = _a.formAlias;
            if (onSubmit) {
                onSubmit({ formAlias: formAlias });
            }
        };
        return _this;
    }
    FormComponent.prototype.componentWillMount = function () {
        const _a = this.props, onInit = _a.onInit, formAlias = _a.formAlias, formSchema = _a.formSchema;
        if (onInit) {
            onInit({
                formAlias: formAlias,
                formSchema: formSchema,
            });
        }
    };
    FormComponent.prototype.componentWillUnmount = function () {
        const _a = this.props, onDelete = _a.onDelete, formAlias = _a.formAlias;
        if (onDelete) {
            onDelete({
                formAlias: formAlias,
            });
        }
    };
    FormComponent.prototype.getRegistry = function () {
        const _a = getDefaultRegistry(), formFields = _a.fields, formWidgets = _a.widgets;
        const _b = this.props, fields = _b.fields, widgets = _b.widgets, groups = _b.groups, formAlias = _b.formAlias, adaptiveClassName = _b.adaptiveClassName, paddingClassName = _b.paddingClassName, formContext = _b.formContext, FieldTemplate = _b.FieldTemplate, ObjectFieldTemplate = _b.ObjectFieldTemplate, ArrayFieldTemplate = _b.ArrayFieldTemplate, BaseInput = _b.BaseInput, _c = _b.schema.definitions, definitions = _c === void 0 ? {} : _c;
        return {
            fields: tslib_1.__assign({}, formFields, fields),
            widgets: tslib_1.__assign({}, formWidgets, widgets, { BaseInput: BaseInput }),
            groups: tslib_1.__assign({}, groups),
            ArrayFieldTemplate: ArrayFieldTemplate,
            ObjectFieldTemplate: ObjectFieldTemplate,
            FieldTemplate: FieldTemplate,
            definitions: definitions,
            formContext: tslib_1.__assign({ adaptiveClassName: adaptiveClassName,
                paddingClassName: paddingClassName,
                formAlias: formAlias }, formContext),
        };
    };
    FormComponent.prototype.render = function () {
        const _a = this.props, safeRenderCompletion = _a.safeRenderCompletion, id = _a.id, idPrefix = _a.idPrefix, className = _a.className, name = _a.name, method = _a.method, target = _a.target, action = _a.action, autocomplete = _a.autocomplete, enctype = _a.enctype, acceptcharset = _a.acceptcharset, noHtml5Validate = _a.noHtml5Validate, disabled = _a.disabled, isReady = _a.isReady, formAlias = _a.formAlias, schema = _a.schema, uiSchema = _a.uiSchema, formData = _a.formData, errorSchema = _a.errorSchema, idSchema = _a.idSchema;
        if (!isReady) {
            return null;
        }
        const registry = this.getRegistry();
        const DefaultSchemaField = registry.fields.SchemaField;
        return (React.createElement("form", { className: className, id: id, name: name || formAlias, method: method, target: target, action: action, autoComplete: autocomplete, encType: enctype, acceptCharset: acceptcharset, noValidate: noHtml5Validate, onSubmit: this.onSubmit },
            React.createElement(DefaultSchemaField, { schema: schema, uiSchema: uiSchema, errorSchema: errorSchema, idSchema: idSchema, idPrefix: idPrefix, formData: formData, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, registry: registry, safeRenderCompletion: safeRenderCompletion, disabled: disabled })));
    };
    return FormComponent;
}(React.PureComponent));
FormComponent.defaultProps = {
    schema: {},
    uiSchema: {},
    isReady: false,
    noValidate: false,
    liveValidate: true,
    disabled: false,
    safeRenderCompletion: false,
    noHtml5Validate: false,
    adaptiveClassName: "col-lg-11",
    paddingClassName: "px-4",
    formData: {},
    widgets: {},
    fields: {},
    formContext: {},
    errorSchema: {},
    idSchema: {},
    idPrefix: "root",
    className: "rjsf",
    method: "POST",
    showErrorList: false,
};
export default FormComponent;
