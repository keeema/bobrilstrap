import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const responsiveEmbed = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Responsive embed',
                id: 'responsive-embed',
                lead: []
            },
            [
                example()
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.p({}, [
            `Allow browsers to determine video or slideshow dimensions based on the width of their containing block by 
            creating an intrinsic ratio that will properly scale on any device.`
        ]),
        bs.p({}, [
            `Rules are directly applied to `, bs.code({}, 'bs.iframe'), `, `, bs.code({}, 'bs.embed'), `, `, bs.code({}, 'bs.video'),
            ` and `, bs.code({}, 'bs.object'), ` component nodes; optionally use an explicit descendant style `,
            bs.code({}, 'bs.embedResponsiveStyles.embedResponsiveItem'), ` (automatically set when `, bs.code({}, 'embedResponsive'),
            ` property is set to `, bs.code({}, 'true'), `) when you want to match the styling for other attributes.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.embedResponsive({ aspectRatio: bs.EmbedAspectRatio.SixteenByNine }, [
                bs.iframe({ embedResponsive: true, src: 'http://www.youtube.com/embed/zpOULjyy-n8?rel=0', attrs: { allowfullscreen: '' } })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.embedResponsive({ aspectRatio: bs.EmbedAspectRatio.SixteenByNine }, [`, bs.e({ tag: 'br' }),
            `    bs.iframe({ embedResponsive: true, src: ...' })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}