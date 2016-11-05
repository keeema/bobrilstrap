import * as b from 'bobril';
import { IBaseData } from './element';
import { h1, h2, h3, h4, h5, h6 } from './headings';
import { modalStyles } from './modal';

export const modalTitle1 = b.createDerivedComponent<IBaseData>(h1, {
    id: 'bobrilstrap-modal-title-h1',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, modalStyles.modalTitle);
    }
});

export const modalTitle2 = b.createDerivedComponent<IBaseData>(h2, {
    id: 'bobrilstrap-modal-title-h2',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, modalStyles.modalTitle);
    }
});

export const modalTitle3 = b.createDerivedComponent<IBaseData>(h3, {
    id: 'bobrilstrap-modal-title-h3',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, modalStyles.modalTitle);
    }
});

export const modalTitle4 = b.createDerivedComponent<IBaseData>(h4, {
    id: 'bobrilstrap-modal-title-h4',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, modalStyles.modalTitle);
    }
});

export const modalTitle5 = b.createDerivedComponent<IBaseData>(h5, {
    id: 'bobrilstrap-modal-title-h5',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, modalStyles.modalTitle);
    }
});

export const modalTitle6 = b.createDerivedComponent<IBaseData>(h6, {
    id: 'bobrilstrap-modal-title-h6',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, modalStyles.modalTitle);
    }
});