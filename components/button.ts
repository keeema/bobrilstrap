import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode, IAria, IData } from "./element";
import { Size } from "./size";
import { helpers } from "./helpers";
import { Span } from "./span";
import { mergeToChildren } from "./bobrilHelpers";
import { createDictionary, IDictionary } from "./bobrilHelpers";
import { dropdownStyles } from "./dropdown";
import { navStyles } from "./nav";
import { listGroupStyles } from "./listGroup";

export interface IButtonNavbarCollapse {
  target: string;
}

export enum ButtonVariant {
  Dropdown,
  DropdownNav,
  Navbar,
  NavbarToggle,
  ListGroup
}

export interface IButtonData extends IBaseData {
  active?: boolean;
  block?: boolean;
  disabled?: boolean;
  size?: Size;
  option?: ButtonOption;
  type?: ButtonType;
  tag?: ButtonTag;
  href?: string;
  label?: string;
  variant?: ButtonVariant;
  srOnly?: string;
}

interface ICtx extends b.IBobrilCtx {
  data: IButtonData;
}

export enum ButtonType {
  Button,
  Submit
}

export enum ButtonTag {
  Button,
  Input,
  A
}

export enum ButtonOption {
  Default,
  Success,
  Warning,
  Danger,
  Info,
  Link,
  Primary,
  Close
}

export const buttonStyles = {
  active: b.styleDef("active"),
  disabled: b.styleDef("disabled"),
  btn: b.styleDef("btn"),
  btnBlock: b.styleDef("btn-block")
};

export const buttonSizeStyles = generateSizeStyles();
export const buttonOptiontStyles = generateOptionsStyles();

export const Button = b.createDerivedComponent<IButtonData>(Elem, {
  id: "bobrilstrap-button",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = resolveTag(ctx);

    b.style(
      me,
      ctx.data.option !== ButtonOption.Close &&
        ctx.data.variant !== ButtonVariant.ListGroup &&
        ((ctx.data.variant !== ButtonVariant.Navbar &&
          ctx.data.variant !== ButtonVariant.DropdownNav &&
          ctx.data.variant !== ButtonVariant.NavbarToggle) ||
          ctx.data.tag !== ButtonTag.A) &&
        buttonStyles.btn
    );
    b.style(me, !!ctx.data.active && buttonStyles.active);
    b.style(me, !!ctx.data.block && buttonStyles.btnBlock);
    b.style(me, ctx.data.size !== undefined && buttonSizeStyles(ctx.data.size));
    b.style(
      me,
      ctx.data.variant !== ButtonVariant.Navbar &&
        ctx.data.variant !== ButtonVariant.DropdownNav &&
        ctx.data.variant !== ButtonVariant.ListGroup &&
        buttonOptiontStyles(ctx.data.option || ButtonOption.Default)
    );

    b.style(
      me,
      ctx.data.variant === ButtonVariant.ListGroup &&
        listGroupStyles.listGroupItem
    );

    const typeAttr = ctx.data.tag === ButtonTag.A ? "role" : "type";
    me.attrs[typeAttr] = ((ctx.data.type && ButtonType[ctx.data.type]) ||
      me.attrs[typeAttr] ||
      ButtonType[ButtonType.Button]
    )
      .toString()
      .toLowerCase();

    if (ctx.data.label) {
      if (ctx.data.tag === ButtonTag.Input) {
        me.attrs["value"] = ctx.data.label;
      } else {
        mergeToChildren(me, ctx.data.label);
      }
    }

    if (ctx.data.tag === ButtonTag.A) {
      me.attrs["href"] = ctx.data.href || "javascript:void(0)";
    }

    if (ctx.data.disabled) {
      if (ctx.data.tag === ButtonTag.A) {
        b.style(me, buttonStyles.disabled);
      } else {
        me.attrs["disabled"] = "disabled";
      }
    }

    if (
      ctx.data.variant === ButtonVariant.Dropdown ||
      ctx.data.variant === ButtonVariant.DropdownNav
    ) {
      ctx.data = b.assign({}, ctx.data);
      ctx.data.data = b.assign({}, ctx.data.data) as IData;
      ctx.data.aria = b.assign({}, ctx.data.aria) as IAria;

      ctx.data.aria.haspopup = true;
      ctx.data.data.toggle = "dropdown";
      b.style(me, dropdownStyles.dropdownToggle);

      if (ctx.data.tag !== ButtonTag.Input) mergeToChildren(me, " ");

      mergeToChildren(me, Span({ style: helpers.caret }));
    } else if (ctx.data.variant === ButtonVariant.NavbarToggle) {
      ctx.data = b.assign({}, ctx.data);
      ctx.data.data = b.assign({}, ctx.data.data);
      b.style(me, navStyles.navbarToggle);
    }

    mergeToChildren(
      me,
      ctx.data.srOnly && Span({ style: helpers.srOnly }, ctx.data.srOnly)
    );
  }
});

export const Btn = Button;
export default Button;

function generateOptionsStyles(): IDictionary<ButtonOption, b.IBobrilStyle> {
  const result = createDictionary<ButtonOption, b.IBobrilStyle>();
  Object.keys(ButtonOption).forEach(key => {
    const castedValue = parseInt(key, 10);
    if (!isNaN(castedValue)) {
      result(
        castedValue,
        castedValue === ButtonOption.Close
          ? helpers.close
          : b.styleDef(`btn-${ButtonOption[castedValue].toLowerCase()}`)
      );
    }
  });

  return result;
}

function generateSizeStyles(): IDictionary<Size, b.IBobrilStyle> {
  const result = createDictionary<Size, b.IBobrilStyle>();
  Object.keys(Size).forEach(key => {
    let castedValue = parseInt(key, 10);
    if (!isNaN(castedValue)) {
      result(
        castedValue,
        castedValue === Size.Md
          ? undefined
          : b.styleDef(`btn-${Size[castedValue].toLowerCase()}`)
      );
    }
  });

  return result;
}

function resolveTag(ctx: ICtx): string {
  if (ctx.data.tag === undefined) {
    ctx.data = b.assign(
      {
        tag:
          ctx.data.variant === ButtonVariant.Navbar ||
          ctx.data.variant === ButtonVariant.DropdownNav
            ? ButtonTag.A
            : ButtonTag.Button
      },
      ctx.data
    );
  }

  switch (ctx.data.tag) {
    case ButtonTag.A:
      return "a";
    case ButtonTag.Input:
      return "input";
    case ButtonTag.Button:
      return "button";
    default:
      return "button";
  }
}
