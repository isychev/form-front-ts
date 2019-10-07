import * as tslib_1 from "tslib";
import * as React from "react";
import SelectComponent from "react-select";
const SelectSchema = /** @class */ (function (_super) {
    tslib_1.__extends(SelectSchema, _super);
    function SelectSchema(props) {
        const _this = _super.call(this, props) || this;
        _this.updateOptions = function (props) {
            const labelKey = props.labelKey, schema = props.schema, value = props.value;
            const enums = _this.getEnums(schema);
            const enumNames = _this.getEnumNames(schema);
            const hasEnumNames = Boolean(enumNames.length);
            const newOptions = enums.map(function (currEnum, index) {
                const newLabel = "";
                const displayLabelObj = hasEnumNames ? enumNames[index] : currEnum;
                if (typeof displayLabelObj === "object") {
                    newLabel = displayLabelObj[labelKey];
                }
                else {
                    newLabel = displayLabelObj;
                }
                return {
                    label: newLabel,
                    value: currEnum,
                    enumName: hasEnumNames ? enumNames[index] : {},
                };
            });
            const selectValue = newOptions.filter(function (options) { return options.value === value; })[0] || null;
            _this.setState(function (state) { return (tslib_1.__assign({}, state, { options: newOptions, value: selectValue })); });
        };
        _this.handleChange = function (selectedData) {
            const _a = _this.props, onChange = _a.onChange, _b = _a.options, options = _b === void 0 ? {} : _b;
            const value = null;
            if (onChange) {
                if (!selectedData ||
                    (selectedData &&
                        Array.isArray(selectedData) &&
                        selectedData.length === 0)) {
                    value = null;
                }
                else if (Array.isArray(selectedData)) {
                    value = selectedData.map(function (el) { return el.value; });
                }
                else {
                    value = selectedData.value;
                }
                onChange(value || null, options);
            }
        };
        _this.getEnums = function (schema) {
            if (schema === void 0) { schema = {}; }
            return schema.enum || (schema.items || {}).enum || [];
        };
        _this.getEnumNames = function (schema) {
            if (schema === void 0) { schema = {}; }
            return schema.enumNames || (schema.items || {}).enumNames || [];
        };
        _this.getOptionLabel = function (option) { return option.label; };
        _this.getOptionValue = function (option) { return option.value; };
        _this.state = {
            options: [],
            value: null,
        };
        return _this;
    }
    SelectSchema.prototype.componentWillMount = function () {
        this.updateOptions(this.props);
    };
    SelectSchema.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateOptions(nextProps);
    };
    SelectSchema.prototype.render = function () {
        const _a = this.props, required = _a.required, disabled = _a.disabled, readonly = _a.readonly, multiple = _a.multiple, className = _a.className, _b = _a.options, options = _b === void 0 ? {} : _b;
        const _c = options.componentProps, componentProps = _c === void 0 ? {} : _c, _d = options.placeholder, placeholder = _d === void 0 ? "Select value" : _d;
        const _e = this.state, value = _e.value, stateOptions = _e.options;
        return (React.createElement(SelectComponent, tslib_1.__assign({}, componentProps, { className: className, value: value, placeholder: placeholder, isClearable: !required, isDisabled: disabled || readonly, options: stateOptions, onChange: this.handleChange, isMulti: Boolean(multiple), getOptionLabel: this.getOptionLabel, getOptionValue: this.getOptionValue })));
    };
    SelectSchema.propTypes = {};
    SelectSchema.defaultProps = tslib_1.__assign({}, SelectComponent.defaultProps, { labelKey: "title", required: false, disabled: false, readonly: false, options: {}, schema: {}, uiSchema: {}, multiple: false });
    SelectSchema.MergedWidget = false;
    return SelectSchema;
}(React.PureComponent));
export default SelectSchema;
