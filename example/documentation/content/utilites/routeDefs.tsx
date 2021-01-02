import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { bordersRoute } from "./parts/Borders";
import { colorsRoute } from "./parts/Colors";
import { displayRoute } from "./parts/Display";
import { flexRoute } from "./parts/Flex";
import { floatRoute } from "./parts/Float";
import { interactionsRoute } from "./parts/Interactions";
import { overflowRoute } from "./parts/Overflow";
import { positionRoute } from "./parts/Position";
import { shadowsRoute } from "./parts/Shadows";
import { sizingRoute } from "./parts/Sizing";
import { spacingRoute } from "./parts/Spacing";
import { textRoute } from "./parts/Text";
import { verticalAlignmentRoute } from "./parts/VerticalAlignment";
import { visibilityRoute } from "./parts/Visibility";
import { Utilities } from "./Utilities";

export const utilitiesRoute: IRouteWithNavDefinition = {
    url: "utilities",
    name: "utilities",
    label: "Utilities",
    handler: (data) => <Utilities {...data} />,
    default: bordersRoute,
    subs: [
        bordersRoute,
        colorsRoute,
        displayRoute,
        flexRoute,
        floatRoute,
        interactionsRoute,
        overflowRoute,
        positionRoute,
        shadowsRoute,
        sizingRoute,
        spacingRoute,
        textRoute,
        verticalAlignmentRoute,
        visibilityRoute,
    ],
};
