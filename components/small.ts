import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface ISmallData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: ISmallData;
}

export default b.createDerivedComponent<ISmallData>(elem, {
    id: 'bobrilstrap-small',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'small';
    }
});
