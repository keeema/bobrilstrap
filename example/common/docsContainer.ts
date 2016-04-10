import * as b from 'bobril';
import { container, element, row, col, Size } from '../../index';
import { styles } from '../bsexample/css';

export default b.createVirtualComponent({
    id: 'example-docs-container',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            container(
                { style: styles.bsDocsContainer },
                row({},
                    col({ size: Size.Md, count: 9, attrs: { role: 'main' } }, ctx.data.children)
                )
            )
        ];
    }
})