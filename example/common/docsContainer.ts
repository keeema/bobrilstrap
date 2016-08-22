import * as b from 'bobril';
import { container, row, col, Size } from '../../index';
import { styles } from '../bsexample/css';

export const docsContainer =  b.createVirtualComponent({
    id: 'example-docs-container',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            container(
                { style: styles.bsDocsContainer },
                row({},
                    col({ size: Size.Md, span: 9, attrs: { role: 'main' } }, ctx.data.children)
                )
            )
        ];
    }
})