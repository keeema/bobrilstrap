import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const toastContainerStyles = {
    toastContainer: b.styleDef("toast-container"),
};

export interface IToastContainerData extends IBaseElementDataWithChildren {}

export class ToastContainer extends BaseElement<IToastContainerData> {
    static id: string = "bobrilstrap-toast-container";

    componentProperties(): (keyof IToastContainerData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [toastContainerStyles.toastContainer];
    }
}
