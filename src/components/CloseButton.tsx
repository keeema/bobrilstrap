import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAttrs } from "./BaseElement";

export const closeButtonStyles = {
    close: b.styleDef("btn-close"),
    closeWhite: b.styleDef("btn-close-white"),
};

export interface ICloseButtonData extends IBaseElementDataWithChildren {
    dismiss?: "alert" | "toast";
    white?: boolean;
}

export class CloseButton extends BaseElement<ICloseButtonData> {
    static id: string = "bobrilstrap-close-button";

    get tag(): Tags {
        return "button";
    }

    componentProperties(): (keyof ICloseButtonData)[] {
        return ["white", "dismiss-alert"];
    }

    componentAdditionalAttributes(): IAttrs {
        return {
            "data-bs-dismiss": this.data["data-bs-dismiss"] ?? this.data.dismiss,
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [closeButtonStyles.close, this.data.white && closeButtonStyles.closeWhite];
    }
}
