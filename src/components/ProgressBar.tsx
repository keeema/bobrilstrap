import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement, IAttrs } from "./BaseElement";

export const progressBarStyles = {
    progressBar: b.styleDef("progress-bar"),
    striped: b.styleDef("progress-bar-striped"),
    animated: b.styleDef("progress-bar-animated"),
};

export interface IProgressBarData extends IBaseElementDataWithChildren {
    now: number;
    striped?: boolean;
    animated?: boolean;
    min?: number;
    max?: number;
}

export class ProgressBar extends BaseElement<IProgressBarData> {
    static id: string = "bobrilstrap-progress-bar";

    componentProperties(): (keyof IProgressBarData)[] {
        return ["now", "striped", "animated", "min", "max"];
    }

    componentAdditionalAttributes(): IAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            "aria-valuenow": this.data.now,
            "aria-valuemin": this.data.min || 0,
            "aria-valuemax": this.data.max || 100,
            role: "progressbar",
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            progressBarStyles.progressBar,
            this.data.striped && progressBarStyles.striped,
            this.data.animated && progressBarStyles.animated,
            { width: `${this.data.now}%` },
        ];
    }
}
