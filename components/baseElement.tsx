import * as b from "bobril";

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
}

export interface IAttrs {
    [key: string]: string | number | boolean;
}

export interface IBaseElementData extends b.IDataWithChildren, IAria, IKnownAttrs, b.IBubblingAndBroadcastEvents {
    style?: b.IBobrilStyles;
}

export abstract class BaseElement<TData extends IBaseElementData> extends b.Component<TData> {
    static id: string = "bobrilstrap-base-element";
    abstract readonly prefix: b.IBobrilStyle;
    abstract readonly omitComponentProperties: (keyof TData)[];

    render(): b.IBobrilNode {
        const styles: b.IBobrilStyles = [this.data.style, this.componentStyles];

        return (
            <div style={styles} {...this.plainData}>
                {this.data.children}
            </div>
        );
    }

    private get componentStyles(): b.IBobrilStyleArray {
        return [this.prefix, ...this.componentSpecificStyles];
    }

    private get plainData(): IBaseElementData {
        const result = b.assign({}, this.data);
        this.omitComponentProperties.forEach((key) => delete result[key]);
        return result;
    }

    abstract get componentSpecificStyles(): b.IBobrilStyleArray;
}
