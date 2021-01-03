import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const toastBodyStyles = {
    toastBody: b.styleDef("toast-body"),
};

export interface IToastBodyData extends IBaseElementDataWithChildren {}

export class ToastBody extends BaseElement<IToastBodyData> {
    static id: string = "bobrilstrap-toast-body";

    componentProperties(): (keyof IToastBodyData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [toastBodyStyles.toastBody];
    }
}
