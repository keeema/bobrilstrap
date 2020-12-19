import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalFooterStyles = {
    modalFooter: b.styleDef("modal-footer"),
};

export interface IModalFooterData extends IBaseElementDataWithChildren {}

export class ModalFooter extends BaseElement<IModalFooterData> {
    static id: string = "bobrilstrap-modal-footer";

    componentProperties(): (keyof IModalFooterData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalFooterStyles.modalFooter];
    }
}
