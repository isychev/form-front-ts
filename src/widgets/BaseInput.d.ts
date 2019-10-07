import * as React from "react";
import { IInputState, IKeyboardEvent, IWidgetProps } from "../types";
declare class BaseInput extends React.PureComponent<IWidgetProps, IInputState> {
    static propTypes: {};
    static defaultProps: {
        type: string;
        required: boolean;
        disabled: boolean;
        readonly: boolean;
        placeholder: string;
        value: string;
        options: {};
        Component: string;
        rawErrors: {};
        formContext: {};
        autofocus: boolean;
        schema: {};
        registry: {};
    };
    onChangeDebounce: () => void;
    /**
     * set default state
     * @param props
     */
    constructor(props: IWidgetProps);
    /**
     * copy value from props to state
     * @param nextProps
     */
    componentWillReceiveProps(nextProps: IWidgetProps): void;
    handleKeyDown: (event: IKeyboardEvent) => void;
    handleChangeInput: (e: React.FormEvent<HTMLInputElement>) => void;
    handleBlur: () => void;
    onChange: () => void;
    render(): JSX.Element;
}
export default BaseInput;
