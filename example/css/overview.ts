import * as b from 'bobril';
import * as bs from '../../index';
import { pre, langJs } from '../prettify/pre';
import { styles } from '../bsexample/css';
import { section } from '../common/section';

export const overview = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Overview',
                id: 'overview',
                lead: `Get the lowdown on the key pieces of Bobrilstrap's and Bootstrap's infrastructure,
                 including our approach to better, faster, stronger web development.`
            },
            [
                typographyAndLinks(),
                normalizeCss(),
                containers()
            ]);
    }
});

function typographyAndLinks(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'overview-type-links' } }, 'Typography and links')),
        bs.p({}, `Bootstrap sets basic global display, typography, and link styles. Specifically, we:`),
        bs.ul({}, [
            bs.li({}, ['Set ', bs.code({}, 'background-color: #fff;'), ' on the ', bs.code({}, 'body')]),
            bs.li({}, [
                'Use the ',
                bs.code({}, '@font-family-base'),
                ', ',
                bs.code({}, '@font-size-base'),
                ', and ',
                bs.code({}, '@line-height-base'),
                ' attributes as our typographic base'
            ]),
            bs.li({}, [
                'Set the global link color via ', bs.code({}, '@link-color'), ' and apply link underlines only on ',
                bs.code({}, ':hover')
            ])
        ])
    ];
}

function normalizeCss(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'overview-normalize' } }, 'Normalize.css')),
        bs.p({}, [
            'For improved cross-browser rendering, bootstrap uses ',
            bs.a({ href: 'http://necolas.github.io/normalize.css/', target: bs.Target.Blank }, 'Normalize.css'),
            ', a project by ',
            bs.a({ href: 'https://twitter.com/necolas', target: bs.Target.Blank }, 'Nicolas Gallagher'),
            ' and ',
            bs.a({ href: 'https://twitter.com/jon_neal', target: bs.Target.Blank }, 'Jonathan Neal.')
        ])
    ];
}

function containers(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'overview-containers' } }, 'Containers')),
        bs.p({}, [
            `Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two 
            containers to use in your projects. Note that, due to `,
            bs.code({}, 'padding'),
            'and more, neither container is nestable.'
        ]),
        bs.p({}, ['Use ', bs.code({}, 'bs.container({}, ...)'), ' for a responsive fixed width container.']),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            'bs.container({}, [', bs.e({ tag: 'br' }),
            '   ...', bs.e({ tag: 'br' }),
            '])'
        ]))),
        bs.p({}, [
            'Use ',
            bs.code({}, 'bs.container({ fluid: true }, ...)'),
            ' for a full width container, spanning the entire width of your viewport.'
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            'bs.container({ fluid: true }, [', bs.e({ tag: 'br' }),
            '   ...', bs.e({ tag: 'br' }),
            '])', bs.e({ tag: 'br' })
        ])))
    ];
}