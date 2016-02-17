import * as b from 'bobril';
import { container, element, p, h1 } from '../../index';
import { styles } from '../bsexample/css';

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
            element(
                { styles: styles.bsDocsHeader, attrs: { id: 'content', tabindex: -1 } },
                container({}, [
                    h1({}, ctx.data.header),
                    p({}, ctx.data.headerContent)
                ])
            )
        ];
    }
})