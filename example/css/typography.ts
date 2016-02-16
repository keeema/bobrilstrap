import * as b from 'bobril';
import { e, p, ul, li, code, figure, span, responsiveTable, th, td, tr, small, typography, row, col, Size } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Typography',
                id: 'type'
            },
            [
                headings()
            ]);
    }
})

function headings(): b.IBobrilChildren {
    return [
        e({ tag: 'h2', attrs: { id: 'type-headings' } }, 'Headings'),
        p({}, ``),
    ];
}
