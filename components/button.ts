import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Size from './size';
import helpers from './helpers';
import { mergeToChildren } from './bobrilHelpers';
import { createDictionary, IDictionary } from './bobrilHelpers';

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

export enum ButtonType {
    Button,
    Submit
}

export enum ButtonTag {
    Button,
    Input,
    Anchor
}

export enum ButtonOption {
    Default,
    Success,
    Warning,
    Danger,
    Info,
    Link,
    Primary,
    Close
}

export const buttonStyles = {
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled'),
    btn: b.styleDef('btn'),
    btnBlock: b.styleDef('btn-block')
};

export const buttonSizeStyles = generateSizeStyles();
export const buttonOptiontStyles = generateOptionsStyles();

export let button = b.createDerivedComponent<IButtonData>(elem, {
    id: 'bobrilstrap-button',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ButtonTag[ctx.data.tag || ButtonTag.Button];
        me.attrs = ctx.data.attrs || {};

        b.style(me, ctx.data.option !== ButtonOption.Close && buttonStyles.btn);
        b.style(me, ctx.data.active && buttonStyles.active);
        b.style(me, ctx.data.block && buttonStyles.btnBlock);
        b.style(me, ctx.data.size !== undefined && buttonSizeStyles(ctx.data.size));
        b.style(me, buttonOptiontStyles(ctx.data.option || ButtonOption.Default));

        let typeAttr = ctx.data.tag === ButtonTag.Anchor ? 'role' : 'type';
        me.attrs[typeAttr] = (ButtonType[ctx.data.type] || me.attrs[typeAttr] || ButtonType[ButtonType.Button]).toString();

        if (ctx.data.label) {
            if (ctx.data.tag === ButtonTag.Input) {
                me.attrs['value'] = ctx.data.label;
            } else {
                mergeToChildren(me, ctx.data.label);
            }
        }

        if (ctx.data.tag === ButtonTag.Anchor) {
            me.attrs['href'] = ctx.data.href || '#';
        }

        if (ctx.data.disabled) {
            if (ctx.data.tag === ButtonTag.Anchor) {
                b.style(me, buttonStyles.disabled);
            } else {
                me.attrs['disabled'] = 'disabled';
            }
        }

    }
});

export default button;

function generateOptionsStyles(): IDictionary<ButtonOption, b.IBobrilStyle> {
    let result = createDictionary<ButtonOption, b.IBobrilStyle>();
    Object.keys(ButtonOption).forEach(key => {
        let castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === ButtonOption.Close
                ? helpers.close
                : b.styleDef(`btn-${ButtonOption[castedValue].toLowerCase()}`));
        }
    });

    return result;
}

function generateSizeStyles(): IDictionary<Size, b.IBobrilStyle> {
    let result = createDictionary<Size, b.IBobrilStyle>();
    Object.keys(Size).forEach(key => {
        let castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === Size.Md 
                ? null 
                : b.styleDef(`btn-${Size[castedValue].toLowerCase()}`));
        }
    });

    return result;
}
