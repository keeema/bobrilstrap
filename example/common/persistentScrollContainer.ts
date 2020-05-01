import * as b from "bobril";
import { Container, IContainerData } from "../../index";

export interface IPersistentScrollContainerData extends IContainerData {
    id: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IPersistentScrollContainerData;
}

export const persistentScrollContainer = b.createDerivedComponent<IPersistentScrollContainerData, IContainerData>(Container, {
    init(ctx: ICtx) {
        if (!window.name) {
            window.name = `bobrilstrap${Math.ceil(Math.random() * 1000000)}`;
            localStorage.setItem(getScrollStorageName(ctx.data.id), "0");
        }

        window.onscroll = (event: Event) => {
            const body = (event.target as { body?: HTMLElement }).body;
            if (body) localStorage.setItem(getScrollStorageName(ctx.data.id), body.scrollTop.toString());
        };
    },
    postInitDom(ctx: ICtx) {
        document.body.scrollTop = parseInt(localStorage.getItem(getScrollStorageName(ctx.data.id)) || "0", 10);
    }
});

function getScrollStorageName(id: string): string {
    return `bobrilstrap-${window.name}-${id}-scrollTop`;
}
