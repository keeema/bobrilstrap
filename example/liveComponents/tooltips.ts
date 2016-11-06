import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const tooltips = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Tooltips',
                id: 'tooltips',
                lead: []
            },
            [
                example(),
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.p({}, [
            `Wrap nodes into `, bs.code({}, 'bs.tooltip'), ` to get additional information in tooltip. 
            You can define the `, bs.code({}, 'title'), `, `, bs.code({}, 'placement'), `, `, bs.code({}, 'trigger'),
            ` or turn `, bs.code({}, 'animation'), ` on/off by input data properties.`
        ]),
        bs.e({ style: [styles.bsExample, styles.tooltipDemo] }, [
            b.styledDiv(
                [
                    bs.tooltip(
                        { title: 'Tooltip on left', placement: bs.TooltipPlacement.Left },
                        bs.button({ label: 'Tooltip on left' })
                    ), ' ',
                    bs.tooltip(
                        { title: 'Tooltip on top', placement: bs.TooltipPlacement.Top },
                        bs.button({ label: 'Tooltip on top' })
                    ), ' ',
                    bs.tooltip(
                        { title: 'Tooltip on bottom', placement: bs.TooltipPlacement.Bottom },
                        bs.button({ label: 'Tooltip on bottom' })
                    ), ' ',
                    bs.tooltip(
                        { title: 'Tooltip on right', placement: bs.TooltipPlacement.Right, trigger: [bs.TooltipTrigger.Hover] },
                        bs.button({ label: 'Tooltip on right' })
                    )
                ],
                styles.bsExampleTooltips
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.tooltip(`, bs.e({ tag: 'br' }),
            `    { title: 'Tooltip on left', placement: bs.TooltipPlacement.Left },`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Tooltip on left' })`, bs.e({ tag: 'br' }),
            `), ' ',`, bs.e({ tag: 'br' }),
            `bs.tooltip(`, bs.e({ tag: 'br' }),
            `    { title: 'Tooltip on top', placement: bs.TooltipPlacement.Top },`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Tooltip on top' })`, bs.e({ tag: 'br' }),
            `), ' ',`, bs.e({ tag: 'br' }),
            `bs.tooltip(`, bs.e({ tag: 'br' }),
            `    { title: 'Tooltip on bottom', placement: bs.TooltipPlacement.Bottom },`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Tooltip on bottom' })`, bs.e({ tag: 'br' }),
            `), ' ',`, bs.e({ tag: 'br' }),
            `bs.tooltip(`, bs.e({ tag: 'br' }),
            `    { title: 'Tooltip on right', placement: bs.TooltipPlacement.Right, trigger: [bs.TooltipTrigger.Hover] },`,
            bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Tooltip on right' })`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}