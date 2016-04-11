import * as b from 'bobril';
import { a, e, p, h2, h3, code, figure, GlyphIcon, glyphicon, ul, li, span } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Glyphicons',
                id: 'glyphicons'
            },
            [
                availableGlyphs(),
            ]);
    }
})

function availableGlyphs(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'glyphicons-glyphs' } }, 'Available glyphs'),
        p({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `, a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` whenever possible.`
        ]),
        e({ style: styles.bsGlyphicons }, ul({ style: styles.bsGlyphiconsList }, Object.keys(GlyphIcon)
            .filter(key => !isNaN(parseInt(key, 10)))
            .map(key => parseInt(key, 10))
            .map(key => li({}, [
                glyphicon({ icon: key }),
                span({ style: styles.glyphiconClass }, `glyphicon({ icon: GlyphIcon.${GlyphIcon[key]} })`)
            ]))
        ))
    ];
}