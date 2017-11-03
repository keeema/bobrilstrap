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
        b.anchor(bs.H2({ attrs: { id: 'overview-type-links' } }, 'Typography and links')),
        bs.P({}, `Bootstrap sets basic global display, typography, and link styles. Specifically, we:`),
        bs.Ul({}, [
            bs.Li({}, ['Set ', bs.Code({}, 'background-color: #fff;'), ' on the ', bs.Code({}, 'body')]),
            bs.Li({}, [
                'Use the ',
                bs.Code({}, '@font-family-base'),
                ', ',
                bs.Code({}, '@font-size-base'),
                ', and ',
                bs.Code({}, '@line-height-base'),
                ' attributes as our typographic base'
            ]),
            bs.Li({}, [
                'Set the global link color via ', bs.Code({}, '@link-color'), ' and apply link underlines only on ',
                bs.Code({}, ':hover')
            ])
        ])
    ];
}

function normalizeCss(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: 'overview-normalize' } }, 'Normalize.css')),
        bs.P({}, [
            'For improved cross-browser rendering, bootstrap uses ',
            bs.A({ href: 'http://necolas.github.io/normalize.css/', target: bs.Target.Blank }, 'Normalize.css'),
            ', a project by ',
            bs.A({ href: 'https://twitter.com/necolas', target: bs.Target.Blank }, 'Nicolas Gallagher'),
            ' and ',
            bs.A({ href: 'https://twitter.com/jon_neal', target: bs.Target.Blank }, 'Jonathan Neal.')
        ])
    ];
}

function containers(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: 'overview-containers' } }, 'Containers')),
        bs.P({}, [
            `Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two 
            containers to use in your projects. Note that, due to `,
            bs.Code({}, 'padding'),
            'and more, neither container is nestable.'
        ]),
        bs.P({}, ['Use ', bs.Code({}, 'bs.Container({}, ...)'), ' for a responsive fixed width container.']),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [
            'bs.Container({}, [', bs.E({ tag: 'br' }),
            '   ...', bs.E({ tag: 'br' }),
            '])'
        ]))),
        bs.P({}, [
            'Use ',
            bs.Code({}, 'bs.Container({ fluid: true }, ...)'),
            ' for a full width container, spanning the entire width of your viewport.'
        ]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [
            'bs.Container({ fluid: true }, [', bs.E({ tag: 'br' }),
            '   ...', bs.E({ tag: 'br' }),
            '])', bs.E({ tag: 'br' })
        ])))
    ];
}