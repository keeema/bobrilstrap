import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Content } from "./Content";
import { figuresRoute } from "./parts/Figures";
import { imagesRoute } from "./parts/Images";
import { tablesRoute } from "./parts/Tables";
import { typographyRoute } from "./parts/Typography";

export const contentRoute: IRouteWithNavDefinition = {
    url: "content",
    name: "content",
    label: "Content",
    handler: (data) => <Content {...data} />,
    default: typographyRoute,
    subs: [typographyRoute, imagesRoute, tablesRoute, figuresRoute],
};
