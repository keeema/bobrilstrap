import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Forms } from "./Forms";
import { formControlsRoute } from "./parts/FormsControls";
import { overviewRoute } from "./parts/Overview";

export const forms: IRouteWithNavDefinition = {
    url: "forms",
    name: "forms",
    label: "Forms",
    handler: (data) => <Forms {...data} />,
    default: overviewRoute,
    subs: [overviewRoute, formControlsRoute],
};
