import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const pageLinkStyles = {
    pageLink: b.styleDef("page-link"),
};

export interface IPageLinkData extends IBaseElementDataWithChildren {}

export class PageLink extends BaseElement<IPageLinkData> {
    static id: string = "bobrilstrap-page-link";

    get tag(): Tags {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            href: this.data.href ?? "javascript:void(0)",
        };
    }

    componentProperties(): (keyof IPageLinkData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [pageLinkStyles.pageLink];
    }
}
