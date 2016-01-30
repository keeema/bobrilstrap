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
    header: 'Components',
    headerContent: `Over a dozen reusable components built to provide iconography, dropdowns,
     input groups, navigation, alerts, and much more.`
};