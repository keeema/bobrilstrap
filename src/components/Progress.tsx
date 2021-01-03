import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { ProgressBar } from "./ProgressBar";

export const progressStyles = {
    progress: b.styleDef("progress"),
};

export interface IProgressData extends IBaseElementDataWithChildren {}

export class Progress extends BaseElement<IProgressData> {
    static id: string = "bobrilstrap-progress";
    static Bar = ProgressBar;

    componentProperties(): (keyof IProgressData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [progressStyles.progress];
    }
}
