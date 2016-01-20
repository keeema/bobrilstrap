import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Context, { contextStyles } from 'bobrilstrap-context';

interface ICtx extends b.IBobrilCtx {
    data: IBaseData;
}

export let create = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-tbody',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tbody';
    }
});

export default create;
