import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export const helpTextStyle = b.styleDef('help-block');

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-help-text',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'span';
        b.style(me, helpTextStyle);
    }
});

export default create;
