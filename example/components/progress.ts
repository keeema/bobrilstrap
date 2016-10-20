import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const progress = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Progress bars',
                id: 'progress',
                lead: [`Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.`]
            },
            [
                info(),
                example(),
                withLabel(),
                contextualAlternatives(),
                striped(),
                animated(),
                stacked()
            ]);
    }
});

function info() {
    return [
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-progress-animation-css3' } }, [
            bs.h4({}, [`Cross-browser compatibility`]),
            bs.p({}, [
                `Progress bars use CSS3 transitions and animations to achieve some of their effects. These features are not supported 
                in Internet Explorer 9 and below or older versions of Firefox. Opera 12 does not support animations.`
            ])
        ])
    ];
}

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'progress-basic' } }, 'Basic example')),
        bs.p({}, [
            `Default progress bar. You can compose it from separate components.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({}, [
                bs.progressBar({
                    value: 60, srOnlyText: '60% Complete', aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 60, srOnlyText: '60% Complete', aria: { volumenow: 60, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.p({}, [
            `Or you can use the prepared input data property `, bs.code({}, 'bars'), ` filled with  `,
            bs.code({}, 'bs.IProgressBarData[]'), `. The result is same.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({
                bars: [
                    { value: 60, srOnlyText: '60% Complete', aria: { valuenow: 60, valuemax: 0, valuemin: 100 } }
                ]
            })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({`, bs.e({ tag: 'br' }),
            `    bars: [`, bs.e({ tag: 'br' }),
            `        { value: 60, srOnlyText: '60% Complete', aria: { volumenow: 60, volumemax: 0, volumemin: 100 } }`, bs.e({ tag: 'br' }),
            `    ]`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function withLabel(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'progress-label' } }, 'With label')),
        bs.p({}, [
            `Use children instead of `, bs.code({}, 'srOnlyText'), `to show a visible percentage.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({}, [
                bs.progressBar({ value: 60, aria: { valuenow: 60, valuemax: 0, valuemin: 100 } }, '60%')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({ value: 60, aria: { volumenow: 60, volumemax: 0, volumemin: 100 } }, '60%')`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.p({}, [
            `To ensure that the label text remains legible even for low percentages, consider setting a `, bs.code({}, 'minwidth'),
            ` input data property.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({}, [
                bs.progressBar(
                    { value: 0, aria: { valuenow: 60, valuemax: 0, valuemin: 100 }, minWidth: '2em' }, '0%')
            ]),
            bs.progress({}, [
                bs.progressBar(
                    { value: 2, aria: { valuenow: 60, valuemax: 0, valuemin: 100 }, minWidth: '2em' }, '2%')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `     bs.progressBar(`, bs.e({ tag: 'br' }),
            `         { value: 0, aria: { volumenow: 60, volumemax: 0, volumemin: 100 }, minWidth: '2em' }, '0%')`,
            bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `     bs.progressBar(`, bs.e({ tag: 'br' }),
            `         { value: 2, aria: { volumenow: 60, volumemax: 0, volumemin: 100 }, minWidth: '2em' }, '2%')`,
            bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function contextualAlternatives(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'progress-alternatives' } }, 'Contextual alternatives')),
        bs.p({}, [
            `Progress bars use some of the same button and alert classes for consistent styles.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({}, [
                bs.progressBar({
                    value: 40,
                    srOnlyText: '40% Complete (success)',
                    context: bs.ProgressBarContext.Success,
                    aria: { valuenow: 40, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.progress({}, [
                bs.progressBar({
                    value: 20,
                    srOnlyText: '20% Complete',
                    context: bs.ProgressBarContext.Info,
                    aria: { valuenow: 20, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.progress({}, [
                bs.progressBar({
                    value: 60,
                    srOnlyText: '60% Complete (warning)',
                    context: bs.ProgressBarContext.Warning,
                    aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.progress({}, [
                bs.progressBar({
                    value: 80,
                    srOnlyText: '80% Complete (danger)',
                    context: bs.ProgressBarContext.Danger,
                    aria: { valuenow: 80, valuemax: 0, valuemin: 100 }
                })
            ]),
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 40,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '40% Complete (success)',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Success,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 40, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 20,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '20% Complete',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Info,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 20, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 60,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '60% Complete (warning)',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Warning,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 60, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 80,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '80% Complete (danger)',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Danger,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 80, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' }),
        ])))
    ];
}

function striped(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'progress-striped' } }, 'Striped')),
        bs.p({}, [
            `Uses a gradient to create a striped effect. Not available in IE9 and below.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({}, [
                bs.progressBar({
                    value: 40,
                    striped: true,
                    srOnlyText: '40% Complete (success)',
                    context: bs.ProgressBarContext.Success,
                    aria: { valuenow: 40, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.progress({}, [
                bs.progressBar({
                    value: 20,
                    striped: true,
                    srOnlyText: '20% Complete',
                    context: bs.ProgressBarContext.Info,
                    aria: { valuenow: 20, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.progress({}, [
                bs.progressBar({
                    value: 60,
                    striped: true,
                    srOnlyText: '60% Complete (warning)',
                    context: bs.ProgressBarContext.Warning,
                    aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.progress({}, [
                bs.progressBar({
                    value: 80,
                    striped: true,
                    srOnlyText: '80% Complete (danger)',
                    context: bs.ProgressBarContext.Danger,
                    aria: { valuenow: 80, valuemax: 0, valuemin: 100 }
                })
            ]),
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 40,`, bs.e({ tag: 'br' }),
            `        striped: true,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '40% Complete (success)',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Success,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 40, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 20,`, bs.e({ tag: 'br' }),
            `        striped: true,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '20% Complete',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Info,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 20, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 60,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '60% Complete (warning)',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Warning,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 60, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 80,`, bs.e({ tag: 'br' }),
            `        striped: true,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '80% Complete (danger)',`, bs.e({ tag: 'br' }),
            `        context: bs.ProgressBarContext.Danger,`, bs.e({ tag: 'br' }),
            `        aria: { volumenow: 80, volumemax: 0, volumemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' }),
        ])))
    ];
}

let animation = false;
function animated(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'progress-animated' } }, 'Animated')),
        bs.p({}, [
            `Set `, bs.code({}, 'active'), ` and `, bs.code({}, 'striped'),
            ` input data properties to to animate the stripes right to left. Not available in IE9 and below.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({}, [
                bs.progressBar({
                    value: 45,
                    striped: true,
                    active: animation,
                    srOnlyText: '45% Complete',
                    aria: { valuenow: 45, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.button({
                label: 'Toggle animation',
                style: styles.bsDocsActivateAnimatedProgressbar,
                onClick: () => { animation = !animation; b.invalidate(); }
            })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({}, [`, bs.e({ tag: 'br' }),
            `    bs.progressBar({`, bs.e({ tag: 'br' }),
            `        value: 45,`, bs.e({ tag: 'br' }),
            `        striped: true,`, bs.e({ tag: 'br' }),
            `        active: true,`, bs.e({ tag: 'br' }),
            `        srOnlyText: '45% Complete',`, bs.e({ tag: 'br' }),
            `        aria: { valuenow: 45, valuemax: 0, valuemin: 100 }`, bs.e({ tag: 'br' }),
            `    })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function stacked(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'progress-stacked' } }, 'Stacked')),
        bs.p({}, [
            `Place multiple bars into the same `, bs.code({}, 'bs.progress'), ` to stack them.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.progress({
                bars: [
                    { value: 35, srOnlyText: '35% Complete (success)', context: bs.ProgressBarContext.Success },
                    { value: 20, srOnlyText: '20% Complete (warning)', context: bs.ProgressBarContext.Warning },
                    { value: 10, srOnlyText: '10% Complete (danger)', context: bs.ProgressBarContext.Danger }
                ]
            })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.progress({`, bs.e({ tag: 'br' }),
            `    bars: [`, bs.e({ tag: 'br' }),
            `        { value: 35, srOnlyText: '35% Complete (success)', context: bs.ProgressBarContext.Success },`, bs.e({ tag: 'br' }),
            `        { value: 20, srOnlyText: '20% Complete (warning)', context: bs.ProgressBarContext.Warning },`, bs.e({ tag: 'br' }),
            `        { value: 10, srOnlyText: '10% Complete (danger)', context: bs.ProgressBarContext.Danger }`, bs.e({ tag: 'br' }),
            `    ]`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}
