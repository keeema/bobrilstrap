import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const breadcrumbs = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Breadcrumbs',
                id: 'breadcrumbs',
                lead: [`Indicate the current page's location within a navigational hierarchy.`]
            },
            [
                info()
            ]);
    }
});

function info(): b.IBobrilChildren {
    return [
        bs.p({}, [
            `Separators are automatically added in CSS through `, bs.code({}, ':before'), ` and `, bs.code({}, 'content'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.breadcrumb({}, bs.breadcrumbItem({ active: true }, 'Home')),
            bs.breadcrumb({}, [
                bs.breadcrumbItem({}, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.breadcrumbItem({ active: true }, 'Library')
            ]),
            bs.breadcrumb({}, [
                bs.breadcrumbItem({}, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.breadcrumbItem({}, bs.a({ href: 'javascript:void(0)' }, 'Library')),
                bs.breadcrumbItem({ active: true }, 'Data')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.breadcrumb({}, [`, bs.e({ tag: 'br' }),
            `    bs.breadcrumbItem({}, bs.a({ href: '...' }, 'Home')),`, bs.e({ tag: 'br' }),
            `    bs.breadcrumbItem({}, bs.a({ href: '...' }, 'Library')),`, bs.e({ tag: 'br' }),
            `    bs.breadcrumbItem({ active: true }, 'Data')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}