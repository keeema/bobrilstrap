import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Layout } from "./Layout";
import { containersRoute } from "./parts/Container";
import { gridRoute } from "./parts/grid/Grid";

export const layout: IRouteWithNavDefinition = {
    url: "layout",
    name: "layout",
    label: "Layout",
    handler: (data) => <Layout {...data} />,
    default: containersRoute,
    subs: [containersRoute, gridRoute],
};
