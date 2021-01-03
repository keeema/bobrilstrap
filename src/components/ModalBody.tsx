import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalBodyStyles = {
    modalBody: b.styleDef("modal-body"),
};

export interface IModalBodyData extends IBaseElementDataWithChildren {}

export class ModalBody extends BaseElement<IModalBodyData> {
    static id: string = "bobrilstrap-modal-body";

    componentProperties(): (keyof IModalBodyData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalBodyStyles.modalBody];
    }
}
