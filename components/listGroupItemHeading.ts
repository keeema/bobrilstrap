import * as b from "bobril";
import { IBaseData } from "./element";
import { H1, H2, H3, H4, H5, H6 } from "./headings";
import { listGroupStyles } from "./listGroup";

export const ListGroupItemHeading1 = b.createDerivedComponent<IBaseData>(H1, {
  id: "listgroup-item-h1",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemHeading);
  }
});

export const ListGroupItemHeading2 = b.createDerivedComponent<IBaseData>(H2, {
  id: "listgroup-item-h2",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemHeading);
  }
});

export const ListGroupItemHeading3 = b.createDerivedComponent<IBaseData>(H3, {
  id: "listgroup-item-h3",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemHeading);
  }
});

export const ListGroupItemHeading4 = b.createDerivedComponent<IBaseData>(H4, {
  id: "listgroup-item-h4",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemHeading);
  }
});

export const ListGroupItemHeading5 = b.createDerivedComponent<IBaseData>(H5, {
  id: "listgroup-item-h5",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemHeading);
  }
});

export const ListGroupItemHeading6 = b.createDerivedComponent<IBaseData>(H6, {
  id: "listgroup-item-h6",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemHeading);
  }
});
