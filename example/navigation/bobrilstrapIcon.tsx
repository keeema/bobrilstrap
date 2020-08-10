import * as b from "bobril";
import * as images from "../images/images";
import { Navbar } from "../../index";

export function BobrilstrapIcon(): b.IBobrilNode {
    return (
        <Navbar.Brand href="/">
            <div style={[images.bobrilstrap, bobrilstrapIconStyle]}></div>
        </Navbar.Brand>
    );
}

const bobrilstrapIconStyle = b.styleDef({ width: 32, height: 32, backgroundSize: 32 });
