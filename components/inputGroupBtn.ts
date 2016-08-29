import * as b from 'bobril';
import { elem, IElementData } from './element';

export interface IInputGroupBtnData extends IElementData {

}

interface ICtx extends b.IBobrilCtx {
    data: IInputGroupBtnData;
}

export const inputGroupBtnStyles = {
    inputGroupBtn: b.styleDef('input-group-btn')
};

export const inputGroupBtn = b.createDerivedComponent(elem, {
    id: 'bobrilstrap-input-group-button',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, inputGroupBtnStyles.inputGroupBtn);
    }
});

export default inputGroupBtn;