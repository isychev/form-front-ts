import * as tslib_1 from "tslib";
import appendDirtyField from "./appendDirtyField";
import { FORM_BLUR, FORM_CHANGE, FORM_CREATE, FORM_DELETE, FORM_SEND, FORM_SEND_ERROR, FORM_SEND_START, FORM_SEND_SUCCESS, FORM_STATUSES, FORM_SUBMIT, FORM_SUBMIT_ERROR, FORM_SUBMIT_SUCCESS, FORM_UPDATE, FORM_VALIDATE_ERROR, FORM_VALIDATE_SUCCESS, } from "./constantsForm";
export default function reducerForn(state, action) {
    if (state === void 0) { state = {}; }
    const _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const type = action.type, payload = action.payload;
    if (!payload || !payload.formAlias) {
        return state;
    }
    const formAlias = payload.formAlias;
    switch (type) {
        case FORM_CREATE: {
            const formSchema = payload.formSchema;
            if (formSchema) {
                return tslib_1.__assign({}, state, (_a = {}, _a[formAlias] = formSchema, _a));
            }
            return state;
        }
        case FORM_DELETE: {
            const _p = formAlias, currForm = state[_p], filterState = tslib_1.__rest(state, [typeof _p === "symbol" ? _p : _p + ""]);
            return filterState;
        }
        case FORM_UPDATE: {
            const formSchema = payload.formSchema;
            return tslib_1.__assign({}, state, (_b = {}, _b[formAlias] = tslib_1.__assign({}, state[formAlias], formSchema), _b));
        }
        case FORM_BLUR: {
            const id = payload.id;
            const formSchema = state[formAlias];
            const _q = formSchema.dirtyFields, dirtyFields = _q === void 0 ? [] : _q;
            return tslib_1.__assign({}, state, (_c = {}, _c[formAlias] = tslib_1.__assign({}, state[formAlias], { dirtyFields: appendDirtyField(dirtyFields, id) }), _c));
        }
        case FORM_SUBMIT: {
            return tslib_1.__assign({}, state, (_d = {}, _d[formAlias] = tslib_1.__assign({}, state[formAlias], { isSubmit: true, wasSubmit: true, status: FORM_STATUSES.SUBMIT }), _d));
        }
        case FORM_SUBMIT_SUCCESS: {
            return tslib_1.__assign({}, state, (_e = {}, _e[formAlias] = tslib_1.__assign({}, state[formAlias], { isSubmit: false, status: FORM_STATUSES.SUBMIT_SUCCESS }), _e));
        }
        case FORM_SUBMIT_ERROR: {
            return tslib_1.__assign({}, state, (_f = {}, _f[formAlias] = tslib_1.__assign({}, state[formAlias], { isSubmit: false, status: FORM_STATUSES.SUBMIT_ERROR }), _f));
        }
        case FORM_SEND: {
            return tslib_1.__assign({}, state, (_g = {}, _g[formAlias] = tslib_1.__assign({}, state[formAlias], { isSend: true, status: FORM_STATUSES.SEND }), _g));
        }
        case FORM_SEND_START: {
            return tslib_1.__assign({}, state, (_h = {}, _h[formAlias] = tslib_1.__assign({}, state[formAlias], { isSend: true, status: FORM_STATUSES.SEND_START }), _h));
        }
        case FORM_SEND_SUCCESS: {
            const response = payload.response;
            return tslib_1.__assign({}, state, (_j = {}, _j[formAlias] = tslib_1.__assign({}, state[formAlias], { isSend: false, status: FORM_STATUSES.SEND_SUCCESS, response: response }), _j));
        }
        case FORM_SEND_ERROR: {
            const response = payload.response;
            return tslib_1.__assign({}, state, (_k = {}, _k[formAlias] = tslib_1.__assign({}, state[formAlias], { isSend: false, status: FORM_STATUSES.SEND_ERROR, response: response }), _k));
        }
        case FORM_CHANGE: {
            const formData = payload.formData;
            const formSchema = state[formAlias];
            // const { schema } = formSchema;
            // const { definitions = {} } = schema;
            // const resolvedSchema = retrieveSchema(schema, definitions, formData);
            return tslib_1.__assign({}, state, (_l = {}, _l[formAlias] = tslib_1.__assign({}, formSchema, { formData: formData, 
                // schema: retrieveSchema,
                status: FORM_STATUSES.CHANGE }), _l));
        }
        // case FORM_VALIDATE: {
        //   return {
        //     ...state,
        //     [formAlias]: {
        //       ...state[formAlias],
        //       errorSchema: {},
        //     },
        //   };
        // }
        case FORM_VALIDATE_ERROR: {
            const errors = payload.errors, errorSchema = payload.errorSchema;
            return tslib_1.__assign({}, state, (_m = {}, _m[formAlias] = tslib_1.__assign({}, state[formAlias], { status: FORM_STATUSES.VALIDATE_ERROR, errorSchema: errorSchema,
                errors: errors }), _m));
        }
        case FORM_VALIDATE_SUCCESS: {
            return tslib_1.__assign({}, state, (_o = {}, _o[formAlias] = tslib_1.__assign({}, state[formAlias], { status: FORM_STATUSES.CHANGE, errorSchema: {} }), _o));
        }
        default:
            return state;
    }
}
