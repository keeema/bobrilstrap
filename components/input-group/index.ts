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

export let inputGroupStyles = {
    inputGroup: b.styleDef('input-group'),
    inputGroupLg: b.styleDef('input-group-lg'),
    inputGroupSm: b.styleDef('input-group-sm')
};

export class Size {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export let inputGroupSizeStyles = {
    [Size.lg]: inputGroupStyles.inputGroupLg,
    [Size.sm]: inputGroupStyles.inputGroupSm
};

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-input-group',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, inputGroupStyles.inputGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
        b.style(me, !!ctx.data.validationState && validationStateStyle[ctx.data.validationState.toString()]);
        b.style(me, !!ctx.data.size && inputGroupSizeStyles[ctx.data.size.toString()]);
    }
});

export default create;
