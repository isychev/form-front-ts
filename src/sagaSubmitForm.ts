import * as tslib_1 from "tslib";
import { put, take, race, select } from "redux-saga/effects";
import onValidateForm from "./onValidateForm";
import { FORM_VALIDATE_ERROR, FORM_VALIDATE_SUCCESS } from "./constantsForm";
import selectorForm from "./selectorForm";
import onSubmitSuccessForm from "./onSubmitSuccessForm";
import onSubmitErrorForm from "./onSubmitErrorForm";
export default function sagaFormSubmit(action) {
    const payload, formAlias, otherPayload, validateResult, form;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) return [3 /*break*/, 7];
                formAlias = payload.formAlias, otherPayload = tslib_1.__rest(payload, ["formAlias"]);
                return [4 /*yield*/, put(onValidateForm(tslib_1.__assign({ formAlias: formAlias }, otherPayload)))];
            case 1:
                _a.sent();
                return [4 /*yield*/, race({
                        success: take(FORM_VALIDATE_SUCCESS),
                        cancel: take(FORM_VALIDATE_ERROR),
                    })];
            case 2:
                validateResult = _a.sent();
                return [4 /*yield*/, select(selectorForm, { formAlias: formAlias })];
            case 3:
                form = _a.sent();
                if (!validateResult.success) return [3 /*break*/, 5];
                return [4 /*yield*/, put(onSubmitSuccessForm(tslib_1.__assign({ formAlias: formAlias,
                        form: form, data: form.formData }, otherPayload)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, put(onSubmitErrorForm(tslib_1.__assign({ formAlias: formAlias, form: form }, otherPayload)))];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}
