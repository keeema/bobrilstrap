import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import elem, { IBaseData } from './element';
import button, { IButtonData } from './button';
import span from './span';
import helpers from './helpers';

export const dropdownStyles = {
    dropdown: b.styleDef('dropdown'),
    dropdownToggle: b.styleDef('dropdown-toggle'),
    dropup: b.styleDef('dropup')
};

export interface IDropdownData extends IBaseData {
    button: IButtonData;
    up?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropdownData;
}

export let dropdown = b.createDerivedComponent<IDropdownData>(elem, {
    id: 'bobrilstrap-dropdown',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, ctx.data.up ? dropdownStyles.dropup : dropdownStyles.dropdown);
        addButton(ctx, me);
    }
});

export default dropdown;

function updateButtonDataForDropdown(ctx: ICtx): IButtonData {
    let buttonData = b.assign({}, ctx.data.button);
    buttonData.dropdown = true;
    return buttonData;
}

function addButton(ctx: ICtx, me: b.IBobrilNode) {
    let dropdownButton = button(updateButtonDataForDropdown(ctx));

    mergeToChildren(me, dropdownButton, true);
    b.style(dropdownButton, dropdownStyles.dropdownToggle);
}