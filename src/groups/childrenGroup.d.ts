import * as React from "react";
import { IGroup, IGroupProps } from "../types";
export declare const isGroupField: (fieldName: string, uiGroup: IGroup) => boolean;
declare const getChildrenGroup: (props: IGroupProps) => React.ReactNode[];
export default getChildrenGroup;
