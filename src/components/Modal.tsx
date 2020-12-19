import * as b from "bobril";
import * as bootstrap from "bootstrap";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";
import { ModalBody } from "./ModalBody";
import { ModalContent } from "./ModalContent";
import { ModalDialog } from "./ModalDialog";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import { ModalTitle } from "./ModalTitle";

export const modalStyles = {
    modal: b.styleDef("modal"),
    fade: b.styleDef("fade"),
};

export type IModal = bootstrap.Modal;

interface IModalElementData {
    fade?: boolean;
    tabindex?: number;
    "static-backdrop"?: boolean;
    onHide?: () => void;
    onHidden?: () => void;
    onShown?: () => void;
    onShow?: () => void;
    "get-instance"?: (modal: IModal) => void;
}

export type IModalData = IModalElementData & IBaseElementDataWithChildren;

export class Modal extends BaseElement<IModalData> {
    static id: string = "bobrilstrap-modal";

    static Body = ModalBody;
    static Content = ModalContent;
    static Dialog = ModalDialog;
    static Footer = ModalFooter;
    static Header = ModalHeader;
    static Title = ModalTitle;

    private modal?: IModal;

    componentProperties = (): (keyof IModalData)[] => [
        "onHide",
        "onHidden",
        "onShown",
        "onShow",
        "get-instance",
        /* "tabindex", */
        "fade",
        "static-backdrop",
    ];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalStyles.modal, this.data.fade && modalStyles.fade];
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            tabindex: this.data.tabindex || -1,
            "data-bs-backdrop": this.data["static-backdrop"] ? "static" : this.data["data-bs-backdrop"],
        };
    }

    postInitDom(): void {
        this.registerCallback();
        this.registerAlert();
    }

    postUpdateDom(): void {
        this.registerCallback();
    }

    private registerCallback(): void {
        this.registerEvent("show.bs.modal", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.modal", () => this.data.onShown && this.data.onShown());
        this.registerEvent("hide.bs.modal", () => this.data.onHide && this.data.onHide());
        this.registerEvent("hidden.bs.modal", () => this.data.onHidden && this.data.onHidden());
    }

    private registerAlert(): void {
        this.modal = new bootstrap.Modal(this.element);
        this.data["get-instance"] && this.data["get-instance"](this.modal);
    }
}
