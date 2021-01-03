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
    onHidePrevented?: () => void;
    onHide?: () => void;
    onHidden?: () => void;
    onShown?: () => void;
    onShow?: () => void;
    "get-instance"?: (modal: IModal) => void;
}

export type IModalData = IModalElementData & IBaseElementDataWithChildren & Partial<bootstrap.Modal.Options>;

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
        "onHidePrevented",
        "onHide",
        "onHidden",
        "onShown",
        "onShow",
        "get-instance",
        /* "tabindex", */
        "fade",
        "backdrop",
        "keyboard",
        "focus",
    ];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [modalStyles.modal, this.data.fade && modalStyles.fade];
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            tabindex: this.data.tabindex || -1,
        };
    }

    postInitDom(): void {
        this.registerCallback();
        this.registerModal();
    }

    postUpdateDom(): void {
        this.registerCallback();
    }

    destroy(): void {
        this.modal && this.modal.hide();
    }

    private registerCallback(): void {
        this.registerEvent("show.bs.modal", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.modal", () => this.data.onShown && this.data.onShown());
        this.registerEvent("hidePrevented.bs.modal", () => this.data.onHidePrevented && this.data.onHidePrevented());
        this.registerEvent("hide.bs.modal", () => this.data.onHide && this.data.onHide());
        this.registerEvent("hidden.bs.modal", () => this.data.onHidden && this.data.onHidden());
    }

    private registerModal(): void {
        this.modal = new bootstrap.Modal(this.element, {
            backdrop: this.data.backdrop ?? true,
            keyboard: this.data.keyboard ?? true,
            focus: this.data.focus ?? true,
        });
        this.data["get-instance"] ? this.data["get-instance"](this.modal) : this.modal.show();
    }
}
