/// <reference types="bootstrap-3-typeahead" />
import * as b from "bobril";

import {
  Elem,
  IBaseData,
  IElementBobrilNode,
  IElementBobrilCacheNode
} from "./element";
import {
  createDictionary,
  toLowerWithDashes,
  IDictionary
} from "./bobrilHelpers";

export enum InputTextType {
  Color,
  Date,
  Datetime,
  DatetimeLocal,
  Email,
  Month,
  Number,
  Password,
  Range,
  Search,
  Tel,
  Text,
  Time,
  Url,
  Week
}

export interface IInputTextData extends IBaseData<string> {
  value?: string;
  placeholder?: string;
  size?: InputTextSize;
  type?: InputTextType;
  disabled?: boolean;
  readonly?: boolean;
  typeaheadOptions?: Bootstrap3Typeahead.Options;
}

export interface ITypeaheadProcess<TValue> {
  (items: TValue[]): void;
}

export interface ITypeaheadSourceCallback<TValue> {
  (query: TValue, process: ITypeaheadProcess<TValue>): TValue[] | void;
}

interface ICtx extends b.IBobrilCtx {
  data: IInputTextData;
  value: string;
  me: IElementBobrilCacheNode;
  jQueryElement: JQuery | undefined;
}

export const inputTextStyles = {
  formControl: b.styleDef("form-control"),
  lg: b.styleDef("input-lg"),
  sm: b.styleDef("input-sm")
};

export enum InputTextSize {
  Lg,
  Default,
  Sm
}

export const inputTextSizeStyles: IDictionary<
  InputTextSize,
  b.IBobrilStyle
> = createDictionary<InputTextSize, b.IBobrilStyle>();
inputTextSizeStyles(InputTextSize.Lg, inputTextStyles.lg);
inputTextSizeStyles(InputTextSize.Default, false);
inputTextSizeStyles(InputTextSize.Sm, inputTextStyles.sm);

export const InputText = b.createOverridingComponent<IInputTextData>(Elem, {
  id: "bobrilstrap-input-text",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.component.super.render(ctx, me);
    if (ctx.data.value !== undefined) {
      ctx.value = ctx.data.value;
    }

    me.tag = "input";
    me.attrs["type"] = toLowerWithDashes(
      ctx.data.type !== undefined
        ? InputTextType[ctx.data.type]
        : InputTextType[InputTextType.Text]
    );
    me.attrs.value = ctx.value;
    b.style(me, inputTextStyles.formControl);
    b.style(
      me,
      ctx.data.size !== undefined && inputTextSizeStyles(ctx.data.size)
    );

    if (ctx.data.placeholder) me.attrs["placeholder"] = ctx.data.placeholder;

    if (ctx.data.disabled) me.attrs["disabled"] = "disabled";

    if (ctx.data.readonly) me.attrs["readonly"] = "readonly";
  },
  onChange(ctx: ICtx, value: string): void {
    ctx.value = value;
    ctx.me.component.super.onChange(ctx, value);
  },
  postInitDom(ctx: ICtx) {
    if (ctx.data.typeaheadOptions) registerNewTypeahead(ctx);
  },
  postUpdateDom(ctx: ICtx) {
    if (ctx.data.typeaheadOptions) registerNewTypeahead(ctx);
  },
  destroy(ctx: ICtx) {
    unregister(ctx);
  }
});

function registerNewTypeahead(ctx: ICtx) {
  const element = b.getDomNode(ctx.me) as HTMLElement;
  if (!element) {
    ctx.jQueryElement = undefined;
    return;
  }

  if (!ctx.jQueryElement) {
    ctx.jQueryElement = $(element);
    ctx.jQueryElement.typeahead(ctx.data.typeaheadOptions);
  }
}

function unregister(ctx: ICtx) {
  if (ctx.jQueryElement) {
    $(ctx.jQueryElement).typeahead("destroy");
    ctx.jQueryElement = undefined;
  }
}

export default InputText;
