import * as b from "bobril";
import * as prismJs from "prismjs";
import { Navigation } from "./navigation/Navigation";
import { margin, buttonStyles } from "../index";

export function Main(data: b.IRouteHandlerData): b.IBobrilNode {
    b.useEffect(() => {
        deleteCopyButtons();
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
const marginBottomStyle = b.style({}, margin({ side: "b", size: 3 })).className!;

function fixCopies(): void {
    const buttons = document.querySelectorAll("div.toolbar-item  button");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i] as HTMLButtonElement;
        if (button.classList.length === 0) {
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
