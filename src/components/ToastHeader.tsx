import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const toastHeaderStyles = {
    toastHeader: b.styleDef("toast-header"),
};

export interface IToastHeaderData extends IBaseElementDataWithChildren {}

export class ToastHeader extends BaseElement<IToastHeaderData> {
    static id: string = "bobrilstrap-toast-header";

    componentProperties(): (keyof IToastHeaderData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [toastHeaderStyles.toastHeader];
    }
}
