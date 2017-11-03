import * as b from "bobril";
import { IBaseData } from "./element";
import { H1, H2, H3, H4, H5, H6 } from "./headings";
import { modalStyles } from "./modal";

export const ModalTitle1 = b.createDerivedComponent<IBaseData>(H1, {
  id: "bobrilstrap-modal-title-h1",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, modalStyles.modalTitle);
  }
});

export const ModalTitle2 = b.createDerivedComponent<IBaseData>(H2, {
  id: "bobrilstrap-modal-title-h2",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, modalStyles.modalTitle);
  }
});

export const ModalTitle3 = b.createDerivedComponent<IBaseData>(H3, {
  id: "bobrilstrap-modal-title-h3",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, modalStyles.modalTitle);
  }
});

export const ModalTitle4 = b.createDerivedComponent<IBaseData>(H4, {
  id: "bobrilstrap-modal-title-h4",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, modalStyles.modalTitle);
  }
});

export const ModalTitle5 = b.createDerivedComponent<IBaseData>(H5, {
  id: "bobrilstrap-modal-title-h5",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, modalStyles.modalTitle);
  }
});

export const ModalTitle6 = b.createDerivedComponent<IBaseData>(H6, {
  id: "bobrilstrap-modal-title-h6",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, modalStyles.modalTitle);
  }
});
