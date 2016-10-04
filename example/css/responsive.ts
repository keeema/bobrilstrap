import * as b from 'bobril';
import { e, p, h2, h3, code, responsiveTable, small, Device, Display, visibleStyles, hiddenStyles, strong, row, col,
    Size, span, helpers } from '../../index';
import { styles } from '../bsexample/css';
import { section } from '../common/section';

export const responsive = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Responsive utilities',
                id: 'responsive-utilities',
                lead: `For faster mobile-friendly development, use these utility styles for showing and hiding content by device via 
                media query. Also included are utility styles for toggling content when printed.`,
                description: `Try to use these on a limited basis and avoid creating entirely different versions of the same site. 
                Instead, use them to complement each device's presentation.`
            },
            [
                availableStyles(),
                printStyles(),
                testCases()
            ]);
    }
});

function availableStyles(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'responsive-utilities-styles' } }, 'Available styles'),
        p({}, [
            `Use a single or combination of the available styles for toggling content across viewport breakpoints.`
        ]),
        responsiveTable({
            table: {
                bordered: true,
                striped: true,
                style: styles.responsiveUtilities,
                head: {
                    row: {
                        headers: [
                            {},
                            { children: [' Extra small devices ', small({}, 'Phones (<768px)')] },
                            { children: [' Small devices ', small({}, 'Tablets (≥768px)')] },
                            { children: [' Medium devices ', small({}, 'Desktops (≥992px)')] },
                            { children: [' Large devices ', small({}, 'Desktops (≥1200px)')] }
                        ]
                    }
                },
                body: {
                    rows: [
                        {
                            headers: [{ children: code({}, 'visibleStyles(Device.Xs)(...)') }],
                            columns: [
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Hidden', style: styles.isHidden }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'visibleStyles(Device.Sm)(...)') }],
                            columns: [
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Hidden', style: styles.isHidden }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'visibleStyles(Device.Md)(...)') }],
                            columns: [
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'visibleStyles(Device.Lg)(...)') }],
                            columns: [
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'hiddenStyles(Device.Xs)') }],
                            columns: [
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Visibile', style: styles.isVisible }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'hiddenStyles(Device.Sm)') }],
                            columns: [
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Visibile', style: styles.isVisible }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'hiddenStyles(Device.Md)') }],
                            columns: [
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'hiddenStyles(Device.Lg)') }],
                            columns: [
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden }
                            ]
                        }
                    ]
                }

            }
        }),
        responsiveTable({
            table: {
                bordered: true,
                striped: true,
                head: {
                    row: {
                        headers: [
                            'Group of classes',
                            { children: ['CSS ', code({}, 'display')] }
                        ]
                    }
                },
                body: {
                    rows: [
                        {
                            headers: [{ children: code({}, 'visibleStyles(...)(Display.Block)') }],
                            columns: [{ children: code({}, 'display: block;') }]
                        },
                        {
                            headers: [{ children: code({}, 'visibleStyles(...)(Display.Inline)') }],
                            columns: [{ children: code({}, 'display: block;') }]
                        },
                        {
                            headers: [{ children: code({}, 'visibleStyles(...)(Display.InlineBlock)') }],
                            columns: [{ children: code({}, 'display: inline-block;') }]
                        }
                    ]
                }
            }
        }),
        p({}, [
            `So, for extra small (xs) screens for example, the available `, code({}, 'visibleStyles(...)(...)'), ` styles are: `,
            code({}, 'visibleStyles(Device.Xs)(Display.Block)'), `, `, code({}, 'visibleStyles(Device.Xs)(Display.Inline)'), ` and `,
            code({}, 'visibleStyles(Device.Xs)(Display.InlineBlock)'), `.`
        ])

    ];
}

function printStyles(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'responsive-utilities-print' } }, 'Print styles'),
        p({}, [
            `Similar to the regular responsive styles, use these for toggling content for print.`
        ]),
        responsiveTable({
            table: {
                bordered: true,
                striped: true,
                style: styles.responsiveUtilities,
                head: {
                    row: {
                        headers: ['Styles', 'Browser', 'Print']
                    }
                },
                body: {
                    rows: [
                        {
                            headers: [{
                                children: [
                                    code({}, 'visibleStyles(Device.Print)(Display.Block)'), e({ tag: 'br' }),
                                    code({}, 'visibleStyles(Device.Print)(Display.Inline)'), e({ tag: 'br' }),
                                    code({}, 'visibleStyles(Device.Print)(Display.InlineBlock)')
                                ]
                            }],
                            columns: [
                                { children: 'Hidden', style: styles.isHidden },
                                { children: 'Visibile', style: styles.isVisible }
                            ]
                        },
                        {
                            headers: [{ children: code({}, 'hiddenStyles(Device.Print)') }],
                            columns: [
                                { children: 'Visibile', style: styles.isVisible },
                                { children: 'Hidden', style: styles.isHidden }
                                
                            ]
                        }
                    ]
                }

            }
        })
    ];
}

function testCases(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'responsive-utilities-tests' } }, 'Test cases'),
        p({}, [
            `Resize your browser or load on different devices to test the responsive utility styles.`
        ]),
        h3({ attrs: { id: 'visible-on' } }, 'Visible on...'),
        p({}, [`Green checkmarks indicate the element `, strong({}, 'is visible'), ` in your current viewport.`]),
        row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Xs) }, 'Extra small'),
                span({ style: visibleStyles(Device.Xs)(Display.Block) }, '✔ Visible on x-small')
            ]),
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Sm) }, 'Small'),
                span({ style: visibleStyles(Device.Sm)(Display.Block) }, '✔ Visible on small')
            ]),
            e({ style: [helpers.clearfix, visibleStyles(Device.Xs)(Display.Block)] }),
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Md) }, 'Medium'),
                span({ style: visibleStyles(Device.Md)(Display.Block) }, '✔ Visible on medium')
            ]),
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Lg) }, 'Large'),
                span({ style: visibleStyles(Device.Lg)(Display.Block) }, '✔ Visible on large')
            ])
        ]),
        row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Xs), hiddenStyles(Device.Sm)] }, 'Extra small and small'),
                span(
                    { style: [visibleStyles(Device.Xs)(Display.Block), visibleStyles(Device.Sm)(Display.Block)] },
                    '✔ Visible on x-small and small'
                )
            ]),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Md), hiddenStyles(Device.Lg)] }, 'Medium and large'),
                span(
                    { style: [visibleStyles(Device.Md)(Display.Block), visibleStyles(Device.Lg)(Display.Block)] },
                    '✔ Visible on medium and large'
                )
            ]),
            e({ style: [helpers.clearfix, visibleStyles(Device.Xs)(Display.Block)] }),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Xs), hiddenStyles(Device.Md)] }, 'Extra small and medium'),
                span(
                    { style: [visibleStyles(Device.Xs)(Display.Block), visibleStyles(Device.Md)(Display.Block)] },
                    '✔ Visible on x-small and medium'
                )
            ]),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Sm), hiddenStyles(Device.Lg)] }, 'Small and large'),
                span(
                    { style: [visibleStyles(Device.Sm)(Display.Block), visibleStyles(Device.Lg)(Display.Block)] },
                    '✔ Visible on small and large'
                )
            ]),
            e({ style: [helpers.clearfix, visibleStyles(Device.Xs)(Display.Block)] }),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Xs), hiddenStyles(Device.Lg)] }, 'Extra small and large'),
                span(
                    { style: [visibleStyles(Device.Xs)(Display.Block), visibleStyles(Device.Lg)(Display.Block)] },
                    '✔ Visible on x-small and large'
                )
            ]),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Sm), hiddenStyles(Device.Md)] }, 'Small and medium'),
                span(
                    { style: [visibleStyles(Device.Sm)(Display.Block), visibleStyles(Device.Md)(Display.Block)] },
                    '✔ Visible on small and medium'
                )
            ])
        ]),
        h3({ attrs: { id: 'hidden-on' } }, 'Hidden on...'),
        p({}, [`Here, green checkmarks also indicate the element `, strong({}, 'is hidden '), ` in your current viewport.`]),
        row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Xs) }, 'Extra small'),
                span({ style: visibleStyles(Device.Xs)(Display.Block) }, '✔ Hidden on x-small')
            ]),
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Sm) }, 'Small'),
                span({ style: visibleStyles(Device.Sm)(Display.Block) }, '✔ Hidden on small')
            ]),
            e({ style: [helpers.clearfix, visibleStyles(Device.Xs)(Display.Block)] }),
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Md) }, 'Medium'),
                span({ style: visibleStyles(Device.Md)(Display.Block) }, '✔ Hidden on medium')
            ]),
            col({ cols: [{ size: Size.Xs, span: 6 }, { size: Size.Sm, span: 3 }] }, [
                span({ style: hiddenStyles(Device.Lg) }, 'Large'),
                span({ style: visibleStyles(Device.Lg)(Display.Block) }, '✔ Hidden on large')
            ])
        ]),
        row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Xs), hiddenStyles(Device.Sm)] }, 'Extra small and small'),
                span(
                    { style: [visibleStyles(Device.Xs)(Display.Block), visibleStyles(Device.Sm)(Display.Block)] },
                    '✔ Hidden on x-small and small'
                )
            ]),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Md), hiddenStyles(Device.Lg)] }, 'Medium and large'),
                span(
                    { style: [visibleStyles(Device.Md)(Display.Block), visibleStyles(Device.Lg)(Display.Block)] },
                    '✔ Hidden on medium and large'
                )
            ]),
            e({ style: [helpers.clearfix, visibleStyles(Device.Xs)(Display.Block)] }),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Xs), hiddenStyles(Device.Md)] }, 'Extra small and medium'),
                span(
                    { style: [visibleStyles(Device.Xs)(Display.Block), visibleStyles(Device.Md)(Display.Block)] },
                    '✔ Hidden on x-small and medium'
                )
            ]),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Sm), hiddenStyles(Device.Lg)] }, 'Small and large'),
                span(
                    { style: [visibleStyles(Device.Sm)(Display.Block), visibleStyles(Device.Lg)(Display.Block)] },
                    '✔ Hidden on small and large'
                )
            ]),
            e({ style: [helpers.clearfix, visibleStyles(Device.Xs)(Display.Block)] }),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Xs), hiddenStyles(Device.Lg)] }, 'Extra small and large'),
                span(
                    { style: [visibleStyles(Device.Xs)(Display.Block), visibleStyles(Device.Lg)(Display.Block)] },
                    '✔ Hidden on x-small and large'
                )
            ]),
            col({ size: Size.Xs, span: 6 }, [
                span({ style: [hiddenStyles(Device.Sm), hiddenStyles(Device.Md)] }, 'Small and medium'),
                span(
                    { style: [visibleStyles(Device.Sm)(Display.Block), visibleStyles(Device.Md)(Display.Block)] },
                    '✔ Hidden on small and medium'
                )
            ])
        ])
    ];
}