import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const alertHeadingStyles = {
    alertHeading: b.styleDef("alert-heading"),
};

export interface IAlertHeadingData extends IBaseElementData {}

export class AlertHeading extends BaseElement<IAlertHeadingData> {
    static id: string = "bobrilstrap-alert-heading";
    readonly componentProperties: (keyof IAlertHeadingData)[] = [];

    get tag(): string {
        return "h4";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [alertHeadingStyles.alertHeading];
    }
}
