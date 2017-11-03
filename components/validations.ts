import * as b from "bobril";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export const validationStyles = {
  hasSuccess: b.styleDef("has-success"),
  hasWarning: b.styleDef("has-warning "),
  hasError: b.styleDef("has-error"),
  hasFeedback: b.styleDef("has-feedback")
};

export enum ValidationState {
  Success,
  Warning,
  Error
}

export const validationStateStyles: IDictionary<
  ValidationState,
  b.IBobrilStyle
> = createDictionary<ValidationState, b.IBobrilStyle>();
validationStateStyles(ValidationState.Success, validationStyles.hasSuccess);
validationStateStyles(ValidationState.Warning, validationStyles.hasWarning);
validationStateStyles(ValidationState.Error, validationStyles.hasError);

export default ValidationState;
