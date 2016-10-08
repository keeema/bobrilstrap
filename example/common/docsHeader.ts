import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';

interface IData {
    header: string;
    headerContent: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export const header = b.createVirtualComponent<IData>({
    id: 'example-header',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [            
            bs.element(
                { style: styles.bsDocsHeader, attrs: { id: 'content', tabindex: -1 } },
                bs.container({}, [
                    bs.h1({}, ctx.data.header),
                    bs.p({}, ctx.data.headerContent)
                ])
            )
        ];
    }
});