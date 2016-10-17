import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const badges = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Badges',
                id: 'badges',
                lead: [`Easily highlight new or unread items by `, bs.code({}, 'bs.badge'), ` or to links, Bootstrap navs, and more.`]
            },
            [
                example()
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.e({ style: styles.bsExample }, [
            bs.a({ href: 'javascript: void(0)' }, ['Inbox', ' ', bs.badge({}, '42')]),
            bs.e({ tag: 'br' }),
            bs.e({ tag: 'br' }),
            bs.button({ option: bs.ButtonOption.Primary }, ['Messages', ' ', bs.badge({}, '4')])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.a({ href: '...' }, ['Inbox', ' ', bs.badge({}, '42')])`, bs.e({ tag: 'br' }),
            bs.e({ tag: 'br' }),
            `bs.button({ option: bs.ButtonOption.Primary }, ['Messages', ' ', bs.badge({}, '4')])`
        ]))),
        bs.h4({ id: 'self-collapsing' }, 'Self collapsing'),
        bs.p({}, [
            `When there are no new or unread items (children of `, bs.code({}, 'bs.badge({}, ...)'), ` are empty), 
            badges will simply collapse (via CSS's `, bs.code({}, ':empty'), ` selector) provided no content exists within.`
        ]),
        bs.h4({ id: 'adapts-to-active-nav-states' }, 'Adapts to active nav states'),
        bs.p({}, [`Built-in styles are included for placing badges in active states in pill navigations.`]),
        bs.e({ style: styles.bsExample }, [
            bs.pills({}, [
                bs.pill({ active: true }, bs.a({ href: 'javascript: void(0)' }, ['Home', ' ', bs.badge({}, '42')])),
                bs.pill({}, bs.a({ href: 'javascript: void(0)' }, 'Profile')),
                bs.pill({}, bs.a({ href: 'javascript: void(0)' }, ['Messages ', ' ', bs.badge({}, '3')]))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pills({}, [`, bs.e({ tag: 'br' }),
            `    bs.pill({ active: true }, bs.a({ href: '...' }, ['Home', ' ', bs.badge({}, '42')])),`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, 'Profile')),`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, ['Messages ', ' ', bs.badge({}, '3')]))`, bs.e({ tag: 'br' }),
            `])`
        ]))),
    ];
}
