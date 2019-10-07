/// <reference types="react" />
import BaseInput from "./BaseInput";
import DateWidget from "./DateWidget";
declare const _default: {
    BaseInput: typeof BaseInput;
    DateWidget: typeof DateWidget;
    DateTimeWidget: typeof DateWidget;
    TextWidget: typeof BaseInput;
    TextareaWidget: import("react").FunctionComponent<import("../types").IWidgetProps>;
    PasswordWidget: import("react").FunctionComponent<import("../types").IWidgetProps>;
    select: import("react").FunctionComponent<import("../types").ISelectWidgetProps>;
};
export default _default;
