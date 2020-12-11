import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Layout } from "./Layout";
import { columnsRoute } from "./parts/Columns";
import { containersRoute } from "./parts/Container";
import { gridRoute } from "./parts/grid/Grid";
import { guttersRoute } from "./parts/Gutters";

export const layout: IRouteWithNavDefinition = {
    url: "layout",
    name: "layout",
    label: "Layout",
    handler: (data) => <Layout {...data} />,
    default: containersRoute,
    subs: [containersRoute, gridRoute, columnsRoute, guttersRoute],
};
