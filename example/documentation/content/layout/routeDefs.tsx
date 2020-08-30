import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Layout } from "./layout";
import { containersRoute } from "./parts/container";

export const layout: IRouteWithNavDefinition = {
    url: "layout",
    name: "layout",
    label: "Layout",
    handler: (data) => <Layout {...data} />,
    default: containersRoute,
    subs: [containersRoute],
};
