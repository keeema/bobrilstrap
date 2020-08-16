import * as b from "bobril";
import "../index";
import "bootstrap/dist/css/bootstrap.min.css";

import * as routes from "./routes";
import { bobrilNavRoute } from "./common/routing";

b.routes(b.route(routes.main, [b.route(routes.home), bobrilNavRoute(routes.documentation), b.routeDefault(routes.home)]));
