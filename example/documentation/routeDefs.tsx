import * as b from "bobril";
import { IRouteWithNavDefinition } from "../common/routing";
import { Documentation } from "./documentation";
import { gettingStarted } from "./content/gettingStarted/routeDefs";

export const documentation: IRouteWithNavDefinition = {
    url: "documentation",
    name: "documentation",
    label: "Documentation",
    handler: (data) => <Documentation {...data} />,
    subs: [gettingStarted],
    default: gettingStarted,
};
