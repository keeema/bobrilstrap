import * as b from "bobril";
import { Tab, ITabData } from "./tab";

export interface IPillData extends ITabData {}

export const Pill = b.createDerivedComponent<IPillData, ITabData>(Tab, {
    id: "bobrilstrap-pill",
});

export default Pill;
