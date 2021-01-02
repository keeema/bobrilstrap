import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Content } from "./Content";
import { figuresRoute } from "./parts/Figures";
import { imagesRoute } from "./parts/Images";
import { rebootRoute } from "./parts/Reboot";

export const contentRoute: IRouteWithNavDefinition = {
    url: "content",
    name: "content",
    label: "Content",
    handler: (data) => <Content {...data} />,
    default: rebootRoute,
    subs: [rebootRoute, imagesRoute, figuresRoute],
};
