import * as b from "bobril";
import * as prismJs from "prismjs";
import { Navigation } from "./navigation/navigation";
import { buttonStyles } from "../src/components/button";

export function Main(data: b.IRouteHandlerData): b.IBobrilNode {
    b.useEffect(() => {
        prismJs.highlightAll();
        fixCopies();
    });

    return (
        <>
            <Navigation />
            {data.activeRouteHandler()}
        </>
    );
}

const btnStyle = b.style({}, buttonStyles.btn).className!;
const btnDarkStyle = b.style({}, buttonStyles["outline-dark"]).className!;
const btnSmallStyle = b.style({}, buttonStyles.sizes("sm")).className!;

function fixCopies(): void {
    const buttons = document.querySelectorAll("div.toolbar-item  button");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i] as HTMLButtonElement;
        if (button.classList.length === 0) {
            button.classList.add(btnStyle, btnDarkStyle, btnSmallStyle);
        }
    }
}
