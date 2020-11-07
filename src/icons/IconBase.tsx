import * as b from "bobril";
import { BaseElement, IAllAttrs, IBaseElementData, IBaseElementDataWithChildren } from "../components/BaseElement";

export const iconStyles = {
    icon: b.styleDef("bi"),
};

export interface IIconData extends IBaseElementData {
    width: string | number;
    height: string | number;
}

export abstract class IconBase extends BaseElement<IIconData> {
    static id: string = "bobrilstrap-icon";
    readonly componentProperties: (keyof IIconData)[] = [/* width, height, */ "name"];

    get tag(): string {
        return "svg";
    }

    render(): b.IBobrilNode {
        (this.data as IBaseElementDataWithChildren).children = this.svgChildren();
        return super.render();
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { fill: "currentColor" };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [iconStyles.icon];
    }

    abstract svgChildren(): b.IBobrilChildren;
}
