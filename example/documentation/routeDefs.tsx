import * as b from "bobril";
import { IRouteWithNavDefinition } from "../common/routing";
import { Documentation } from "./Documentation";
import { gettingStarted } from "./content/gettingStarted/routeDefs";
import { layout } from "./content/layout/routeDefs";
import { components } from "./content/components/routeDefs";
import { iconsRoute } from "./content/icons/Icons";
import { forms } from "./content/forms/routeDefs";

export const documentation: IRouteWithNavDefinition = {
    url: "documentation",
    name: "documentation",
    label: "Documentation",
    handler: (data) => <Documentation {...data} />,
    subs: [gettingStarted, layout, components, forms, iconsRoute],
    default: gettingStarted,
};
