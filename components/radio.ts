import * as b from 'bobril';
import elem, { IBaseData } from './element';
import label, { ILabeldData as ILabelData} from './label';
import inputRadio, { IInputRadioData as IInputRadioData} from './inputRadio';

export interface IRadioData {
    label?: ILabelData;
    inputRadio?: IInputRadioData;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IRadioData;
}

export let radioStyles = {
    radio: b.styleDef('radio'),
    radioInline: b.styleDef('radio-inline'),
    disabled: b.styleDef('disabled')
};

export let radio = b.createDerivedComponent<IRadioData>(elem, {
    id: 'bobrilstrap-radio',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, radioStyles.radio);

        let inputRadioNode = inputRadio(ctx.data.inputRadio);
        let lbl = label(ctx.data.label || {}, inputRadioNode);

        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, radioStyles.radioInline);
        } else if (ctx.data.inputRadio && ctx.data.inputRadio.disabled) {
            b.style(me, radioStyles.disabled);
        }

        me.children = lbl;
    }
});

export default radio;