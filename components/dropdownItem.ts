import * as b from 'bobril';
import { li, ILiData, liStyles } from './li';
import { IElementBobrilNode } from './element';

export const dropdownItemStyles = b.assign(
    {
        divider: b.styleDef('divider'),
        dropdownHeader: b.styleDef('dropdown-header'),
    },
    liStyles);

export interface IDropdownItemData extends ILiData {
    separator?: boolean;
    header?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropdownItemData;
}

export const dropdownItem = b.createDerivedComponent<IDropdownItemData>(li, {
    id: 'bobrilstrap-dropdown-item',
    render(ctx: ICtx, me: IElementBobrilNode) {
        b.style(me, !!ctx.data.separator && dropdownItemStyles.divider);
        b.style(me, !!ctx.data.header && dropdownItemStyles.dropdownHeader);
        if (ctx.data.separator) {
            me.attrs['role'] = 'separator';
        }
    }
});

export default dropdownItem;