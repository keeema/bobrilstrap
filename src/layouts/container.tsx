import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

export type ContainerSize = "sm" | "md" | "lg" | "xl";
const styles = {
    container: b.styleDef("container"),
    fluid: b.styleDef("container-fluid"),
    sm: b.styleDef("container-sm"),
    md: b.styleDef("container-md"),
    lg: b.styleDef("container-lg"),
    xl: b.styleDef("container-xl"),
};

export interface IContainerData extends IBaseElementData {
    fluid?: boolean | ContainerSize;
}

export class Container extends BaseElement<IContainerData> {
    static id: string = "bobrilstrap-container";
    readonly componentProperties: (keyof IContainerData)[] = ["fluid"];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.fluid ? (typeof this.data.fluid === "boolean" ? styles.fluid : styles[this.data.fluid]) : styles.container];
    }
}
