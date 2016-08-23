import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import { elem, IBaseData } from './element';
import { button, IButtonData } from './button';
import { buttonGroup, IButtonGroupData } from './buttonGroup';

export const dropdownStyles = {
    dropdown: b.styleDef('dropdown'),
    dropdownToggle: b.styleDef('dropdown-toggle'),
    dropup: b.styleDef('dropup')
};

export interface IDropdownData extends IBaseData {
    button: IButtonData;
    buttonGroup?: IButtonGroupData;
    up?: boolean;
    splitted?: boolean;
    splittedSrOnlyText?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropdownData;
}

export const dropdown = b.createDerivedComponent<IDropdownData>(elem, {
    id: 'bobrilstrap-dropdown',
    render(ctx: ICtx, me: b.IBobrilNode) {
        addButton(ctx, me);

        if (ctx.data.buttonGroup) {
            me.tag = undefined;
            let buttonGroupNode = buttonGroup(ctx.data.buttonGroup, me.children);
            b.style(buttonGroupNode, ctx.data.up && dropdownStyles.dropup);
            me.children = buttonGroupNode;
        } else {
            b.style(me, ctx.data.up ? dropdownStyles.dropup : dropdownStyles.dropdown);
        }
    }
});

export default dropdown;

function updateButtonDataForDropdown(originalButtonData: IButtonData): IButtonData {
    let buttonData = b.assign({}, originalButtonData);
    buttonData.dropdown = true;
    buttonData.aria = b.assign({}, buttonData.aria);
    buttonData.aria.hasPopup = true;
    return buttonData;
}

function addButton(ctx: ICtx, me: b.IBobrilNode) {
    let dropdownButton: b.IBobrilNode,
        caretButton: b.IBobrilNode;

    if (ctx.data.splitted) {
        caretButton = button(updateButtonDataForDropdown({
            option: ctx.data.button.option,
            size: ctx.data.button.size,
            dropdownSplittedSrOnly: ctx.data.splittedSrOnlyText
        }));
        dropdownButton = button(ctx.data.button);
    } else {
        dropdownButton = button(updateButtonDataForDropdown(ctx.data.button));
        b.style(dropdownButton, dropdownStyles.dropdownToggle);
    }

    mergeToChildren(me, caretButton, true);
    mergeToChildren(me, dropdownButton, true);
}