import * as b from 'bobril';
import elem, { IBaseData } from './element';

export class Target {
    static blank: string = '_blank';
    static self: string = '_self';
    static parent: string = '_parent';
    static top: string = '_top';
}

export interface IAData extends IBaseData {
    href?: string;
    name?: string;
    target?: Target;
}

interface ICtx extends b.IBobrilCtx {
    data: IAData;
}
export default b.createDerivedComponent<IAData>(elem, {
    id: 'bobrilstrap-a',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'a';
        if (ctx.data.href)
            me.attrs.href = ctx.data.href;
        if (ctx.data.target)
            me.attrs['target'] = ctx.data.target;
        if (ctx.data.name)
            me.attrs['name'] = ctx.data.name;
    }
});
