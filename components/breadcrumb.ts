import * as b from "bobril";
import { Ol, IOlData } from "./ol";

export interface IBreadcrumbData extends IOlData {}

interface IBreadcrumbCtx extends b.IBobrilCtx {
  data: IBreadcrumbData;
}

export const breadcrumbStyles = {
  breadcrumb: b.styleDef("breadcrumb"),
  active: b.styleDef("active")
};

export const Breadcrumb = b.createDerivedComponent<IBreadcrumbData>(Ol, {
  id: "bobrilstrap-breadcrumb",
  render(_ctx: IBreadcrumbCtx, me: b.IBobrilNode) {
    b.style(me, breadcrumbStyles.breadcrumb);
  }
});

export default Breadcrumb;
