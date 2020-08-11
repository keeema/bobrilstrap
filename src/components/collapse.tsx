import * as b from "bobril";
import { IBaseElementData, BaseElement, IAllAttrs } from "../../index";

export const collapseStyles = {
    collapse: b.styleDef("collapse"),
};

interface ICollapseElementData {
    id: string;
}

export type ICollapseData = ICollapseElementData & IBaseElementData;

export class Collapse extends BaseElement<ICollapseData> {
    static id: string = "bobrilstrap-collapse";
    readonly componentProperties: (keyof ICollapseElementData)[] = [
        /* "id" */
    ];

    get componentAdditionalAttributes(): IAllAttrs {
        return this.data.id ? { "data-target": `#${this.data.id}`, "data-toggle": "collapse" } : {};
    }

    static get componentSpecificStyles(): b.IBobrilStyleArray {
        return [collapseStyles.collapse];
    }
    get componentSpecificStyles(): b.IBobrilStyleArray {
        return Collapse.componentSpecificStyles;
    }
}
