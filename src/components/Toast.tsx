import * as b from "bobril";
import * as bootstrap from "bootstrap";
import { pick } from "../../utils/objectHelper";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";
import { ToastBody } from "./ToastBody";
import { ToastContainer } from "./ToastContainer";
import { ToastHeader } from "./ToastHeader";

export type IToast = bootstrap.Toast & {
    show: () => void;
    hide: () => void;
    dispose: () => void;
};

export const toastStyles = {
    toast: b.styleDef("toast"),
};

export interface IToastData extends IBaseElementDataWithChildren, Partial<bootstrap.Toast.Options> {
    onShow?: () => void;
    onShown?: () => void;
    onDismiss?: () => void;
    onDismissed?: () => void;
    "get-instance"?: (toast: IToast) => void;
}

export class Toast extends BaseElement<IToastData> {
    static id: string = "bobrilstrap-toast";
    static Body = ToastBody;
    static Container = ToastContainer;
    static Header = ToastHeader;
    toastProperties: (keyof Partial<bootstrap.Toast.Options>)[] = ["animation", "autohide", "delay"];

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            ["aria-atomic"]: this.data["aria-atomic"] ?? true,
            ["aria-live"]: this.data["aria-live"] ?? "assertive",
            role: this.data.role ?? "alert",
        };
    }

    componentProperties(): (keyof IToastData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [toastStyles.toast];
    }

    postInitDom(): void {
        this.registerToast();
        this.registerCallback();
    }

    postUpdateDom(): void {
        this.registerCallback();
    }

    private registerCallback(): void {
        this.registerEvent("hidden.bs.toast", () => this.data.onDismissed && this.data.onDismissed());
        this.registerEvent("hide.bs.toast", () => this.data.onDismiss && this.data.onDismiss());
        this.registerEvent("show.bs.toast", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.toast", () => this.data.onShown && this.data.onShown);
    }

    private registerToast(): void {
        const toastOptions = pick(this.data, ...this.toastProperties);
        const ctr = bootstrap.Toast as any;
        const toast = new ctr(this.element, toastOptions);
        this.data["get-instance"] && this.data["get-instance"](toast as IToast);
    }
}
