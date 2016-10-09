import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { ul, IUlData } from './ul';
import { createDictionary } from './bobrilHelpers';

export interface IPaginationData extends IBaseData {
    ul?: IUlData;
    size?: PaginationSize;
}

interface IPaginationCtx extends b.IBobrilCtx {
    data: IPaginationData;
}

export const paginationStyles = {
    pagination: b.styleDef('pagination'),
    lg: b.styleDef('pagination-lg'),
    sm: b.styleDef('pagination-sm')
};

export enum PaginationSize {
    Md,
    Lg,
    Sm
}

export const paginationSizeStyles = createDictionary<PaginationSize, b.IBobrilStyle>();
paginationSizeStyles(PaginationSize.Lg, paginationStyles.lg);
paginationSizeStyles(PaginationSize.Sm, paginationStyles.sm);

export const pagination = b.createDerivedComponent<IPaginationData>(elem, {
    id: 'bobrilstrap-pagination',
    render(ctx: IPaginationCtx, me: b.IBobrilNode) {
        me.tag = 'nav';
        me.children = b.style(
            ul(ctx.data.ul || {}, ctx.data.children),
            paginationStyles.pagination,
            !!ctx.data.size && paginationSizeStyles(ctx.data.size)
        );
    }
});

export default pagination;