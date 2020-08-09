import * as b from "bobril";
import "../index";
import "bootstrap/dist/css/bootstrap.min.css";

import * as routes from "./routes";

b.routes(b.route(routes.main, [b.route(routes.home), b.route(routes.documentation), b.routeDefault(routes.home)]));
