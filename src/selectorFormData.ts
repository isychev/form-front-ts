import { formModuleName } from "./constantsForm";
import getFormAlias from "./getFormAlias";
export const selectorFormData = function (state, props) {
    const formAlias = getFormAlias(state, props);
    if (formAlias) {
        return ((state[formModuleName] || {})[formAlias] || {}).formData || null;
    }
    return null;
};
export default selectorFormData;
