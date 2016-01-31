import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IOlData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IOlData;
}

export default b.createDerivedComponent<IOlData>(elem, {
    id: 'bobrilstrap-ol',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'ol';
    }
});
