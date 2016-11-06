import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const modals = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Modals',
                id: 'modals',
                lead: []
            },
            [
                liveDemo(),
            ]);
    }
});

let liveDemoVisible = false;
function liveDemo(): b.IBobrilChildren {
    return [
        bs.p({}, [
            `Use `, bs.code({}, 'bs.modal'), ` to show content in modal window. It is separated to three parts - `,
            bs.code({}, 'header'), `, `, bs.code({}, 'body'), ` and `, bs.code({}, 'footer'), `. It has also usefull 
            input data properties for defining the look like `, bs.code({}, 'size'), ` etc. or callbacks like `,
            bs.code({}, 'onHide'), ` to handle the close.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.button({ label: ' Launch demo modal ', onClick: () => { liveDemoVisible = true; b.invalidate(); } }),
            bs.modal({
                visible: liveDemoVisible,
                animation: true,
                size: bs.ModalSize.Sm,
                header: [
                    bs.button(
                        {
                            option: bs.ButtonOption.Close,
                            aria: { label: 'Close' },
                            onClick: () => { liveDemoVisible = false; b.invalidate(); }
                        },
                        bs.span({ aria: { hidden: true } }, '×')
                    ),
                    bs.modalTitle4({}, 'Modal title')
                ],
                body: 'One fine body…',
                footer: bs.button({ label: 'Close', onClick: () => { liveDemoVisible = false; b.invalidate(); } })
            })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `let liveDemoVisible = false; // On some not-rendered place`, bs.e({ tag: 'br' }),
            ``, bs.e({ tag: 'br' }),
            `// On some rendered place`, bs.e({ tag: 'br' }),
            `bs.button({ label: ' Launch demo modal ', onClick: () => { liveDemoVisible = true; b.invalidate(); } }),`, bs.e({ tag: 'br' }),
            `bs.modal({`, bs.e({ tag: 'br' }),
            `    visible: liveDemoVisible,`, bs.e({ tag: 'br' }),
            `    animation: true,`, bs.e({ tag: 'br' }),
            `    size: bs.ModalSize.Sm,`, bs.e({ tag: 'br' }),
            `    header: [`, bs.e({ tag: 'br' }),
            `        bs.button(`, bs.e({ tag: 'br' }),
            `            {`, bs.e({ tag: 'br' }),
            `                option: bs.ButtonOption.Close,`, bs.e({ tag: 'br' }),
            `                aria: { label: 'Close' },`, bs.e({ tag: 'br' }),
            `                onClick: () => { liveDemoVisible = false; b.invalidate(); }`, bs.e({ tag: 'br' }),
            `            },`, bs.e({ tag: 'br' }),
            `            bs.span({ aria: { hidden: true } }, '×')`, bs.e({ tag: 'br' }),
            `        ),`, bs.e({ tag: 'br' }),
            `        bs.modalTitle4({}, 'Modal title')`, bs.e({ tag: 'br' }),
            `    ],`, bs.e({ tag: 'br' }),
            `    body: 'One fine body…',`, bs.e({ tag: 'br' }),
            `    footer: bs.button({ label: 'Close', onClick: () => { liveDemoVisible = false; b.invalidate(); } })`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}