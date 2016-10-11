import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const labels = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Labels',
                id: 'labels',
                lead: []
            },
            [
                example(),
                availableVariations()
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.h2({ attrs: { id: 'labels-example' } }, 'Example'),
        bs.e({ style: styles.bsExample }, [
            bs.h1({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')]),
            bs.h2({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')]),
            bs.h3({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')]),
            bs.h4({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')]),
            bs.h5({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')]),
            bs.h6({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.h3({}, ['Example heading ', bs.span({ labelContext: bs.SpanLabelContext.Default }, 'New')])`
        ])))
    ];
}

function availableVariations(): b.IBobrilChildren {
    return [
        bs.h2({ attrs: { id: 'available-variations' } }, 'Available variations'),
        bs.p({}, [
            `Set the `, bs.code({}, 'labelContext'), ` input data property of `, bs.code({}, 'bs.span'),
            ` to change the appearance of a label.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.span({ labelContext: bs.SpanLabelContext.Default }, 'Default'), ' ',
            bs.span({ labelContext: bs.SpanLabelContext.Primary }, 'Primary'), ' ',
            bs.span({ labelContext: bs.SpanLabelContext.Success }, 'Success'), ' ',
            bs.span({ labelContext: bs.SpanLabelContext.Info }, 'Info'), ' ',
            bs.span({ labelContext: bs.SpanLabelContext.Warning }, 'Warning'), ' ',
            bs.span({ labelContext: bs.SpanLabelContext.Danger }, 'Danger')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.span({ labelContext: bs.SpanLabelContext.Default }, 'Default'), ' ',`, bs.e({ tag: 'br' }),
            `bs.span({ labelContext: bs.SpanLabelContext.Primary }, 'Primary'), ' ',`, bs.e({ tag: 'br' }),
            `bs.span({ labelContext: bs.SpanLabelContext.Success }, 'Success'), ' ',`, bs.e({ tag: 'br' }),
            `bs.span({ labelContext: bs.SpanLabelContext.Info }, 'Info'), ' ',`, bs.e({ tag: 'br' }),
            `bs.span({ labelContext: bs.SpanLabelContext.Warning }, 'Warning'), ' ',`, bs.e({ tag: 'br' }),
            `bs.span({ labelContext: bs.SpanLabelContext.Danger }, 'Danger')`
        ])))
    ];
}