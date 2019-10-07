import { compose } from "recompose";
import { connect } from "react-redux";
import withSaga from "redux-saga-connect";
import sagaForm from "./sagaForm";
import selectorForm from "./selectorForm";
import onInitForm from "./onInitForm";
import onSubmitStartForm from "./onSubmitStartForm";
import onSubmitForm from "./onSubmitForm";
import onErrorForm from "./onErrorForm";
import onDeleteForm from "./onDeleteForm";
import onChangeForm from "./onChangeForm";
import onBlurForm from "./onBlurForm";
export default compose(withSaga({ sagaForm: sagaForm }), connect(function (state, props) {
    const formState = selectorForm(state, props);
    return formState || {};
}, {
    onChange: onChangeForm,
    onSubmit: onSubmitForm,
    onSubmitStart: onSubmitStartForm,
    onBlur: onBlurForm,
    onInit: onInitForm,
    onError: onErrorForm,
    onDelete: onDeleteForm,
}));
