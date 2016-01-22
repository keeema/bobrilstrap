import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Size from 'bobrilstrap-size';
import { mergeToChildren } from 'bobrilstrap-bobril-helpers';

export interface IData extends IBaseData {
    active?: boolean;
    block?: boolean;
    disabled?: boolean;
    size?: Size;
    option?: Option;
    type?: Type;
    tag?: Tag;
    href?: any;
    title?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export class Type {
    static button: string = 'button';
    static submit: string = 'submit';
}

export class Tag {
    static button: string = 'button';
    static input: string = 'input';
    static a: string = 'a';
}

export class Option {
    static default: string = 'default';
    static success: string = 'success';
    static warning: string = 'warning';
    static danger: string = 'danger';
    static info: string = 'info';
    static link: string = 'link';
    static primary: string = 'primary';
}

export { Size };

export let buttonStyles = {
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled'),
    btn: b.styleDef('btn'),
    btnBlock: b.styleDef('btn-block')
};

export let buttonSizeStyles = generateStyles(Size);
export let buttonOptiontStyles = generateStyles(Option);

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-button',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = (ctx.data.tag || Tag.button).toString();
        me.attrs = ctx.data.attrs || {};

        b.style(me, buttonStyles.btn);
        b.style(me, ctx.data.active && buttonStyles.active);
        b.style(me, ctx.data.block && buttonStyles.btnBlock);
        b.style(me, ctx.data.size && buttonSizeStyles[ctx.data.size.toString()]);
        b.style(me, buttonOptiontStyles[(ctx.data.option || Option.default).toString()]);

        let typeAttr = ctx.data.tag === Tag.a ? 'role' : 'type';
        me.attrs[typeAttr] = (ctx.data.type || me.attrs[typeAttr] || Type.button).toString();

        if (ctx.data.title) {
            if (ctx.data.tag === Tag.input) {
                me.attrs['value'] = ctx.data.title;
            } else {
                mergeToChildren(me, ctx.data.title);
            }
        }
        
        if (ctx.data.tag === Tag.a) {
                me.attrs['href'] = ctx.data.href || '#';
        }

        if (ctx.data.disabled) {
            if (ctx.data.tag === Tag.a) {
                b.style(me, buttonStyles.disabled);
            } else {
                me.attrs['disabled'] = 'disabled';
            }
        }

    }
});

export default create;

function generateStyles(source: Object): { [key: string]: b.IBobrilStyle } {
    let result: { [key: string]: b.IBobrilStyle } = {};
    Object.keys(source).forEach(key => {
        result[key] = key === Size.md ? null : b.styleDef(`btn-${key}`);
    });

    return result;
} 
