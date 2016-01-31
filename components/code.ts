import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface ICodeData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: ICodeData;
}
export default b.createDerivedComponent<ICodeData>(elem, {
    id: 'bobrilstrap-code',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'code';
    }
});
