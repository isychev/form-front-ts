import * as tslib_1 from "tslib";
import { put } from "redux-saga/effects";
import onCreateForm from "./onCreateForm";
import getStateFromProps from "./getStateFromProps";
import { FORM_STATUSES, DEFAULT_ERRORS } from "./constantsForm";
export default function sagaInitForm(action) {
    const payload, formSchema, formAlias, defaultErrors, newFormSchema;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) return [3 /*break*/, 2];
                formSchema = payload.formSchema, formAlias = payload.formAlias;
                if (!(formAlias && formSchema)) return [3 /*break*/, 2];
                defaultErrors = formSchema.defaultErrors;
                newFormSchema = getStateFromProps(formSchema);
                return [4 /*yield*/, put(onCreateForm({
                        formAlias: formAlias,
                        formSchema: tslib_1.__assign({}, formSchema, newFormSchema, { defaultErrors: tslib_1.__assign({}, DEFAULT_ERRORS, defaultErrors), dirtyFields: [], wasSubmit: false, isSubmit: false, isReady: true, status: FORM_STATUSES.INIT }),
                    }))];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}
