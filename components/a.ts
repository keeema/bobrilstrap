import * as b from 'bobril';
import elem, { IBaseData } from './element';

export enum Target {
    Blank,
    Self,
    Parent,
    Top,
}

export interface IAnchorData extends IBaseData {
    href?: string;
    name?: string;
    target?: Target;
}

interface ICtx extends b.IBobrilCtx {
    data: IAnchorData;
}

export const anchor = b.createDerivedComponent<IAnchorData>(elem, {
    id: 'bobrilstrap-a',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'a';
        if (ctx.data.href)
            me.attrs.href = ctx.data.href;
        if (ctx.data.target !== undefined)
            me.attrs['target'] = `_${Target[ctx.data.target].toLowerCase()}`;
        if (ctx.data.name)
            me.attrs['name'] = ctx.data.name;
    }
});

export default anchor;
export const a = anchor;
