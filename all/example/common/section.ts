import * as b from 'bobril';
import container from 'bobrilstrap-container';
import elem from 'bobrilstrap-element';
import {styles} from '../styles/css';

interface IData {
    header: string;
    headerContent: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createVirtualComponent<IData>({
    id: 'example-header',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            elem(
                { styles: styles.bsDocsHeader, attrs: { id: 'content', tabindex: -1 } },
                container({}, [
                    elem({ tag: 'h1' }, ctx.data.header),
                    elem({ tag: 'p' }, ctx.data.headerContent)
                ])
            )
        ];
    }
})