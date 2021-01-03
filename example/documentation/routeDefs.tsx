import * as b from "bobril";
import { IRouteWithNavDefinition } from "../common/routing";
import { Documentation } from "./Documentation";
import { gettingStartedRoute } from "./content/gettingStarted/routeDefs";
import { layoutRoute } from "./content/layout/routeDefs";
import { componentsRoute } from "./content/components/routeDefs";
import { iconsRoute } from "./content/icons/Icons";
import { formsRoute } from "./content/forms/routeDefs";
import { helpersRoute } from "./content/helpers/routeDefs";
import { utilitiesRoute } from "./content/utilites/routeDefs";
import { contentRoute } from "./content/content/routeDefs";

export const documentation: IRouteWithNavDefinition = {
    url: "documentation",
    name: "documentation",
    label: "Documentation",
    handler: (data) => <Documentation {...data} />,
    subs: [gettingStartedRoute, layoutRoute, contentRoute, formsRoute, componentsRoute, helpersRoute, utilitiesRoute, iconsRoute],
    default: gettingStartedRoute,
};
