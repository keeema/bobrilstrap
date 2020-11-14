import * as b from "bobril";

export function Anchor({ children, name, params }: { children: b.IBobrilChildren; name?: string; params?: b.Params }): b.IBobrilNode {
    const me = b.useRef<b.IBobrilCacheNode | null>(null);
    const lastTransitionRunCount = b.useState<number | undefined>(undefined);

    b.useEffect(() => {
        const current = me.current;
        current && handleAnchorRoute(current, lastTransitionRunCount, name, params);
    });

    return <b.Fragment ref={me}>{children}</b.Fragment>;
}

function handleAnchorRoute(
    me: b.IBobrilCacheNode,
    lastTransitionRunCount: b.IProp<number | undefined>,
    name?: string,
    params?: b.Params
): void {
    let routeName: string | undefined;
    if (name) {
        routeName = name;
    } else {
        const firstChild = (me.children && me.children[0]) as b.IBobrilCacheNode;
        routeName = firstChild.attrs && firstChild.attrs.id;
    }
    if (!b.isActive(routeName, params)) {
        lastTransitionRunCount(0);
        return;
    }
    if (lastTransitionRunCount() === b.transitionRunCount) {
        return;
    }
    scrollIntoView(b.getDomNode(me) as HTMLElement, 14);
    lastTransitionRunCount(b.transitionRunCount);
}

function scrollIntoView(el: HTMLElement, offset = 0): void {
    window.scroll(0, el.offsetTop - offset);
}
