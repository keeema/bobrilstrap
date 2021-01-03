import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalHeaderStyles = {
    modalHeader: b.styleDef("modal-header"),
};

export interface IModalHeaderData extends IBaseElementDataWithChildren {}

export class ModalHeader extends BaseElement<IModalHeaderData> {
    static id: string = "bobrilstrap-modal-header";

    componentProperties(): (keyof IModalHeaderData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalHeaderStyles.modalHeader];
    }
}
