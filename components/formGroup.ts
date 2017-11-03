import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import {
  ValidationState,
  validationStateStyles,
  validationStyles
} from "./validations";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IFormGroupData extends IBaseData {
  validationState?: ValidationState;
  hasFeedbeck?: boolean;
  size?: FormGroupSize;
}

interface ICtx extends b.IBobrilCtx {
  data: IFormGroupData;
}

export const formGroupStyles = {
  formGroup: b.styleDef("form-group"),
  lg: b.styleDef("form-group-lg"),
  sm: b.styleDef("form-group-sm")
};

export enum FormGroupSize {
  Lg,
  Default,
  Sm
}

export const formGroupSizeStyles: IDictionary<
  FormGroupSize,
  b.IBobrilStyle
> = createDictionary<FormGroupSize, b.IBobrilStyle>();
formGroupSizeStyles(FormGroupSize.Lg, formGroupStyles.lg);
formGroupSizeStyles(FormGroupSize.Default, false);
formGroupSizeStyles(FormGroupSize.Sm, formGroupStyles.sm);

export const FormGroup = b.createDerivedComponent<IFormGroupData>(Elem, {
  id: "bobrilstrap-form-group",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "div";
    b.style(me, formGroupStyles.formGroup);
    b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
    b.style(
      me,
      ctx.data.validationState !== undefined &&
        validationStateStyles(ctx.data.validationState)
    );
    b.style(
      me,
      ctx.data.size !== undefined && formGroupSizeStyles(ctx.data.size)
    );
  }
});

export default FormGroup;
