import * as tslib_1 from "tslib";
import { put } from "redux-saga/effects";
import onRedirect from "base-front-ts/onRedirect";
export default function sagaRedirectAfterSend(action) {
    const payload, withoutRedirect, redirectUrl;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) return [3 /*break*/, 4];
                withoutRedirect = payload.withoutRedirect;
                if (!(!withoutRedirect && payload.redirectUrl)) return [3 /*break*/, 4];
                if (!(typeof payload.redirectUrl === "function")) return [3 /*break*/, 2];
                redirectUrl = payload.redirectUrl(payload);
                return [4 /*yield*/, put(onRedirect({ redirectUrl: redirectUrl }))];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [4 /*yield*/, put(onRedirect({ redirectUrl: payload.redirectUrl }))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}
