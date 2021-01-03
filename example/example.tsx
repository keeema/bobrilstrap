import * as b from "bobril";
import "../index";
import "prismjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/prismjs/plugins/toolbar/prism-toolbar";
import "../node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "../node_modules/prismjs/components/prism-bash";
import "../node_modules/prismjs/components/prism-jsx";
import "../node_modules/prismjs/components/prism-tsx";
import "../node_modules/prism-themes/themes/prism-darcula.css";

import * as routes from "./routes";
import { bobrilNavRoute } from "./common/routing";

b.asset("../node_modules/bootstrap/dist/css/bootstrap.min.css.map");

b.routes(b.route(routes.main, [b.route(routes.home), bobrilNavRoute(routes.documentation), b.routeDefault(routes.home)]));
