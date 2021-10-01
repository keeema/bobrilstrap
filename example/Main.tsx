import * as b from "bobril";
import * as prismJs from "prismjs";
import { Navigation } from "./navigation/Navigation";
import { margin, buttonStyles } from "../index";

export function Main(data: b.IRouteHandlerData): b.IBobrilNode {
    const me = b.useRef<b.IBobrilCacheNode | null>(null);
    b.useEffect(() => {
        deleteCopyButtons();
        prismJs.highlightAll();
        fixCopies();
    });

    return (
        <b.Fragment ref={me}>
            <Navigation />
            {data.activeRouteHandler()}
        </b.Fragment>
    );
}

const btnStyle = b.style({}, buttonStyles.btn).className!;
const btnDarkStyle = b.style({}, buttonStyles["outline-dark"]).className!;
const btnSmallStyle = b.style({}, buttonStyles.sizes("sm")).className!;
const marginBottomStyle = b.style({}, margin("b", 3)).className!;

function fixCopies(): void {
    const buttons = document.querySelectorAll(".copy-to-clipboard-button");

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i] as HTMLButtonElement;

        if (!button.classList.contains(btnStyle)) {
            button.classList.add(btnStyle, btnDarkStyle, btnSmallStyle, marginBottomStyle);
        }
    }
}

function deleteCopyButtons(): void {
    const buttons = document.querySelectorAll("div.code-toolbar");
    buttons.forEach((button) => {
        if (button && button.firstElementChild && button.firstElementChild.tagName !== "PRE") {
            button.remove();
        }
    });
}
