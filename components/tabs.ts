import * as b from 'bobril';
import { Ul, IUlData } from './ul';
import { navStyles, NavbarAlignment } from './nav';

export interface ITabsData extends IUlData {
    justified?: boolean;
    alignment?: NavbarAlignment;
}

interface ITabsCtx extends b.IBobrilCtx {
    data: ITabsData;
}

export const Tabs = b.createDerivedComponent<ITabsData>(Ul, {
    id: 'bobrilstrap-tabs',
    render(ctx: ITabsCtx, me: b.IBobrilNode) {
        b.style(me, navStyles.nav);
        b.style(me, navStyles.navbTabs);
        b.style(me, !!ctx.data.justified && navStyles.navJustified);
        b.style(me, ctx.data.alignment === NavbarAlignment.Right && navStyles.navbarRight);
        b.style(me, ctx.data.alignment === NavbarAlignment.Left && navStyles.navbarLeft);
    }
});

export default Tabs;