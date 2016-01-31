import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IPreData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IPreData;
}

export default b.createDerivedComponent<IPreData>(elem, {
    id: 'bobrilstrap-pre',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'pre';
    }
});
