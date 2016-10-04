import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { navStyles } from './nav';

export interface INavbarCollapseData extends IBaseData {
}

interface INavbarCollapseCtx extends b.IBobrilCtx {
    data: INavbarCollapseData;
}

export const navbarCollapse = b.createDerivedComponent<INavbarCollapseData>(elem, {
    id: 'bobrilstrap-navbar-collapse',
    render(_ctx: INavbarCollapseCtx, me: b.IBobrilNode) {
        b.style(me, navStyles.navbarCollapse);
        b.style(me, navStyles.collapse);
    }
});

export default navbarCollapse;