import * as b from 'bobril';
import elem, { IBaseData } from './element';
import ValidationState, {validationStateStyle, validationStyles} from './validations';

export interface IInputGroupData extends IBaseData {
    validationState?: ValidationState;
    hasFeedbeck?: boolean;
    size?: InputGroupSize;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputGroupData;
}

export let inputGroupStyles = {
    inputGroup: b.styleDef('input-group'),
    inputGroupLg: b.styleDef('input-group-lg'),
    inputGroupSm: b.styleDef('input-group-sm')
};

export class InputGroupSize {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export let inputGroupSizeStyles = {
    [InputGroupSize.lg]: inputGroupStyles.inputGroupLg,
    [InputGroupSize.sm]: inputGroupStyles.inputGroupSm
};

export default b.createDerivedComponent<IInputGroupData>(elem, {
    id: 'bobrilstrap-input-group',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, inputGroupStyles.inputGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
        b.style(me, !!ctx.data.validationState && validationStateStyle[ctx.data.validationState.toString()]);
        b.style(me, !!ctx.data.size && inputGroupSizeStyles[ctx.data.size.toString()]);
    }
});
