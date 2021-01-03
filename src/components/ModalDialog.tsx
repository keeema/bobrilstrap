import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const modalDialogStyles = {
    modalDialog: b.styleDef("modal-dialog"),
    modalDialogScrollable: b.styleDef("modal-dialog-scrollable"),
    modalDialogCentered: b.styleDef("modal-dialog-centered"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`modal-${breakpoint}`)])),
    fullScreen: b.styleDef("modal-fullscreen"),
    fullScreenBreakpoints: createFilledDictionary(
        breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`modal-fullscreen-${breakpoint}-down`)])
    ),
};

export interface IModalDialogData extends IBaseElementDataWithChildren {
    scrollable?: boolean;
    centered?: boolean;
    size?: Breakpoint;
    "full-screen"?: Breakpoint | boolean;
}

export class ModalDialog extends BaseElement<IModalDialogData> {
    static id: string = "bobrilstrap-modal-dialog";

    componentProperties(): (keyof IModalDialogData)[] {
        return ["scrollable", "centered", "size", "full-screen"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            modalDialogStyles.modalDialog,
            this.data.scrollable && modalDialogStyles.modalDialogScrollable,
            this.data.centered && modalDialogStyles.modalDialogCentered,
            this.data.size && modalDialogStyles.sizes(this.data.size),
            this.data["full-screen"] &&
                (this.data["full-screen"] === true
                    ? modalDialogStyles.fullScreen
                    : modalDialogStyles.fullScreenBreakpoints(this.data["full-screen"])),
        ];
    }
}
