import * as b from 'bobril';
import { e, p, ul, li, code, figure, pre, span } from '../../index';
import { styles } from '../bsexample/css';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
})

function typographyAndLinks(): b.IBobrilChildren {
    return [
        e({ tag: 'h2', attrs: { id: 'overview-type-links' } }, 'Typography and links'),
        p({}, `Bootstrap sets basic global display, typography, and link styles. Specifically, we:`),
        ul({}, [
            li({}, ['Set ', code({}, 'background-color: #fff;'), ' on the ', code({}, 'body')]),
            li({}, [
                'Use the ',
                code({}, '@font-family-base'),
                ', ',
                code({}, '@font-size-base'),
                ', and ',
                code({}, '@line-height-base'),
                ' attributes as our typographic base'
            ]),
            li({}, ['Set the global link color via ', code({}, '@link-color'), ' and apply link underlines only on ', code({}, ':hover')])
        ]),
        p({}, ['These styles can be found within .', code({}, 'scaffolding.less'), '.'])
    ];
}

function normalizeCss(): b.IBobrilChildren {
    return [
        e({ tag: 'h2', attrs: { id: 'overview-normalize' } }, 'Normalize.css'),
        p({}, [
            'For improved cross-browser rendering, we use ',
            e({ tag: 'a', attrs: { href: 'http://necolas.github.io/normalize.css/', target: '_blank' } }, 'Normalize.css'),
            ', a project by ',
            e({ tag: 'a', attrs: { href: 'https://twitter.com/necolas', target: '_blank' } }, 'Nicolas Gallagher'),
            ' and ',
            e({ tag: 'a', attrs: { href: 'https://twitter.com/jon_neal', target: '_blank' } }, 'Jonathan Neal.'),
        ])
    ];
}

function containers(): b.IBobrilChildren {
    return [
        e({ tag: 'h2', attrs: { id: 'overview-containers' } }, 'Containers'),
        p({}, [
            `Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two 
            containers to use in your projects. Note that, due to `,
            code({}, 'padding'),
            'and more, neither container is nestable.'
        ]),
        p({}, ['Use ', code({}, 'container({}, ...)'), ' for a responsive fixed width container.']),
        figure({ styles: styles.highlight }, pre({}, code({ styles: styles.languageJs }, [
            'container({}, [', e({ tag: 'br' }),
            '   ...', e({ tag: 'br' }),
            '])', e({ tag: 'br' }),
        ]))),
        p({}, [
            'Use ',
            code({}, 'container({ fluid: true }, ...)'),
            ' for a full width container, spanning the entire width of your viewport.'
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: styles.languageJs }, [
            'container({ fluid: true }, [', e({ tag: 'br' }),
            '   ...', e({ tag: 'br' }),
            '])', e({ tag: 'br' }),
        ])))
    ];
}