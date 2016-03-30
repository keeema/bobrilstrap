import * as b from 'bobril';
import elem, { IBaseData } from './element';
import ValidationState, {validationStateStyles, validationStyles} from './validations';
import { createDictionary, toLowerWithDashes } from './bobrilHelpers';

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
    lg: b.styleDef('form-group-lg'),
    sm: b.styleDef('form-group-sm')
};

export enum FormGroupSize {
    lg,
    default,
    sm
}

export const formGroupSizeStyles = createDictionary<FormGroupSize, b.IBobrilStyle>();
formGroupSizeStyles(FormGroupSize.lg, formGroupStyles.lg);
formGroupSizeStyles(FormGroupSize.default, false);
formGroupSizeStyles(FormGroupSize.sm, formGroupStyles.sm);

export let formGroup = b.createDerivedComponent<IFormGroupData>(elem, {
    id: 'bobrilstrap-form-group',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, formGroupStyles.formGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validationStyles.hasFeedback);
        b.style(me, validationStateStyles(ctx.data.validationState));
        b.style(me, formGroupSizeStyles(ctx.data.size));
    }
});

export default formGroup;