import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import label, { IData as ILabelData} from 'bobrilstrap-label';
import inputCheckbox, { IData as IInputCheckBoxData} from 'bobrilstrap-input-checkbox';

export interface IData extends IInputCheckBoxData {
    title?: string;
    labelData?: ILabelData;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let checkboxStyles = {
    checkbox: b.styleDef('checkbox'),
    checkboxInline: b.styleDef('checkbox-inline'),
    disabled: b.styleDef('disabled')
};

export default b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-checkbox',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, checkboxStyles.checkbox);

        let checkbox = inputCheckbox(ctx.data);
        let lbl = label(ctx.data.labelData || {}, [checkbox, ctx.data.title]);

        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, checkboxStyles.checkboxInline);
        } else if (ctx.data.disabled) {
            b.style(me, checkboxStyles.disabled);
        }

        me.children = lbl;
    }
});
