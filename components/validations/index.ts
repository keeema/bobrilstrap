import * as b from 'bobril';

export let validationStyles = {
    hasSuccess: b.styleDef('has-success'),
    hasWarning : b.styleDef('has-warning '),
    hasErrors: b.styleDef('has-error'),
    hasFeedback: b.styleDef('has-feedback')
};

export class ValidationState {
    static success: string = 'success';
    static warning: string = 'warning';
    static error: string = 'error';
}

export let validationStateStyle = {
    [ValidationState.success]: validationStyles.hasSuccess,
    [ValidationState.warning]: validationStyles.hasWarning,
    [ValidationState.error]: validationStyles.hasErrors
};

export default ValidationState;
