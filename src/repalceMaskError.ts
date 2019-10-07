const repalceMaskError = function (templateStr, params) {
    return Object.keys(params).reduce(function (result, key) {
        const re = new RegExp(":" + key, "g");
        return result.replace(re, "" + params[key]);
    }, templateStr);
};
export default repalceMaskError;
