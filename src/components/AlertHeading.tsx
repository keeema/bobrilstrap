import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const alertHeadingStyles = {
    alertHeading: b.styleDef("alert-heading"),
};

export interface IAlertHeadingData extends IBaseElementDataWithChildren {}

export class AlertHeading extends BaseElement<IAlertHeadingData> {
    static id: string = "bobrilstrap-alert-heading";
    componentProperties = (): (keyof IAlertHeadingData)[] => [];

    get tag(): Tags {
        return "h4";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [alertHeadingStyles.alertHeading];
    }
}
