import * as b from 'bobril';
import { ul, IUlData } from './ul';

export const dropdownMenuStyles = {
    dropdownMenu: b.styleDef('dropdown-menu'),
    dropdownMenuRight: b.styleDef('dropdown-menu-right')
};

export interface IDropDownMenuData extends IUlData {
    right?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropDownMenuData;
}

export const dropdownMenu = b.createDerivedComponent<IDropDownMenuData>(ul, {
    id: 'bobrilstrap-dropdown-menu',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, dropdownMenuStyles.dropdownMenu);
        b.style(me, ctx.data.right && dropdownMenuStyles.dropdownMenuRight);
    }
});

export default dropdownMenu;