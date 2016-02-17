import * as b from 'bobril';
import elem, { IBaseData } from './element';
import ValidationState, {validationStateStyle, validationStyles} from './validations';

export interface IFormGroupData extends IBaseData {
    validationState?: ValidationState;
    hasFeedbeck?: boolean;
    size?: FormGroupSize;
}

interface ICtx extends b.IBobrilCtx {
    data: IFormGroupData;
}

export const formGroupStyles = {
    formGroup: b.styleDef('form-group'),
    formGroupLg: b.styleDef('form-group-lg'),
    formGroupSm: b.styleDef('form-group-sm')
};

export class FormGroupSize {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export const formGroupSizeStyles = {
    [FormGroupSize.lg]: formGroupStyles.formGroupLg,
    [FormGroupSize.sm]: formGroupStyles.formGroupSm
};

export let formGroup = b.createDerivedComponent<IFormGroupData>(elem, {
    id: 'bobrilstrap-form-group',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, formGroupStyles.formGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
        b.style(me, !!ctx.data.validationState && validationStateStyle[ctx.data.validationState.toString()]);
        b.style(me, !!ctx.data.size && formGroupSizeStyles[ctx.data.size.toString()]);
    }
});

export default formGroup;