import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-paragraph',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'p';
    }
});

export default create;
