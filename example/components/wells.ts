import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const wells = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Wells',
                id: 'wells',
                lead: []
            },
            [
                defaultWell(),
                optionalStyles()
            ]);
    }
});

function defaultWell(): b.IBobrilChildren {
    return [
        bs.h2({ attrs: { id: 'default-well' } }, 'Default well'),
        bs.p({}, [
            `Use the well as a simple effect on an element to give it an inset effect.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-alerts-no-default' } }, [
            bs.well({}, 'Look, I\'m in a well!')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.well({}, 'Look, I\\'m in a well!')`
        ])))
    ];
}

function optionalStyles(): b.IBobrilChildren {
    return [
        bs.h2({ attrs: { id: 'optional-styles' } }, 'Optional classes'),
        bs.p({}, [
            `Control padding and rounded corners with two optional modifier classes.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.well({ size: bs.WellSize.Lg }, 'Look, I\'m in a large well!')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            ` bs.well({ size: bs.WellSize.Lg }, 'Look, I\\'m in a large well!')`
        ]))),
        bs.e({ style: styles.bsExample }, [
            bs.well({ size: bs.WellSize.Sm }, 'Look, I\'m in a small well!')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            ` bs.well({ size: bs.WellSize.Sm }, 'Look, I\\'m in a small well!')`
        ])))
    ];
}