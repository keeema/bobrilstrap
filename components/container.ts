import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export interface IContainerData extends IBaseData {
  fluid?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IContainerData;
}

export const containerStyle = b.styleDef("container");
export const containerFluidStyle = b.styleDef("container-fluid");

export const Container = b.createDerivedComponent<IContainerData>(Elem, {
  id: "bobrilstrap-container",
  render(ctx: ICtx, me: b.IBobrilNode) {
    b.style(me, ctx.data.fluid ? containerFluidStyle : containerStyle);
  }
});

export default Container;
