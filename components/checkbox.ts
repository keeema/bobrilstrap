import * as b from 'bobril';
import elem, { IBaseData } from './element';
import label, { ILabeldData as ILabelData} from './label';
import inputCheckbox, { IInputCheckBoxData as IInputCheckBoxData} from './inputCheckbox';

export interface ICheckboxData extends IInputCheckBoxData {
    label?: string;
    labelData?: ILabelData;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: ICheckboxData;
}

export let checkboxStyles = {
    checkbox: b.styleDef('checkbox'),
    checkboxInline: b.styleDef('checkbox-inline'),
    disabled: b.styleDef('disabled')
};

export default b.createDerivedComponent<ICheckboxData>(elem, {
    id: 'bobrilstrap-checkbox',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, checkboxStyles.checkbox);

        let checkbox = inputCheckbox(ctx.data);
        let lbl = label(ctx.data.labelData || {}, [checkbox, ctx.data.label]);

        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, checkboxStyles.checkboxInline);
        } else if (ctx.data.disabled) {
            b.style(me, checkboxStyles.disabled);
        }

        me.children = lbl;
    }
});