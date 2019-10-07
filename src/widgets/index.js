// import FileWidget from './FileWidget';
import BaseInput from './BaseInput';
import select from './SelectWidget';
import DateWidget from './DateWidget';
import PasswordWidget from './PasswordWidget';
import TextareaWidget from './TextareaWidget';

export default {
  BaseInput: BaseInput,
  DateWidget: DateWidget,
  DateTimeWidget: DateWidget,
  TextWidget: BaseInput,
  TextareaWidget: TextareaWidget,
  PasswordWidget: PasswordWidget,
  // FileWidget,
  select: select,
};
