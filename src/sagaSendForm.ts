import * as tslib_1 from "tslib";
import { put, select } from "redux-saga/effects";
import selectorForm from "./selectorForm";
import onSendForm from "./onSendForm";
export default function sagaSendForm(action) {
    const payload, formAlias, externalAction, otherPayload, form, method, ignoreSend, _a, formSendAction, formData, finalActionUrl;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                payload = action.payload;
                if (!payload) return [3 /*break*/, 3];
                formAlias = payload.formAlias, externalAction = payload.action, otherPayload = tslib_1.__rest(payload, ["formAlias", "action"]);
                return [4 /*yield*/, select(selectorForm, { formAlias: formAlias })];
            case 1:
                form = _b.sent();
                method = form.method, ignoreSend = form.ignoreSend, _a = form.action, formSendAction = _a === void 0 ? externalAction : _a, formData = form.formData;
                if (!(!ignoreSend && formSendAction)) return [3 /*break*/, 3];
                finalActionUrl = typeof externalAction === "function"
                    ? externalAction(action.payload)
                    : formSendAction;
                return [4 /*yield*/, put(onSendForm(tslib_1.__assign({}, otherPayload, { formAlias: formAlias, formData: form.formData, apiConfig: {
                            url: finalActionUrl,
                            data: formData,
                            method: method,
                        } })))];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}
