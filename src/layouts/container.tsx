import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";
import { Size } from "./size";

export const containerStyles = {
    container: b.styleDef("container"),
    fluid: b.styleDef("container-fluid"),
    sm: b.styleDef("container-sm"),
    md: b.styleDef("container-md"),
    lg: b.styleDef("container-lg"),
    xl: b.styleDef("container-xl"),
};

export interface IContainerData extends IBaseElementData {
    fluid?: boolean | Size;
}

export class Container extends BaseElement<IContainerData> {
    static id: string = "bobrilstrap-container";
    readonly componentProperties: (keyof IContainerData)[] = ["fluid"];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            this.data.fluid
                ? typeof this.data.fluid === "boolean"
                    ? containerStyles.fluid
                    : containerStyles[this.data.fluid]
                : containerStyles.container,
        ];
    }
}
