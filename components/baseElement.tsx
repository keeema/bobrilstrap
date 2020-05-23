import * as b from "bobril";
import { omit } from "../helpers/objectHelper";

export interface IAria {
    ariaActivedescendant?: string;
    ariaAtomic?: boolean;
    ariaAutocomplete?: string;
    ariaBusy?: boolean | string;
    ariaChecked?: boolean | string;
    ariaControls?: string;
    ariaDescribedby?: string;
    ariaDisabled?: boolean;
    ariaDropeffect?: string;
    ariaExpanded?: boolean;
    ariaFlowto?: string;
    ariaGrabbed?: boolean;
    ariaHaspopup?: boolean;
    ariaHidden?: boolean;
    ariaInvalid?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaLevel?: number;
    ariaLive?: string;
    ariaMultiline?: boolean;
    ariaMultiselectable?: boolean;
    ariaOrientation?: string;
    ariaOwns?: string;
    ariaPosinset?: number;
    ariaPressed?: boolean | string;
    ariaReadonly?: boolean;
    ariaRelevant?: string;
    ariaRequired?: boolean;
    ariaSelected?: boolean;
    ariaSetsize?: number;
    ariaSort?: string;
    ariaValuemax?: number | string;
    ariaValuemin?: number | string;
    ariaValuenow?: number | string;
    ariaValuetext?: string;
    ariaVMsAriaFlowfrom?: string;
}

export interface IKnownAttrs {
    title?: string;
    id?: string;
    for?: string;
}

export interface IAttrs {
    [key: string]: unknown;
}

export type IAllAttrs = IAttrs & IAria & IKnownAttrs & b.IBubblingAndBroadcastEvents;

export interface IBaseElementData extends b.IDataWithChildren, IAllAttrs {
    style?: b.IBobrilStyles;
}

export abstract class BaseElement<TData extends IBaseElementData> extends b.Component<TData> {
    readonly tag?: string;
    readonly componentAdditionalAttributes?: IAllAttrs;
    abstract readonly componentProperties: (keyof TData)[];

    render(): b.IBobrilNode {
        const Tag = (this.tag || "div") as any;
        return (
            <Tag style={this.styles} {...this.plainData} {...this.componentAdditionalAttributes}>
                {this.data.children}
            </Tag>
        );
    }

    private get styles(): b.IBobrilStyleArray {
        return [...this.componentSpecificStyles, this.data.style];
    }

    private get plainData(): IBaseElementData {
        return omit(this.data, "style", ...this.componentProperties);
    }

    abstract get componentSpecificStyles(): b.IBobrilStyleArray;

    protected get element(): HTMLDivElement {
        return b.getDomNode(this.me) as HTMLDivElement;
    }
}
