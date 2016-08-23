import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { Size } from './size';
import { helpers } from './helpers';
import { span } from './span';
import { mergeToChildren } from './bobrilHelpers';
import { createDictionary, IDictionary } from './bobrilHelpers';
import { dropdownStyles } from './dropdown';

export interface IButtonData extends IBaseData {
    active?: boolean;
    block?: boolean;
    disabled?: boolean;
    size?: Size;
    option?: ButtonOption;
    type?: ButtonType;
    tag?: ButtonTag;
    href?: string;
    label?: string;
    dropdown?: boolean;
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
    A
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

export const button = b.createDerivedComponent<IButtonData>(elem, {
    id: 'bobrilstrap-button',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = resolveTag(ctx.data.tag);

        b.style(me, ctx.data.option !== ButtonOption.Close && buttonStyles.btn);
        b.style(me, ctx.data.active && buttonStyles.active);
        b.style(me, ctx.data.block && buttonStyles.btnBlock);
        b.style(me, ctx.data.size !== undefined && buttonSizeStyles(ctx.data.size));
        b.style(me, buttonOptiontStyles(ctx.data.option || ButtonOption.Default));

        const typeAttr = ctx.data.tag === ButtonTag.A ? 'role' : 'type';
        me.attrs[typeAttr] = (ButtonType[ctx.data.type] || me.attrs[typeAttr] || ButtonType[ButtonType.Button]).toString().toLowerCase();

        if (ctx.data.label) {
            if (ctx.data.tag === ButtonTag.Input) {
                me.attrs['value'] = ctx.data.label;
            } else {
                mergeToChildren(me, ctx.data.label);
            }
        }

        if (ctx.data.tag === ButtonTag.A) {
            me.attrs['href'] = ctx.data.href || 'javascript:void(0)';
        }

        if (ctx.data.disabled) {
            if (ctx.data.tag === ButtonTag.A) {
                b.style(me, buttonStyles.disabled);
            } else {
                me.attrs['disabled'] = 'disabled';
            }
        }

        if (ctx.data.dropdown) {
            ctx.data = b.assign({}, ctx.data);
            ctx.data.data = b.assign({}, ctx.data.data);
            ctx.data.aria = b.assign({}, ctx.data.aria);

            ctx.data.aria.hasPopup = true;
            ctx.data.data.toggle = 'dropdown';
            b.style(me, dropdownStyles.dropdownToggle);

            if (ctx.data.tag !== ButtonTag.Input)
                mergeToChildren(me, ' ');

            mergeToChildren(me, span({ style: helpers.caret }));
        }
    }
});

export const btn = button;
export default button;

function generateOptionsStyles(): IDictionary<ButtonOption, b.IBobrilStyle> {
    const result = createDictionary<ButtonOption, b.IBobrilStyle>();
    Object.keys(ButtonOption).forEach(key => {
        const castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === ButtonOption.Close
                ? helpers.close
                : b.styleDef(`btn-${ButtonOption[castedValue].toLowerCase()}`));
        }
    });

    return result;
}

function generateSizeStyles(): IDictionary<Size, b.IBobrilStyle> {
    const result = createDictionary<Size, b.IBobrilStyle>();
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

function resolveTag(tag: ButtonTag): string {
    switch (tag) {
        case ButtonTag.A:
            return 'a';
        case ButtonTag.Input:
            return 'input';
        case ButtonTag.Button:
            return 'button';
        default:
            return 'button';
    }
}