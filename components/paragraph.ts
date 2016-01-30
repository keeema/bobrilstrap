import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IParagraphData extends IBaseData {
    
}

interface ICtx extends b.IBobrilCtx {
    data: IParagraphData;
}

export default b.createDerivedComponent<IParagraphData>(elem, {
    id: 'bobrilstrap-paragraph',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'p';
    }
});
