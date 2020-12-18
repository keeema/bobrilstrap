import * as b from "bobril";

export function Anchor({ children, name, params }: { children: b.IBobrilChildren; name?: string; params?: b.Params }): b.IBobrilNode {
    return (
        <b.Anchor name={name} params={params} onAnchor={(el) => scrollIntoView(el, 60)}>
            {children}
        </b.Anchor>
    );
}

function scrollIntoView(el: HTMLElement, offset = 0): boolean {
    setTimeout(() => window.scroll(0, el.offsetTop - offset), 200);
    return true;
}
