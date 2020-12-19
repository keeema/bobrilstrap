import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalDialogStyles = {
    modalDialog: b.styleDef("modal-dialog"),
};

export interface IModalDialogData extends IBaseElementDataWithChildren {}

export class ModalDialog extends BaseElement<IModalDialogData> {
    static id: string = "bobrilstrap-modal-dialog";

    componentProperties(): (keyof IModalDialogData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalDialogStyles.modalDialog];
    }
}
