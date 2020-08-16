import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { introductionRoute } from "./parts/introduction";
import { GettingStarted } from "./gettingStarted";

export const gettingStarted: IRouteWithNavDefinition = {
    url: "getting-started",
    name: "getting-started",
    label: "Getting started",
    handler: (data) => <GettingStarted {...data} />,
    default: introductionRoute,
    subs: [introductionRoute],
};
