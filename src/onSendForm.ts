import actionCreator from "base-front-ts/actionCreator";
import { FORM_SEND } from "./constantsForm";
const onSendForm = actionCreator(FORM_SEND, {}, { callApi: true });
export default onSendForm;
