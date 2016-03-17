import * as b from 'bobril';

export const validationStyles = {
    hasSuccess: b.styleDef('has-success'),
    hasWarning : b.styleDef('has-warning '),
    hasError: b.styleDef('has-error'),
    hasFeedback: b.styleDef('has-feedback')
};

export class ValidationState {
    static success: string = 'success';
    static warning: string = 'warning';
    static error: string = 'error';
}

export const validationStateStyle = {
    [ValidationState.success]: validationStyles.hasSuccess,
    [ValidationState.warning]: validationStyles.hasWarning,
    [ValidationState.error]: validationStyles.hasError
};

export default ValidationState;
