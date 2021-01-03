import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalTitleStyles = {
    modalTitle: b.styleDef("modal-title"),
};

export interface IModalTitleData extends IBaseElementDataWithChildren {}

export class ModalTitle extends BaseElement<IModalTitleData> {
    static id: string = "bobrilstrap-modal-title";
    get tag(): Tags {
        return "h5";
    }

    componentProperties(): (keyof IModalTitleData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalTitleStyles.modalTitle];
    }
}
