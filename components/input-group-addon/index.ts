import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export const inputGroupAddonStyle = b.styleDef('input-group-addon');

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-input-group-addon',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'span';
        b.style(me, inputGroupAddonStyle);
    }
});

export default create;
