import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const feedbackStyles = {
    invalid: b.styleDef("invalid-feedback"),
    valid: b.styleDef("valid-feedback"),
    tooltip: {
        invalid: b.styleDef("invalid-tooltip"),
        valid: b.styleDef("valid-tooltip"),
    },
};

export interface IFeedbackData extends IBaseElementDataWithChildren {
    tooltip?: boolean;
}

export class FeedbackInvalid extends BaseElement<IFeedbackData> {
    static id: string = "bobrilstrap-feedback-invalid";

    componentProperties(): (keyof IFeedbackData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.tooltip ? feedbackStyles.tooltip.invalid : feedbackStyles.invalid];
    }
}
export class FeedbackValid extends BaseElement<IFeedbackData> {
    static id: string = "bobrilstrap-feedback-valid";

    componentProperties(): (keyof IFeedbackData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.tooltip ? feedbackStyles.tooltip.valid : feedbackStyles.valid];
    }
}

export class Feedback {
    static Invalid = FeedbackInvalid;
    static Valid = FeedbackValid;
}
