import * as b from "bobril";
import * as images from "../images/images";
import * as routes from "../routes";
import { Navbar } from "../../index";

export function BobrilstrapIcon(): b.IBobrilNode {
    return (
        <Navbar.Brand href={b.urlOfRoute(routes.home.name)}>
            <div style={[images.bobrilstrap, bobrilstrapIconStyle]}></div>
        </Navbar.Brand>
    );
}

const bobrilstrapIconStyle = b.styleDef({ width: 32, height: 32, backgroundSize: 32 });
