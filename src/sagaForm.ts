import * as tslib_1 from "tslib";
import { all, takeEvery } from "redux-saga/effects";
import { FORM_VALIDATE, FORM_SUBMIT, FORM_SUBMIT_SUCCESS, FORM_SEND_SUCCESS, FORM_INIT, FORM_CHANGE } from "./constantsForm";
import sagaValidateForm from "./sagaValidateForm";
import sagaSubmitForm from "./sagaSubmitForm";
import sagaSendForm from "./sagaSendForm";
import sagaRedirectForm from "./sagaRedirectForm";
import sagaInitForm from "./sagaInitForm";
export default function sagaForm() {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, all([
                    takeEvery(FORM_VALIDATE, sagaValidateForm),
                    takeEvery(FORM_CHANGE, sagaValidateForm),
                    takeEvery(FORM_SUBMIT, sagaSubmitForm),
                    takeEvery(FORM_SUBMIT_SUCCESS, sagaSendForm),
                    takeEvery(FORM_SEND_SUCCESS, sagaRedirectForm),
                    takeEvery(FORM_INIT, sagaInitForm),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
