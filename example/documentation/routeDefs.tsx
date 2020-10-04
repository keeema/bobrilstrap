import * as b from "bobril";
import { IRouteWithNavDefinition } from "../common/routing";
import { Documentation } from "./Documentation";
import { gettingStarted } from "./content/gettingStarted/routeDefs";
import { layout } from "./content/layout/routeDefs";

export const documentation: IRouteWithNavDefinition = {
    url: "documentation",
    name: "documentation",
    label: "Documentation",
    handler: (data) => <Documentation {...data} />,
    subs: [gettingStarted, layout],
    default: gettingStarted,
};
