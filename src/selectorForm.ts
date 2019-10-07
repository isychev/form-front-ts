import { formModuleName } from "./constantsForm";
import getFormAlias from "./getFormAlias";
export const selectorForm = function (state, props) {
    const formAlias = getFormAlias(state, props);
    if (formAlias) {
        return (state[formModuleName] || {})[formAlias] || null;
    }
    return null;
};
export default selectorForm;
