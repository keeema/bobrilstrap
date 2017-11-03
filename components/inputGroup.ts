import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import {
  ValidationState,
  validationStateStyles,
  validationStyles
} from "./validations";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IInputGroupData extends IBaseData {
  validationState?: ValidationState;
  hasFeedbeck?: boolean;
  size?: InputGroupSize;
}

interface ICtx extends b.IBobrilCtx {
  data: IInputGroupData;
}

export const inputGroupStyles = {
  inputGroup: b.styleDef("input-group"),
  lg: b.styleDef("input-group-lg"),
  sm: b.styleDef("input-group-sm")
};

export enum InputGroupSize {
  Lg,
  Sm
}

export const inputGroupSizeStyles: IDictionary<
  InputGroupSize,
  b.IBobrilStyle
> = createDictionary<InputGroupSize, b.IBobrilStyle>();
inputGroupSizeStyles(InputGroupSize.Lg, inputGroupStyles.lg);
inputGroupSizeStyles(InputGroupSize.Sm, inputGroupStyles.sm);

export const InputGroup = b.createDerivedComponent<IInputGroupData>(Elem, {
  id: "bobrilstrap-input-group",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "div";
    b.style(me, inputGroupStyles.inputGroup);
    b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
    b.style(
      me,
      ctx.data.validationState !== undefined &&
        validationStateStyles(ctx.data.validationState)
    );
    b.style(
      me,
      ctx.data.size !== undefined && inputGroupSizeStyles(ctx.data.size)
    );
  }
});

export default InputGroup;
