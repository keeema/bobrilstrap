import * as b from "bobril";
import { Li, ILiData } from "./li";

export interface IPaginationItemData extends ILiData {}

export const PaginationItem = b.createDerivedComponent<IPaginationItemData, ILiData>(Li, {
    id: "bobrilstrap-pagination-item",
});

export default PaginationItem;
