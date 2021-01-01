import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { introductionRoute } from "./parts/Introduction";
import { GettingStarted } from "./GettingStarted";

export const gettingStartedRoute: IRouteWithNavDefinition = {
    url: "getting-started",
    name: "getting-started",
    label: "Getting started",
    handler: (data) => <GettingStarted {...data} />,
    default: introductionRoute,
    subs: [introductionRoute],
};
