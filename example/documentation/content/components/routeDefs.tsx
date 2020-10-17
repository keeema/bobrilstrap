import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { alertsRoute } from "./parts/Alerts";
import { Components } from "./Components";

export const components: IRouteWithNavDefinition = {
    url: "components",
    name: "components",
    label: "Components",
    handler: (data) => <Components {...data} />,
    default: alertsRoute,
    subs: [alertsRoute],
};
