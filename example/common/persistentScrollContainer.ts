import * as b from 'bobril';
import { container, IContainerData } from '../../index';

export interface IPersistentScrollContainerData extends IContainerData {
    id: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IPersistentScrollContainerData;
}

export const persistentScrollContainer = b.createDerivedComponent<IPersistentScrollContainerData>(container, {
    init(ctx: ICtx) {
        if (!window.name) {
            window.name = `bobrilstrap${Math.ceil(Math.random() * 1000000)}`;
            localStorage.setItem(getScrollStorageName(ctx.data.id), '0');
        }

        window.onscroll = (ev: Event) => {
            localStorage.setItem(getScrollStorageName(ctx.data.id), (<{ body?: HTMLElement }>event.target).body.scrollTop.toString());
        };
    },
    postInitDom(ctx: ICtx) {
        document.body.scrollTop = parseInt(localStorage.getItem(getScrollStorageName(ctx.data.id)) || '0', 10);
    }
});

function getScrollStorageName(id: string): string {
    return `bobrilstrap-${window.name}-${id}-scrollTop`;
}