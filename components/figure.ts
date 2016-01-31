import * as b from 'bobril';
import elem, { IBaseData } from './element';
import typography from './typography';

export interface IFigureData extends IBaseData {

}

interface ICtx extends b.IBobrilCtx {
    data: IFigureData;
}

export default b.createDerivedComponent<IFigureData>(elem, {
    id: 'bobrilstrap-figure',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'figure';
    }
});
