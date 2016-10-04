import * as b from 'bobril';
import { e, p, ul, li, code, figure, a, Target, h2 } from '../../index';
import { pre,  langJs } from '../prettify/pre';
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
        h2({ attrs: { id: 'overview-type-links' } }, 'Typography and links'),
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
        ])
    ];
}

function normalizeCss(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'overview-normalize' } }, 'Normalize.css'),
        p({}, [
            'For improved cross-browser rendering, bootstrap uses ',
            a({ href: 'http://necolas.github.io/normalize.css/', target: Target.Blank } , 'Normalize.css'),
            ', a project by ',
            a({  href: 'https://twitter.com/necolas', target: Target.Blank }, 'Nicolas Gallagher'),
            ' and ',
            a({  href: 'https://twitter.com/jon_neal', target: Target.Blank }, 'Jonathan Neal.')
        ])
    ];
}

function containers(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'overview-containers' } }, 'Containers'),
        p({}, [
            `Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two 
            containers to use in your projects. Note that, due to `,
            code({}, 'padding'),
            'and more, neither container is nestable.'
        ]),
        p({}, ['Use ', code({}, 'container({}, ...)'), ' for a responsive fixed width container.']),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            'container({}, [', e({ tag: 'br' }),
            '   ...', e({ tag: 'br' }),
            '])'
        ]))),
        p({}, [
            'Use ',
            code({}, 'container({ fluid: true }, ...)'),
            ' for a full width container, spanning the entire width of your viewport.'
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            'container({ fluid: true }, [', e({ tag: 'br' }),
            '   ...', e({ tag: 'br' }),
            '])', e({ tag: 'br' })
        ])))
    ];
}