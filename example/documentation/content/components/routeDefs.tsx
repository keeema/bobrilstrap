import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { alertsRoute } from "./parts/Alerts";
import { Components } from "./Components";
import { badgesRoute } from "./parts/Badges";
import { breadcrumbsRoute } from "./parts/Breadcrumbs";
import { buttonsRoute } from "./parts/Buttons";
import { buttonGroupRoute } from "./parts/ButtonGroup";
import { cardsRoute } from "./parts/Cards";

export const components: IRouteWithNavDefinition = {
    url: "components",
    name: "components",
    label: "Components",
    handler: (data) => <Components {...data} />,
    default: alertsRoute,
    subs: [alertsRoute, badgesRoute, breadcrumbsRoute, buttonsRoute, buttonGroupRoute, cardsRoute],
};
