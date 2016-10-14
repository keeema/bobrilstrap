import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const pageHeader = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Page header',
                id: 'page-header',
                lead: []
            },
            [
                example()
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.p({}, `A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.`),
        bs.e({ style: styles.bsExample }, [
            bs.pageHeader({}, bs.h1({}, ['Example page header', ' ', bs.small({}, 'Subtext for header')]))
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pageHeader({}, bs.h1({}, ['Example page header', ' ', bs.small({}, 'Subtext for header')]))`
        ])))
    ];
}
