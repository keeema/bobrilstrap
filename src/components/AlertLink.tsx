import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const alertLinkStyles = {
    alertLink: b.styleDef("alert-link"),
};

export interface IAlertLinkData extends IBaseElementDataWithChildren {
    href?: string;
}

export class AlertLink extends BaseElement<IAlertLinkData> {
    static id: string = "bobrilstrap-alert-link";
    componentProperties = (): (keyof IAlertLinkData)[] => [
        /* "href" */
    ];

    get tag(): Tags {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), href: this.data.href ?? "javascript:void(0)" };
    }
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [alertLinkStyles.alertLink];
    }
}
