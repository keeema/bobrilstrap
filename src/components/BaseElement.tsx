import * as b from "bobril";
import { omit } from "../../helpers/objectHelper";
import { Tags } from "../../helpers/tags";

export interface IAria {
    "aria-activedescendant"?: string;
    "aria-atomic"?: boolean;
    "aria-autocomplete"?: string;
    "aria-busy"?: boolean;
    "aria-checked"?: boolean;
    "aria-controls"?: string;
    "aria-describedby"?: string;
    "aria-disabled"?: boolean;
    "aria-dropeffect"?: string;
    "aria-expanded"?: boolean;
    "aria-flowto"?: string;
    "aria-grabbed"?: boolean;
    "aria-haspopup"?: boolean;
    "aria-hidden"?: boolean;
    "aria-invalid"?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-level"?: number;
    "aria-live"?: string;
    "aria-multiline"?: boolean;
    "aria-multiselectable"?: boolean;
    "aria-orientation"?: string;
    "aria-owns"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | string;
    "aria-readonly"?: boolean;
    "aria-relevant"?: string;
    "aria-required"?: boolean;
    "aria-selected"?: boolean;
    "aria-setsize"?: number;
    "aria-sort"?: string;
    "aria-valuemax"?: number | string;
    "aria-valuemin"?: number | string;
    "aria-valuenow"?: number | string;
    "aria-valuetext"?: string;
    "x-ms-aria-flowfrom"?: string;
}

export interface IKnownAttrs {
    title?: string;
    id?: string;
    for?: string;
}

export interface IDataAttrs {
    "data-bs-toggle"?: string;
    "data-bs-target"?: string;
}

export interface IAttrs {
    [key: string]: unknown;
}

export type IAllAttrs = IAttrs & IAria & IDataAttrs & IKnownAttrs & b.IBobrilEvents;

interface IBaseElementDataBase extends IAllAttrs {
    as?: Tags;
    style?: b.IBobrilStyles;
    visible?: boolean;
    invisible?: boolean;
    disabled?: boolean;
    active?: boolean;
    readonly?: boolean;
}

export interface IBaseElementData extends IBaseElementDataBase {
    children?: never;
}

export interface IBaseElementDataWithChildren extends b.IDataWithChildren, IBaseElementDataBase {}

export const baseStyles = {
    visible: b.styleDef("visible"),
    invisible: b.styleDef("invisible"),
    active: b.styleDef("active"),
};

export abstract class BaseElement<TData extends IBaseElementDataBase> extends b.Component<TData> {
    get tag(): Tags {
        return "div";
    }
    componentAdditionalAttributes(): IAllAttrs {
        return {
            "aria-disabled": this.data.disabled ?? undefined,
            "aria-readonly": this.data.readonly ?? undefined,
        };
    }

    get recognizedTag(): Tags {
        return this.data.as ?? this.tag;
    }

    render(): b.IBobrilNode {
        const Tag = this.recognizedTag as any;
        return (
            <Tag style={this.styles} {...this.plainData} {...this.componentAdditionalAttributes()}>
                {this.data.children}
            </Tag>
        );
    }

    private get styles(): b.IBobrilStyleArray {
        return [...this.componentSpecificStyles(), ...this.getBaseStyles, this.data.style];
    }

    private get getBaseStyles(): b.IBobrilStyleArray {
        return [
            (this.data.visible === true || this.data.invisible === false) && baseStyles.visible,
            (this.data.invisible === true || this.data.visible === false) && baseStyles.invisible,
            this.data.active && baseStyles.active,
        ];
    }

    private get plainData(): IBaseElementDataWithChildren {
        return omit(this.data, "style", "visible", "invisible", "active", "as", /* "disabled", "readonly" */ ...this.componentProperties());
    }

    abstract componentProperties(): (keyof TData)[];

    abstract componentSpecificStyles(): b.IBobrilStyleArray;

    protected get element(): HTMLDivElement {
        return b.getDomNode(this.me) as HTMLDivElement;
    }
}
