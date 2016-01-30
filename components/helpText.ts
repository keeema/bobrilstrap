import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IHelpTextData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IHelpTextData;
}

export const helpTextStyle = b.styleDef('help-block');

export default b.createDerivedComponent<IHelpTextData>(elem, {
    id: 'bobrilstrap-help-text',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'span';
        b.style(me, helpTextStyle);
    }
});