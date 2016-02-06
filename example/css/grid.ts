import * as b from 'bobril';
import { e, p, ul, li, code, figure, pre, span } from '../../index';
import { styles } from '../bsexample/css';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Grid',
                id: 'grid',
                lead: ``
            },
            [
                introduction(),

            ]);
    }
})

function introduction(): b.IBobrilChildren {
    return [
       
    ];
}
