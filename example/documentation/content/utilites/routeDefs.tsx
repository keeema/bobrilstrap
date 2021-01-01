import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { bordersRoute } from "./parts/Borders";
import { colorsRoute } from "./parts/Colors";
import { displayRoute } from "./parts/Display";
import { flexRoute } from "./parts/Flex";
import { Utilities } from "./Utilities";

export const utilitiesRoute: IRouteWithNavDefinition = {
    url: "utilities",
    name: "utilities",
    label: "Utilities",
    handler: (data) => <Utilities {...data} />,
    default: bordersRoute,
    subs: [bordersRoute, colorsRoute, displayRoute, flexRoute],
};
