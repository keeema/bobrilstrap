import * as b from "bobril";

export function Anchor({ children, name, params }: { children: b.IBobrilChildren; name: string; params?: b.Params }): b.IBobrilNode {
    const me = b.useRef<b.IBobrilCacheNode | null>(null);
    b.useEffect(() => assignID(me, name));
    return (
        <b.Anchor ref={me} name={name} params={params} onAnchor={(el) => scrollIntoView(el, 60)}>
            <a href={b.urlOfRoute(name)} style={anchorJsLink}>
                {children}
            </a>
        </b.Anchor>
    );
}

function assignID(me: b.IProp<b.IBobrilCacheNode | null>, name: string): void {
    const meCache = me();
    if (!meCache) {
        return;
    }
    const el = b.getDomNode(meCache) as HTMLElement;
    if (!el.getAttribute("id")) {
        el.setAttribute("id", name);
    }
}

function scrollIntoView(el: HTMLElement, offset = 0): boolean {
    const isMain = el.getElementsByTagName("h1").length > 0;
    setTimeout(() => (isMain ? window.scrollTo(0, 0) : window.scroll(0, el.offsetTop - offset)), 200);
    return true;
}

const anchorJsLink = b.styleDef(
    {},
    {
        link: {
            textDecoration: "inherit",
            color: "inherit",
            cursor: "auto",
        },
        visited: {
            textDecoration: "inherit",
            color: "inherit",
            cursor: "auto",
        },
    }
);
