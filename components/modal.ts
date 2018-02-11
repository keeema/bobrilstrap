import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export enum ModalSize {
  Lg,
  Md,
  Sm
}

export interface IModalData extends IBaseData {
  size?: ModalSize;
  keyboard?: boolean;
  visible?: boolean;
  header?: b.IBobrilChildren;
  body?: b.IBobrilChildren;
  footer?: b.IBobrilChildren;
  backdrop?: boolean;
  animation?: boolean;
  onHide?: () => boolean;
  onHidden?: (ev: JQuery.Event<HTMLElement>) => void;
  onShown?: (ev: JQuery.Event<HTMLElement>) => void;
}

interface IModalCtx extends b.IBobrilCtx {
  data: IModalData;
  visible?: boolean;
}

export const modalStyles = {
  modal: b.styleDef("modal"),
  fade: b.styleDef("fade"),
  modalDialog: b.styleDef("modal-dialog"),
  modalContent: b.styleDef("modal-content"),
  modalHeader: b.styleDef("modal-header"),
  modalBody: b.styleDef("modal-body"),
  modalFooter: b.styleDef("modal-footer"),
  modalTitle: b.styleDef("modal-title"),
  lg: b.styleDef("modal-lg"),
  sm: b.styleDef("modal-sm")
};

export const modalSizeStyles: IDictionary<
  ModalSize,
  b.IBobrilStyle
> = createDictionary<ModalSize, b.IBobrilStyle>();
modalSizeStyles(ModalSize.Lg, modalStyles.lg);
modalSizeStyles(ModalSize.Md, false);
modalSizeStyles(ModalSize.Sm, modalStyles.sm);

export const Modal = b.createDerivedComponent<IModalData>(Elem, {
  id: "bobrilstrap-modal",
  render(ctx: IModalCtx, me: IElementBobrilNode) {
    me.attrs["role"] = "dialog";
    b.style(me, modalStyles.modal, !!ctx.data.animation && modalStyles.fade);
    me.children = b.styledDiv(
      b.styledDiv(
        [
          !!ctx.data.header &&
            b.styledDiv(ctx.data.header, modalStyles.modalHeader),
          !!ctx.data.body && b.styledDiv(ctx.data.body, modalStyles.modalBody),
          !!ctx.data.footer &&
            b.styledDiv(ctx.data.footer, modalStyles.modalFooter)
        ],
        modalStyles.modalContent
      ),
      modalStyles.modalDialog,
      ctx.data.size !== undefined && modalSizeStyles(ctx.data.size)
    );
    me.children.attrs = { role: "document" };
  },
  postInitDom(ctx: IModalCtx, _me: b.IBobrilCacheNode, element: HTMLElement) {
    const backdrop =
      ctx.data.backdrop !== undefined ? ctx.data.backdrop : "static";
    const modalElement = $(element);
    modalElement.modal({
      keyboard: ctx.data.keyboard,
      show: !!ctx.data.visible,
      backdrop
    });

    modalElement.on("hidden.bs.Modal", ev => {
      if (ctx.data.onHidden) {
        ctx.data.onHidden(ev);
      }
    });

    modalElement.on("shown.bs.Modal", ev => {
      if (ctx.data.onShown) {
        ctx.data.onShown(ev);
      }
    });
  },
  postUpdateDom(ctx: IModalCtx, _me: b.IBobrilCacheNode, element: HTMLElement) {
    if (!!ctx.data.visible !== !!ctx.visible) {
      if (ctx.visible && ctx.data.onHide && !ctx.data.onHide()) return;

      ctx.visible = ctx.data.visible;
      $(element).modal(ctx.visible ? "show" : "hide");
    }
  }
});

export default Modal;
