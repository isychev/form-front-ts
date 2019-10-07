import { ERROR, START, SUCCESS } from 'base-front-ts/constantsRedux';
import { APP_NAME } from './appConstants';

export const formModuleName = 'forms';
const prefix = APP_NAME + '/' + formModuleName;
export const FORM_REDIRECT_DELAY = 3000;
export const FORMS = prefix + '/FORM';
export const FORM_UPDATE = FORMS + '_UPDATE';
export const FORM_DELETE = FORMS + '_DELETE';
export const FORM_CREATE = FORMS + '_CREATE';
export const FORM_INIT = FORMS + '_INIT';
export const FORM_RESET = FORMS + 'RESET';
export const FORM_CHANGE = FORMS + '_CHANGE';
export const FORM_BLUR = FORMS + '_BLUR';
export const FORM_ERROR = FORMS + '_ERROR';
export const FORM_VALIDATE = FORMS + '_VALIDATE';
export const FORM_VALIDATE_START = FORM_VALIDATE + '_' + START;
export const FORM_VALIDATE_SUCCESS = FORM_VALIDATE + '_' + SUCCESS;
export const FORM_VALIDATE_ERROR = FORM_VALIDATE + '_' + ERROR;
export const FORM_LOAD = FORMS + '_LOAD';
// export const FORM_LOAD_START = `${FORM_LOAD}_${START}`;
// export const FORM_LOAD_SUCCESS = `${FORM_LOAD}_${SUCCESS}`;
// export const FORM_LOAD_ERROR = `${FORM_LOAD}_${ERROR}`;
export const FORM_LOAD_FORM_DATA = FORM_LOAD + '_FORM_DATA';
// export const FORM_LOAD_FORM_DATA_START = `${FORM_LOAD}_FORM_DATA_${START}`;
// export const FORM_LOAD_FORM_DATA_SUCCESS = `${FORM_LOAD}_FORM_DATA_${SUCCESS}`;
// export const FORM_LOAD_FORM_DATA_ERRROR = `${FORM_LOAD}_FORM_DATA_${ERROR}`;
//
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const FORM_SUBMIT_START = FORM_SUBMIT + '_' + START;
export const FORM_SUBMIT_SUCCESS = FORM_SUBMIT + '_' + SUCCESS;
export const FORM_SUBMIT_ERROR = FORM_SUBMIT + '_' + ERROR;
export const FORM_SEND = 'FORM_SEND';
export const FORM_SEND_START = FORM_SEND + '_' + START;
export const FORM_SEND_SUCCESS = FORM_SEND + '_' + SUCCESS;
export const FORM_SEND_ERROR = FORM_SEND + '_' + ERROR;
export const FORM_SET_ENUM = 'FORM_SET_ENUM';
export const FORM_STATUSES = {
  CHANGE: 'change',
  INIT: 'init',
  VALIDATE_ERROR: 'error',
  SEND: 'send',
  SEND_ERROR: 'errorSend',
  SEND_START: 'stateSend',
  SEND_SUCCESS: 'successSend',
  SUBMIT: 'submit',
  SUBMIT_ERROR: 'errorSubmit',
  SUBMIT_START: 'startSubmit',
  SUBMIT_SUCCESS: 'successSubmit',
};
export const DEFAULT_ERRORS = {
  required: 'required field',
  maximum: 'must be less :limit',
};
