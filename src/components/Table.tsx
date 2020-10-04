import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../helpers/dict";

export type TableVariant = "dark";

export const tableStyles = {
    table: b.styleDef("table"),
    dark: b.styleDef("table-dark"),
    bordered: b.styleDef("table-bordered"),
    striped: b.styleDef("table-striped"),
    borderless: b.styleDef("table-borderless"),
    hover: b.styleDef("table-hover"),
    responsive: b.styleDef("table-responsive"),
    responsives: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`table-responsive-${breakpoint}`)])),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`table-${breakpoint}`)])),
};

export interface ITableData extends IBaseElementData {
    variant?: TableVariant;
    bordered?: boolean;
    striped?: boolean;
    borderless?: boolean;
    hover?: boolean;
    responsive?: true | Breakpoint;
    size?: Breakpoint;
}

export class Table extends BaseElement<ITableData> {
    readonly componentProperties: (keyof ITableData)[] = ["variant", "bordered", "borderless", "striped", "size", "responsive", "hover"];

    get tag(): string {
        return "table";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            tableStyles.table,
            this.data.variant && tableStyles[this.data.variant],
            this.data.striped && tableStyles.striped,
            this.data.bordered && tableStyles.bordered,
            this.data.borderless && tableStyles.borderless,
            this.data.hover && tableStyles.hover,
            this.data.responsive === true ? tableStyles.responsive : this.data.responsive && tableStyles.responsives(this.data.responsive),
            this.data.size && tableStyles.sizes(this.data.size),
            this.data.size && tableStyles.sizes(this.data.size),
        ];
    }
}
