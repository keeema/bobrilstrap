import * as b from "bobril";
import { Ul, IUlData } from "./ul";
import { navStyles, NavbarAlignment } from "./nav";

export interface IPillsData extends IUlData {
  justified?: boolean;
  alignment?: NavbarAlignment;
  stacked?: boolean;
}

interface IPillsCtx extends b.IBobrilCtx {
  data: IPillsData;
}

export const Pills = b.createDerivedComponent<IPillsData>(Ul, {
  id: "bobrilstrap-pills",
  render(ctx: IPillsCtx, me: b.IBobrilNode) {
    b.style(me, navStyles.nav);
    b.style(me, navStyles.navPills);
    b.style(me, !!ctx.data.justified && navStyles.navJustified);
    b.style(me, !!ctx.data.stacked && navStyles.navStacked);
    b.style(
      me,
      ctx.data.alignment === NavbarAlignment.Right && navStyles.navbarRight
    );
    b.style(
      me,
      ctx.data.alignment === NavbarAlignment.Left && navStyles.navbarLeft
    );
  }
});

export default Pills;
