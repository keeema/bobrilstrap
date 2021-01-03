import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Tags } from "../../utils/tags";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { Col, IColData } from "../layouts/Col";

export const formLabelStyles = {
    formCheckLabel: b.styleDef("form-check-label"),
    colFormLabel: b.styleDef("col-form-label"),
    colFormLabelSizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`col-form-label-${breakpoint}`)])),
    customControlLabel: b.styleDef("custom-control-label"),
    customFileLabel: b.styleDef("custom-file-label"),
};

export interface IFormLabelData extends IColData {
    "form-check"?: boolean;
    col?: boolean | Breakpoint;
    custom?: boolean | "file";
}

export class FormLabel extends Col<IFormLabelData> {
    static id: string = "bobrilstrap-form-label";
    componentProperties = (): (keyof IFormLabelData)[] => [...super.componentProperties(), "form-check", "col"];

    get tag(): Tags {
        return "label";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const styles = [
            this.data["form-check"] && formLabelStyles.formCheckLabel,
            this.data.custom && (this.data.custom === "file" ? formLabelStyles.customFileLabel : formLabelStyles.customControlLabel),
        ];
        return this.data.col
            ? [
                  ...super.componentSpecificStyles(),
                  formLabelStyles.colFormLabel,
                  this.data.col !== true && formLabelStyles.colFormLabelSizes(this.data.col),
                  ...styles,
              ]
            : styles;
    }
}
