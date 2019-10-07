import format from "date-fns/esm/format";
import * as ru from "date-fns/locale/ru";
export const debounce = function (fn, time) {
    const timeout;
    return function () {
        const args = [];
        for (const _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        const functionCall = function () { return fn.apply(void 0, args); };
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    };
};
export function throttle(fn, wait) {
    const isCalled = false;
    return function () {
        const args = [];
        for (const _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!isCalled) {
            isCalled = true;
            setTimeout(function () {
                fn.apply(void 0, args);
                isCalled = false;
            }, wait);
        }
    };
}
export const dateFormat = function (strData, formatDate) {
    return format(strData, formatDate, { locale: ru });
};
