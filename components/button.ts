import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Size from './size';
import { mergeToChildren } from './bobrilHelpers';

export interface IButtonData extends IBaseData {
    active?: boolean;
    block?: boolean;
    disabled?: boolean;
    size?: Size;
    option?: ButtonOption;
    type?: ButtonType;
    tag?: ButtonTag;
    href?: any;
    label?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IButtonData;
}

export class ButtonType {
    static button: string = 'button';
    static submit: string = 'submit';
}

export class ButtonTag {
    static button: string = 'button';
    static input: string = 'input';
    static a: string = 'a';
}

export class ButtonOption {
    static default: string = 'default';
    static success: string = 'success';
    static warning: string = 'warning';
    static danger: string = 'danger';
    static info: string = 'info';
    static link: string = 'link';
    static primary: string = 'primary';
}

export const buttonStyles = {
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled'),
    btn: b.styleDef('btn'),
    btnBlock: b.styleDef('btn-block')
};

export const buttonSizeStyles = generateStyles(Size);
export const buttonOptiontStyles = generateStyles(ButtonOption);

export let button = b.createDerivedComponent<IButtonData>(elem, {
    id: 'bobrilstrap-button',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = (ctx.data.tag || ButtonTag.button).toString();
        me.attrs = ctx.data.attrs || {};

        b.style(me, buttonStyles.btn);
        b.style(me, ctx.data.active && buttonStyles.active);
        b.style(me, ctx.data.block && buttonStyles.btnBlock);
        b.style(me, ctx.data.size && buttonSizeStyles[ctx.data.size.toString()]);
        b.style(me, buttonOptiontStyles[(ctx.data.option || ButtonOption.default).toString()]);

        let typeAttr = ctx.data.tag === ButtonTag.a ? 'role' : 'type';
        me.attrs[typeAttr] = (ctx.data.type || me.attrs[typeAttr] || ButtonType.button).toString();

        if (ctx.data.label) {
            if (ctx.data.tag === ButtonTag.input) {
                me.attrs['value'] = ctx.data.label;
            } else {
                mergeToChildren(me, ctx.data.label);
            }
        }
        
        if (ctx.data.tag === ButtonTag.a) {
                me.attrs['href'] = ctx.data.href || '#';
        }

        if (ctx.data.disabled) {
            if (ctx.data.tag === ButtonTag.a) {
                b.style(me, buttonStyles.disabled);
            } else {
                me.attrs['disabled'] = 'disabled';
            }
        }

    }
});

export default button;

function generateStyles(source: Object): { [key: string]: b.IBobrilStyle } {
    let result: { [key: string]: b.IBobrilStyle } = {};
    Object.keys(source).forEach(key => {
        result[key] = key === Size.md ? null : b.styleDef(`btn-${key}`);
    });

    return result;
} 
