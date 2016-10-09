import * as b from 'bobril';
import { li, ILiData } from './li';
import { breadcrumbStyles } from './breadcrumb';

export interface IBreadcrumbItemData extends ILiData {
}

interface IBreadcrumbItemCtx extends b.IBobrilCtx {
    data: IBreadcrumbItemData;
}

export const breadcrumbItem = b.createDerivedComponent<IBreadcrumbItemData>(li, {
    id: 'bobrilstrap-breadcrumb-item',
    render(ctx: IBreadcrumbItemCtx, me: b.IBobrilNode) {
        b.style(me, !!ctx.data.active && breadcrumbStyles.active);
    }
});

export default breadcrumbItem;