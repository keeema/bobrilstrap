import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalContentStyles = {
    modalContent: b.styleDef("modal-content"),
};

export interface IModalContentData extends IBaseElementDataWithChildren {}

export class ModalContent extends BaseElement<IModalContentData> {
    static id: string = "bobrilstrap-modal-content";

    componentProperties(): (keyof IModalContentData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalContentStyles.modalContent];
    }
}
