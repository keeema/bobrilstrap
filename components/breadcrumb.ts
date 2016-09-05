import * as b from 'bobril';
import { ol, IOlData } from './ol';

export interface IBreadcrumbData extends IOlData {
}

interface IBreadcrumbCtx extends b.IBobrilCtx {
    data: IBreadcrumbData;
}

export const breadcrumbStyles = {
    breadcrumb: b.styleDef('breadcrumb'),
    active: b.styleDef('active')
};

export const breadcrumb = b.createDerivedComponent<IBreadcrumbData>(ol, {
    id: 'bobrilstrap-breadcrumb',
    render(ctx: IBreadcrumbCtx, me: b.IBobrilNode) {
        b.style(me, breadcrumbStyles.breadcrumb);
    }
});

export default breadcrumb;