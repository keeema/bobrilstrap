import * as b from 'bobril';
import header from '../common/header';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts)
        ];
    }
})

const texts = {
    header: 'Bobrilstrap',
    headerContent: `Bobril wrapper most popular HTML, CSS, and JS framework for developing responsive,
     mobile first projects on the web - Bootstrap.`
};