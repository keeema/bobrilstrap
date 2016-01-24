import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import label, { IData as ILabelData} from 'bobrilstrap-label';
import inputCheckbox, { IData as IInputRadioData} from 'bobrilstrap-input-radio';

export interface IData extends IInputRadioData {
    title?: string;
    labelData?: ILabelData;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let radioStyles = {
    radio: b.styleDef('radio'),
    radioInline: b.styleDef('radio-inline'),
    disabled: b.styleDef('disabled')
};

export default b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-radio',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, radioStyles.radio);

        let checkbox = inputCheckbox(ctx.data);
        let lbl = label(ctx.data.labelData || {}, [checkbox, ctx.data.title]);

        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, radioStyles.radioInline);
        } else if (ctx.data.disabled) {
            b.style(me, radioStyles.disabled);
        }

        me.children = lbl;
    }
});
