import * as tslib_1 from "tslib";
import filterErrorForDirtyFields from "./filterErrorForDirtyFields";
import repalceMaskError from "./repalceMaskError";
export const transformErrors = function (form) { return function (errors) {
    const _a = form.dirtyFields, dirtyFields = _a === void 0 ? [] : _a, _b = form.defaultErrors, defaultErrors = _b === void 0 ? {} : _b, wasSubmit = form.wasSubmit;
    const filterError = wasSubmit
        ? errors
        : filterErrorForDirtyFields(errors, dirtyFields);
    return filterError.map(function (error) { return (tslib_1.__assign({}, error, { message: defaultErrors[error.name]
            ? repalceMaskError(defaultErrors[error.name], error.params || {})
            : error.message })); });
}; };
export default transformErrors;
