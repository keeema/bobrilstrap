import * as b from 'bobril';
import { li, ILiData } from './li';

export const dropdownItemStyles = {
    divider: b.styleDef('divider'),
    dropdownHeader: b.styleDef('dropdown-header'),
    disabled: b.styleDef('disabled')
};

export interface IDropdownItemData extends ILiData {
    separator?: boolean;
    header?: boolean;
    disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropdownItemData;
}

export const dropdownItem = b.createDerivedComponent<IDropdownItemData>(li, {
    id: 'bobrilstrap-dropdown-item',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, ctx.data.separator && dropdownItemStyles.divider);
        b.style(me, ctx.data.header && dropdownItemStyles.dropdownHeader);
        b.style(me, ctx.data.disabled && dropdownItemStyles.disabled);
        if (ctx.data.separator) {
            me.attrs['role'] = 'separator';
        }
    }
});

export default dropdownItem;