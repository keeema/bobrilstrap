import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../utils/dict";
import { Tags } from "../../utils/tags";

export type TableVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export const tableVariants: TableVariant[] = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

const tableResponsives = createFilledDictionary(
    [undefined, ...breakpoints].map((breakpoint) => [
        breakpoint,
        breakpoint === undefined ? b.styleDef("table-responsive") : b.styleDef(`table-responsive-${breakpoint}`),
    ])
);

export function tableResponsive(breakpoint?: Breakpoint): b.IBobrilStyle {
    return tableResponsives(breakpoint);
}

export const tableStyles = {
    table: b.styleDef("table"),
    captionTop: b.styleDef("caption-top"),
    bordered: b.styleDef("table-bordered"),
    striped: b.styleDef("table-striped"),
    borderless: b.styleDef("table-borderless"),
    hover: b.styleDef("table-hover"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`table-${breakpoint}`)])),
    variants: createFilledDictionary(tableVariants.map((breakpoint) => [breakpoint, b.styleDef(`table-${breakpoint}`)])),
};

interface ITableBaseData extends IBaseElementDataWithChildren {
    variant?: TableVariant;
}

abstract class TableBase<TData extends ITableBaseData = ITableBaseData> extends BaseElement<TData> {
    componentProperties(): (keyof TData)[] {
        return ["variant"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.variant && tableStyles.variants(this.data.variant)];
    }
}

export class THead extends TableBase<ITableBaseData> {
    static id: string = "bobrilstrap-head";
    get tag(): Tags {
        return "thead";
    }
}
export class TBody extends TableBase<ITableBaseData> {
    static id: string = "bobrilstrap-tbody";
    get tag(): Tags {
        return "tbody";
    }
}

export class TFoot extends TableBase<ITableBaseData> {
    static id: string = "bobrilstrap-tfoot";
    get tag(): Tags {
        return "tfoot";
    }
}
export class Tr extends TableBase<ITableBaseData> {
    static id: string = "bobrilstrap-tr";
    get tag(): Tags {
        return "tr";
    }
}
export class Th extends TableBase<ITableBaseData> {
    static id: string = "bobrilstrap-th";
    get tag(): Tags {
        return "th";
    }
}
export class Td extends TableBase<ITableBaseData> {
    static id: string = "bobrilstrap-td";
    get tag(): Tags {
        return "td";
    }
}

export interface ITableData extends ITableBaseData {
    bordered?: boolean;
    "caption-top"?: boolean;
    striped?: boolean;
    borderless?: boolean;
    hover?: boolean;
    responsive?: true | Breakpoint;
    size?: Breakpoint;
}

export class Table extends TableBase<ITableData> {
    static id: string = "bobrilstrap-table";
    static THead = THead;
    static TBody = TBody;
    static Tr = Tr;
    static Th = Th;
    static Td = Td;

    componentProperties = (): (keyof ITableData)[] => [
        ...super.componentProperties(),
        "bordered",
        "borderless",
        "caption-top",
        "striped",
        "size",
        "hover",
    ];

    get tag(): Tags {
        return "table";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            ...super.componentSpecificStyles(),
            tableStyles.table,
            this.data.striped && tableStyles.striped,
            this.data.bordered && tableStyles.bordered,
            this.data.borderless && tableStyles.borderless,
            this.data["caption-top"] && tableStyles.captionTop,
            this.data.hover && tableStyles.hover,
            this.data.size && tableStyles.sizes(this.data.size),
            this.data.size && tableStyles.sizes(this.data.size),
        ];
    }
}
