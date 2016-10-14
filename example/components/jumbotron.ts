import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const jumbotron = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Jumbotron',
                id: 'jumbotron',
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
            bs.jumbotron({}, [
                bs.h1({}, 'Hello, world!'),
                bs.p({}, 'This is a simple hero unit, a simple jumbotron-style component for '
                    + 'calling extra attention to featured content or information.'),
                bs.p({}, bs.button({ label: 'Learn more', tag: bs.ButtonTag.A, size: bs.Size.Lg, option: bs.ButtonOption.Primary }))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.jumbotron({}, [`, bs.e({ tag: 'br' }),
            `    bs.h1({}, 'Hello, world!'),`, bs.e({ tag: 'br' }),
            `    bs.p({}, '...')`, bs.e({ tag: 'br' }),
            `    bs.p({}, bs.button({ label: 'Learn more', tag: bs.ButtonTag.A, size: bs.Size.Lg, option: bs.ButtonOption.Primary }))`,
            bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.p({}, [
            `To make the jumbotron full width, and without rounded corners, place it outside all `, bs.code({}, 'bs.container'),
            `s and instead add a `, bs.code({}, 'bs.container'), ` within.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.jumbotron({}, [`, bs.e({ tag: 'br' }),
            `    bs.container({}, [`, bs.e({ tag: 'br' }),
            `        ...`, bs.e({ tag: 'br' }),
            `    ])`,
            bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
