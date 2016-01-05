import * as b from 'bobril';
import container from 'bobrilstrap-container';
import tag from 'bobrilstrap-tag';
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
            tag({ styles: styles.bsDocsHeader, attrs: { id: 'content', tabindex: -1 } },
                container({}, [
                    tag({ tag: 'h1' }, ctx.data.header),
                    tag({ tag: 'p' }, ctx.data.headerContent)
                ])
            )
        ];
    }
})