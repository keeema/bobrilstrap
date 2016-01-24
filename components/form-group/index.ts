import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import ValidationState, {validationStateStyle, validationStyles} from 'bobrilstrap-validations';

export interface IData extends IBaseData {
    validationState?: ValidationState;
    hasFeedbeck?: boolean;
    size?: Size;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let formGroupStyles = {
    formGroup: b.styleDef('form-group'),
    formGroupLg: b.styleDef('form-group-lg'),
    formGroupSm: b.styleDef('form-group-sm')
};

export class Size {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export let formGroupSizeStyles = {
    [Size.lg]: formGroupStyles.formGroupLg,
    [Size.sm]: formGroupStyles.formGroupSm
};

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-form-group',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'form-group';
        b.style(me, formGroupStyles.formGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
        b.style(me, !!ctx.data.validationState && validationStateStyle[ctx.data.validationState.toString()]);
        b.style(me, !!ctx.data.size && formGroupSizeStyles[ctx.data.size.toString()]);
    }
});

export default create;
