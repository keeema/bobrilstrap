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
    "data-toggle"?: string;
    "data-target"?: string;
}

export interface IAttrs {
    [key: string]: unknown;
}

export type IAllAttrs = IAttrs & IAria & IDataAttrs & IKnownAttrs & b.IBubblingAndBroadcastEvents;

export interface IBaseElementData extends b.IDataWithChildren, IAllAttrs {
    as?: Tags;
    style?: b.IBobrilStyles;
    visible?: boolean;
    invisible?: boolean;
    disabled?: boolean;
}

export const baseStyles = {
    visible: b.styleDef("visible"),
    invisible: b.styleDef("invisible"),
};

export abstract class BaseElement<TData extends IBaseElementData> extends b.Component<TData> {
    abstract readonly componentProperties: (keyof TData)[];

    get tag(): string {
        return "div";
    }
    componentAdditionalAttributes(): IAllAttrs {
        return {};
    }

    render(): b.IBobrilNode {
        const Tag = (this.data.as ?? this.tag) as any;
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
        ];
    }

    private get plainData(): IBaseElementData {
        return omit(this.data, "style", "visible", "invisible", "as", /* "disabled", */ ...this.componentProperties);
    }

    abstract componentSpecificStyles(): b.IBobrilStyleArray;

    protected get element(): HTMLDivElement {
        return b.getDomNode(this.me) as HTMLDivElement;
    }
}
