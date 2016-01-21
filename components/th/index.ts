import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Context, { contextStyles } from 'bobrilstrap-context';

export interface IData extends IBaseData {
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-th',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'th';
    }
});

export default create;
