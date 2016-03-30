import * as b from 'bobril';
import { createDictionary } from './bobrilHelpers';

export const validationStyles = {
    hasSuccess: b.styleDef('has-success'),
    hasWarning: b.styleDef('has-warning '),
    hasError: b.styleDef('has-error'),
    hasFeedback: b.styleDef('has-feedback')
};

export enum ValidationState {
    success,
    warning,
    error
}

export const validationStateStyles = createDictionary<ValidationState, b.IBobrilStyle>();
validationStateStyles(ValidationState.success, validationStyles.hasSuccess);
validationStateStyles(ValidationState.warning, validationStyles.hasWarning);
validationStateStyles(ValidationState.error, validationStyles.hasError);

export default ValidationState;
