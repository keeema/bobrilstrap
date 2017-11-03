import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Ul, IUlData } from "./ul";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IPaginationData extends IBaseData {
  ul?: IUlData;
  size?: PaginationSize;
}

interface IPaginationCtx extends b.IBobrilCtx {
  data: IPaginationData;
}

export const paginationStyles = {
  pagination: b.styleDef("pagination"),
  lg: b.styleDef("pagination-lg"),
  sm: b.styleDef("pagination-sm")
};

export enum PaginationSize {
  Md,
  Lg,
  Sm
}

export const paginationSizeStyles: IDictionary<
  PaginationSize,
  b.IBobrilStyle
> = createDictionary<PaginationSize, b.IBobrilStyle>();
paginationSizeStyles(PaginationSize.Lg, paginationStyles.lg);
paginationSizeStyles(PaginationSize.Sm, paginationStyles.sm);

export const Pagination = b.createDerivedComponent<IPaginationData>(Elem, {
  id: "bobrilstrap-pagination",
  render(ctx: IPaginationCtx, me: b.IBobrilNode) {
    me.tag = "nav";
    me.children = b.style(
      Ul(ctx.data.ul || {}, ctx.data.children),
      paginationStyles.pagination,
      !!ctx.data.size && paginationSizeStyles(ctx.data.size)
    );
  }
});

export default Pagination;
