import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { IDatepickerProps } from "../types";
declare class Datepicker extends React.PureComponent<IDatepickerProps> {
    static defaultProps: {};
    handleChange: (date: string) => void;
    render(): JSX.Element;
}
export default Datepicker;
