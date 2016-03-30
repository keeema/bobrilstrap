import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Size from './size';
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
    button,
    submit
}

export enum ButtonTag {
    button,
    input,
    a
}

export enum ButtonOption {
    default,
    success,
    warning,
    danger,
    info,
    link,
    primary
}

export const buttonStyles = {
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled'),
    btn: b.styleDef('btn'),
    btnBlock: b.styleDef('btn-block')
};

export const buttonSizeStyles = generateStyles<Size>(Size);
export const buttonOptiontStyles = generateStyles<ButtonOption>(ButtonOption);

export let button = b.createDerivedComponent<IButtonData>(elem, {
    id: 'bobrilstrap-button',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ButtonTag[ctx.data.tag || ButtonTag.button];
        me.attrs = ctx.data.attrs || {};

        b.style(me, buttonStyles.btn);
        b.style(me, ctx.data.active && buttonStyles.active);
        b.style(me, ctx.data.block && buttonStyles.btnBlock);
        b.style(me, ctx.data.size !== undefined && buttonSizeStyles(ctx.data.size));
        b.style(me, buttonOptiontStyles(ctx.data.option || ButtonOption.default));

        let typeAttr = ctx.data.tag === ButtonTag.a ? 'role' : 'type';
        me.attrs[typeAttr] = (ButtonType[ctx.data.type] || me.attrs[typeAttr] || ButtonType[ButtonType.button]).toString();

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

function generateStyles<TKeyEnum extends number>(source: Object): IDictionary<TKeyEnum, b.IBobrilStyle> {
    let result = createDictionary<TKeyEnum, b.IBobrilStyle>();
    Object.keys(source).forEach(key => {
        let castedValue = <TKeyEnum>parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, key === Size[Size.md] ? null : b.styleDef(`btn-${source[key]}`));
        }
    });

    return result;
}
