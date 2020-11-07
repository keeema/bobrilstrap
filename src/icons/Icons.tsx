import * as b from "bobril";
import { BaseElement, IAllAttrs, IBaseElementData } from "../components/BaseElement";
import { IconName } from "./iconName";

const svgIcons = b.asset("../../node_modules/bootstrap-icons/bootstrap-icons.svg");

export const iconStyles = {
    icon: b.styleDef("bi"),
};

export interface IIconData extends IBaseElementData {
    name: IconName;
    width: string | number;
    height: string | number;
}

export class Icon extends BaseElement<IIconData> {
    static id: string = "bobrilstrap-icon";
    readonly componentProperties: (keyof IIconData)[] = [/* width, height, */ "name"];

    get tag(): string {
        return "svg";
    }

    render(): b.IBobrilNode {
        const href = `${svgIcons}#${this.data.name}`;
        this.data.children = { tag: "use", attrs: { "xlink:href": href } };
        return super.render();
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            fill: "currentColor",
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [iconStyles.icon];
    }
}
