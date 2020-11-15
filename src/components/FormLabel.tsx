import * as b from "bobril";
import { Col, IColData } from "../layouts/Col";

export const formLabelStyles = {
    formCheckLabel: b.styleDef("form-check-label"),
    colFormLabel: b.styleDef("col-form-label"),
};

export interface IFormLabelData extends IColData {
    "form-check"?: boolean;
    col?: boolean;
}

export class FormLabel extends Col<IFormLabelData> {
    static id: string = "bobrilstrap-form-label";
    componentProperties = (): (keyof IFormLabelData)[] => [...super.componentProperties(), "form-check", "col"];

    get tag(): string {
        return "label";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const styles = [this.data["form-check"] && formLabelStyles.formCheckLabel];
        return this.data.col ? [...super.componentSpecificStyles(), formLabelStyles.colFormLabel, ...styles] : styles;
    }
}
