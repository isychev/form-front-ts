import * as tslib_1 from "tslib";
import { put, select } from "redux-saga/effects";
import validateFormData from "react-jsonschema-form/lib/validate";
import selectorForm from "./selectorForm";
import transformErrors from "./transformErrors";
import onValidateErrorForm from "./onValidateErrorForm";
import onValidateSuccessForm from "./onValidateStartForm";
export default function sagaValidateForm(action) {
    const payload, formAlias, otherPayload, formSchema, formData, schema, resultValidate, errors, errorSchema;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) return [3 /*break*/, 5];
                formAlias = payload.formAlias, otherPayload = tslib_1.__rest(payload, ["formAlias"]);
                return [4 /*yield*/, select(selectorForm, { formAlias: formAlias })];
            case 1:
                formSchema = _a.sent();
                formData = formSchema.formData, schema = formSchema.schema;
                resultValidate = validateFormData(formData, schema, null, transformErrors(formSchema));
                errors = resultValidate.errors, errorSchema = resultValidate.errorSchema;
                if (!errors.length) return [3 /*break*/, 3];
                return [4 /*yield*/, put(onValidateErrorForm(tslib_1.__assign({ formAlias: formAlias,
                        errors: errors,
                        errorSchema: errorSchema }, otherPayload)))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, put(onValidateSuccessForm(tslib_1.__assign({ formAlias: formAlias, data: formData }, otherPayload)))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}
