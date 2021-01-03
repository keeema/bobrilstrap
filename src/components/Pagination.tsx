import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Tags } from "../../utils/tags";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { PageItem } from "./PageItem";
import { PageLink } from "./PageLink";

export const paginationStyles = {
    pagination: b.styleDef("pagination"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`pagination-${breakpoint}`)])),
};

export interface IPaginationData extends IBaseElementDataWithChildren {
    size?: Breakpoint;
}

export class Pagination extends BaseElement<IPaginationData> {
    static id: string = "bobrilstrap-pagination";
    static Item = PageItem;
    static Link = PageLink;

    get tag(): Tags {
        return "ul";
    }

    componentProperties(): (keyof IPaginationData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [paginationStyles.pagination, this.data.size && paginationStyles.sizes(this.data.size)];
    }
}
