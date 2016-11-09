import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const alerts = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Alerts',
                id: 'alerts',
                lead: [
                    `Provide contextual feedback messages for typical user actions with the handful of 
                    available and flexible alert messages.`
                ]
            },
            [
                example(),
                dismissableAlerts(),
                alertLinks()
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'alerts-examples' } }, 'Examples')),
        bs.p({}, [
            `Wrap any text and an optional dismiss button in `, bs.code({}, 'bs.alert'), ` and one of the four contexts (e.g. `,
            bs.code({}, 'bs.AlertContext.Success'), ` for basic alert messages.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-alerts-no-default' } }, [
            bs.h4({}, `No default style`),
            bs.p({}, [
                `Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, 
                so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.alert({ context: bs.AlertContext.Success }, [
                bs.strong({}, 'Well done!'), ' ', 'You successfully read this important alert message.'
            ]),
            bs.alert({ context: bs.AlertContext.Info }, [
                bs.strong({}, 'Heads up!!'), ' ', 'This alert needs your attention, but it\'s not super important.'
            ]),
            bs.alert({ context: bs.AlertContext.Warning }, [
                bs.strong({}, 'Warning!'), ' ', 'Better check yourself, you\'re not looking too good.'
            ]),
            bs.alert({ context: bs.AlertContext.Danger }, [
                bs.strong({}, 'Oh snap!'), ' ', 'Change a few things up and try submitting again.'
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.alert({ context: bs.AlertContext.Success }, ...)`, bs.e({ tag: 'br' }),
            `bs.alert({ context: bs.AlertContext.Info }, ...)`, bs.e({ tag: 'br' }),
            `bs.alert({ context: bs.AlertContext.Warning }, ...)`, bs.e({ tag: 'br' }),
            `bs.alert({ context: bs.AlertContext.Danger }, ...)`
        ])))
    ];
}

function dismissableAlerts(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'alerts-dismissible' } }, 'Dismissible alerts')),
        bs.p({}, [
            `Build on any alert by setting optional `, bs.code({}, 'dismissButton'),
            ` property. You can overrider the default cross with own `, bs.code({}, 'children'), ` of `, bs.code({}, 'dismissButton'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.alert(
                {
                    context: bs.AlertContext.Warning,
                    dismissButton: { aria: { label: 'Close' } },
                    onClosed: () => alert('Closed')
                },
                [bs.strong({}, 'Warning!'), ' ', 'Better check yourself, you\'re not looking too good.']
            ),
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.alert(`, bs.e({ tag: 'br' }),
            `    {`, bs.e({ tag: 'br' }),
            `        context: bs.AlertContext.Warning,`, bs.e({ tag: 'br' }),
            `        dismissButton: { aria: { label: 'Close' } },`, bs.e({ tag: 'br' }),
            `        onClosed: () => alert('Closed')`, bs.e({ tag: 'br' }),
            `    },`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function alertLinks(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'alerts-links' } }, 'Links in alerts')),
        bs.p({}, [
            `Use the `, bs.code({}, 'bs.alertStyles.alertLink'), `style to quickly provide matching colored links within any alert.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.alert({ context: bs.AlertContext.Success }, [
                bs.strong({}, 'Well done!'), ' ',
                'You successfully read this ',
                bs.a({ style: bs.alertStyles.alertLink, href: 'javascript:void(0)' }, 'important alert message.')
            ]),
            bs.alert({ context: bs.AlertContext.Info }, [
                bs.strong({}, 'Heads up!!'), ' ',
                'This ',
                bs.a({ style: bs.alertStyles.alertLink, href: 'javascript:void(0)' }, 'alert needs your attention'),
                ', but it\'s not super important.'
            ]),
            bs.alert({ context: bs.AlertContext.Warning }, [
                bs.strong({}, 'Warning!'), ' ',
                'Better check yourself, you\'re ',
                bs.a({ style: bs.alertStyles.alertLink, href: 'javascript:void(0)' }, 'not looking too good.')
            ]),
            bs.alert({ context: bs.AlertContext.Danger }, [
                bs.strong({}, 'Oh snap!'), ' ',
                bs.a({ style: bs.alertStyles.alertLink, href: 'javascript:void(0)' }, 'Change a few things up'),
                ' and try submitting again.'
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.alert({ context: bs.AlertContext.Warning }, [`, bs.e({ tag: 'br' }),
            `    bs.a({ style: bs.alertStyles.alertLink, href: '...' }, '...')`, bs.e({ tag: 'br' }),
            `]),`
        ])))
    ];
}