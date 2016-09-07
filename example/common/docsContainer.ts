import * as b from 'bobril';
import { row, col, Size } from '../../index';
import { styles } from '../bsexample/css';
import { persistentScrollContainer } from './persistentScrollContainer';

export interface IDocsContainerData {
    children?: b.IBobrilChildren;
    id: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IDocsContainerData;
}

export const docsContainer = b.createVirtualComponent<IDocsContainerData>({
    id: 'example-docs-container',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            persistentScrollContainer(
                {
                    id: ctx.data.id,
                    style: styles.bsDocsContainer
                },
                row({},
                    col({ size: Size.Md, span: 9, attrs: { role: 'main' } }, ctx.data.children)
                )
            )
        ];
    }
});