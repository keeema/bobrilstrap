import * as b from 'bobril';
import elem, { IBaseData } from './element';
import ValidationState, {validationStateStyles, validationStyles} from './validations';
import { createDictionary } from './bobrilHelpers';

export interface IInputGroupData extends IBaseData {
    validationState?: ValidationState;
    hasFeedbeck?: boolean;
    size?: InputGroupSize;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputGroupData;
}

export const inputGroupStyles = {
    inputGroup: b.styleDef('input-group'),
    lg: b.styleDef('input-group-lg'),
    sm: b.styleDef('input-group-sm')
};

export enum InputGroupSize {
    lg,
    sm
}

export const inputGroupSizeStyles = createDictionary<InputGroupSize, b.IBobrilStyle>();
inputGroupSizeStyles(InputGroupSize.lg, inputGroupStyles.lg);
inputGroupSizeStyles(InputGroupSize.sm, inputGroupStyles.sm);

export let inputGroup = b.createDerivedComponent<IInputGroupData>(elem, {
    id: 'bobrilstrap-input-group',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, inputGroupStyles.inputGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
        b.style(me, validationStateStyles(ctx.data.validationState));
        b.style(me, inputGroupSizeStyles(ctx.data.size));
    }
});

export default inputGroup;