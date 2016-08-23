import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface IInputGroupAddonData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IInputGroupAddonData;
}

export const inputGroupAddonStyle = b.styleDef('input-group-addon');

export const inputGroupAddon = b.createDerivedComponent<IInputGroupAddonData>(elem, {
    id: 'bobrilstrap-input-group-addon',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'span';
        b.style(me, inputGroupAddonStyle);
    }
});

export default inputGroupAddon;