import * as b from 'bobril';
import elem, { IBaseData } from './element';
import label, { ILabeldData as ILabelData} from './label';
import inputRadio, { IInputRadioData as IInputRadioData} from './inputRadio';

export interface IRadioData extends IInputRadioData {
    title?: string;
    labelData?: ILabelData;
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

export default b.createDerivedComponent<IRadioData>(elem, {
    id: 'bobrilstrap-radio',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, radioStyles.radio);

        let radio = inputRadio(ctx.data);
        let lbl = label(ctx.data.labelData || {}, [radio, ctx.data.title]);

        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, radioStyles.radioInline);
        } else if (ctx.data.disabled) {
            b.style(me, radioStyles.disabled);
        }

        me.children = lbl;
    }
});
