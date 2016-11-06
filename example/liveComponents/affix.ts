import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const affix = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Affix',
                id: 'affix',
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
            `The affix plugin toggles `, bs.code({}, 'position: fixed;'), ` on and off, emulating the effect found with `,
            bs.code({}, `position: sticky;`), `. The subnavigation on the right is a live demo of the affix plugin.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.affix({ top: 325, bottom: 260 }, ... )`
        ])))
    ];
}