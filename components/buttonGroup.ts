import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export const buttonGroupStyles = {
  btnGroup: b.styleDef("btn-group"),
  lg: b.styleDef("btn-group-lg"),
  sm: b.styleDef("btn-group-sm"),
  xs: b.styleDef("btn-group-xs"),
  justified: b.styleDef("btn-group-justified"),
  vertical: b.styleDef("btn-group-vertical")
};

export enum ButtonGroupSize {
  Lg,
  Default,
  Sm,
  Xs
}

export const buttonGroupSizeStyles: IDictionary<
  ButtonGroupSize,
  b.IBobrilStyle
> = createDictionary<ButtonGroupSize, b.IBobrilStyle>();
buttonGroupSizeStyles(ButtonGroupSize.Lg, buttonGroupStyles.lg);
buttonGroupSizeStyles(ButtonGroupSize.Default, false);
buttonGroupSizeStyles(ButtonGroupSize.Sm, buttonGroupStyles.sm);
buttonGroupSizeStyles(ButtonGroupSize.Xs, buttonGroupStyles.xs);

export interface IButtonGroupData extends IBaseData {
  size?: ButtonGroupSize;
  justified?: boolean;
  vertical?: boolean;
  up?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IButtonGroupData;
}

export const ButtonGroup = b.createDerivedComponent<IButtonGroupData>(Elem, {
  id: "bobrilstrap-button-group",
  render(ctx: ICtx, me: IElementBobrilNode) {
    b.style(
      me,
      ctx.data.vertical
        ? buttonGroupStyles.vertical
        : buttonGroupStyles.btnGroup
    );
    b.style(
      me,
      ctx.data.size !== undefined && buttonGroupSizeStyles(ctx.data.size)
    );
    b.style(me, !!ctx.data.justified && buttonGroupStyles.justified);

    me.attrs["role"] = "group";
  }
});

export default ButtonGroup;
