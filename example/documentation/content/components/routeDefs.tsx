import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { alertsRoute } from "./parts/Alerts";
import { Components } from "./Components";
import { badgesRoute } from "./parts/Badges";
import { breadcrumbsRoute } from "./parts/Breadcrumbs";
import { buttonsRoute } from "./parts/Buttons";
import { buttonGroupRoute } from "./parts/ButtonGroup";
import { cardsRoute } from "./parts/Cards";
import { carouselRoute } from "./parts/Carousel";
import { collapseRoute } from "./parts/Collapse";
import { dropdownsRoute } from "./parts/Dropdowns";
import { listGroupRoute } from "./parts/ListGroup";
import { accordionsRoute } from "./parts/Accordion";
import { modalRoute } from "./parts/Modal";
import { navsAndTabsRoute } from "./parts/NavsTabs";
import { navbarRoute } from "./parts/Navbar";
import { paginationRoute } from "./parts/Pagination";
import { popoversRoute } from "./parts/Popovers";
import { progressRoute } from "./parts/Progress";
import { spinnersRoute } from "./parts/Spinners";
import { toastsRoute } from "./parts/Toasts";
import { tooltipsRoute } from "./parts/Tooltips";
import { closeButtonRoute } from "./parts/CloseButton";

export const componentsRoute: IRouteWithNavDefinition = {
    url: "components",
    name: "components",
    label: "Components",
    handler: (data) => <Components {...data} />,
    default: alertsRoute,
    subs: [
        accordionsRoute,
        alertsRoute,
        badgesRoute,
        breadcrumbsRoute,
        buttonsRoute,
        buttonGroupRoute,
        cardsRoute,
        carouselRoute,
        closeButtonRoute,
        collapseRoute,
        dropdownsRoute,
        listGroupRoute,
        modalRoute,
        navsAndTabsRoute,
        navbarRoute,
        paginationRoute,
        popoversRoute,
        progressRoute,
        spinnersRoute,
        toastsRoute,
        tooltipsRoute,
    ],
};
