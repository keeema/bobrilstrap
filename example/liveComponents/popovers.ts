import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const popovers = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Popover',
                id: 'popover',
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
            `Wrap nodes into `, bs.code({}, 'bs.popover'), ` to get additional information in popover. 
            You can define the `, bs.code({}, 'title'), `, `, bs.code({}, 'title'), `, `, bs.code({}, 'placement'),
            `, `, bs.code({}, 'trigger'), ` or turn `, bs.code({}, 'animation'),
            ` on/off by input data properties. If the title or content are not static, they should be defined as a function.`
        ]),
        bs.e({ style: [styles.bsExample, styles.tooltipDemo] }, [
            b.styledDiv(
                [
                    bs.popover(
                        {
                            title: 'Popover title',
                            content: 'And here\'s some amazing content. It\'s very engaging. Right?',
                            placement: bs.PopoverPlacement.Right
                        },
                        bs.button({ label: 'Click to toggle popover' })
                    )
                ],
                styles.bsExampleTooltips
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.popover(`, bs.e({ tag: 'br' }),
            `    {`, bs.e({ tag: 'br' }),
            `        title: 'Popover title',`, bs.e({ tag: 'br' }),
            `        content: 'And here\\'s some amazing content. It\\'s very engaging. Right?',`, bs.e({ tag: 'br' }),
            `        placement: bs.PopoverPlacement.Left`, bs.e({ tag: 'br' }),
            `   },`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Click to toggle popover' })`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}