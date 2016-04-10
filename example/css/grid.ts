import * as b from 'bobril';
import { e, p, ul, li, code, figure, span, responsiveTable, th, td, tr, small, typography, row, col, Size, h1, h2 } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Grid',
                id: 'grid',
                lead: `Bootstrap in Bobrilstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 
                columns as the device or viewport size increases. It includes predefined classes for easy layout options, 
                as well as powerful mixins for generating more semantic layouts.`
            },
            [
                introduction(),
                gridOptions(),
                exampleStackHorizontal(),
                exampleFluidContainer(),
                exampleMobileAndDesktop(),
                exampleMobileTabletAndDesktop(),
                exampleColumnWrapping(),
                offsettingColumns(),
                nestingColumns(),
                columnOrdering()
            ]);
    }
})

function introduction(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-intro' } }, 'Introduction'),
        p({}, `Grid systems are used for creating page layouts through a series of rows 
        and columns that house your content. Here's how the Bootstrap grid system works:`),
        ul({}, [
            li({}, [
                'Rows must be placed within a ',
                code({}, 'container({}, ...)'), ' (fixed-width) or ',
                code({}, 'container({ fluid: true }, ...)'), '(full-width) for proper alignment and padding']),
            li({}, 'Use rows to create horizontal groups of columns.'),
            li({}, 'Content should be placed within columns, and only columns may be immediate children of rows.'),
            li({}, [
                'Predefined grid components like ', code({}, 'row({}, ...)'), ' and ', code({}, 'col({ size: Size.Xs, count: 4 }, ...)'),
                ' are available for quickly making grid layouts.'
            ]),
            li({}, [
                'Columns create gutters (gaps between column content) via ', code({}, 'padding'),
                '. That padding is offset in rows for the first and last column via negative margin on ', code({}, 'row({}, ...)')
            ]),
            li({}, `The negative margin is why the examples below are outdented. It's so that content within grid columns is lined 
            up with non-grid content.`),
            li({}, [
                'Grid columns are created by specifying the number of twelve available columns you wish to span. ',
                'For example, three equal columns would use three',
                code({}, 'col({ size: Size.Xs, count: 4 }, ...)')
            ]),
            li({}, `If more than 12 columns are placed within a single row, 
            each group of extra columns will, as one unit, wrap onto a new line.`),
            li({}, [
                'Grid components apply to devices with screen widths greater than or equal to the breakpoint sizes, ',
                'and override grid classes targeted at smaller devices. Therefore, e.g. applying any ',
                code({}, 'col({ size: Size.Md, count: ... }, ...)'),
                'component will not only affect its styling on medium devices but also on large devices if it is not defined as ',
                code({}, 'col({ cols: [{ size: Size.Md, count: ... }, { size: Size.Lg, count: ... }] }, ...)'), '.',
            ])
        ]),
        p({}, 'Look to the examples for applying these principles to your code.')
    ];
}

function gridOptions(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-options' } }, 'Grid options'),
        p({}, `See how aspects of the Bootstrap grid system work across multiple devices with a handy table.`),
        responsiveTable({
            table: {
                bordered: true,
                striped: true,
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
                            headers: [{ children: 'Grid behavior', style: typography.textNowrap }],
                            columns: [
                                { children: 'Horizontal at all times' },
                                { children: 'Collapsed to start, horizontal above breakpoints', colspan: 3 }
                            ]
                        },
                        {
                            headers: [{ children: 'Container width', style: typography.textNowrap }],
                            columns: [
                                { children: 'None (auto)' },
                                { children: '750px' },
                                { children: '970px' },
                                { children: '1170px' },
                            ]
                        },
                        {
                            headers: [{ children: 'Component data', style: typography.textNowrap }],
                            columns: [
                                { children: code({}, '{ size: Size.Xs ... }'), style: typography.textNowrap },
                                { children: code({}, '{ size: Size.Sm ... }'), style: typography.textNowrap },
                                { children: code({}, '{ size: Size.Md ... }'), style: typography.textNowrap },
                                { children: code({}, '{ size: Size.Lg ... }'), style: typography.textNowrap },
                            ]
                        },
                        {
                            headers: [{ children: '# of columns', style: typography.textNowrap }],
                            columns: [
                                { children: '12', colspan: 4 }
                            ]
                        },
                        {
                            headers: [{ children: 'Column width', style: typography.textNowrap }],
                            columns: [
                                { children: 'Auto' },
                                { children: '~62px' },
                                { children: '~81px' },
                                { children: '~97px' },
                            ]
                        },
                        {
                            headers: [{ children: 'Gutter width', style: typography.textNowrap }],
                            columns: [
                                { children: '30px (15px on each side of a column)', colspan: 4 }
                            ]
                        },
                        {
                            headers: [{ children: 'Nestable', style: typography.textNowrap }],
                            columns: [{ children: 'Yes', colspan: 4 }]
                        },
                        {
                            headers: [{ children: 'Offsets', style: typography.textNowrap }],
                            columns: [{ children: 'Yes', colspan: 4 }]
                        },
                        {
                            headers: [{ children: 'Column ordering', style: typography.textNowrap }],
                            columns: [{ children: 'Yes', colspan: 4 }]
                        }
                    ]
                }
            }
        })
    ];
}

function exampleStackHorizontal(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-example-fluid' } }, 'Example: Fluid container'),
        p({}, [
            `Using a single set of `,
            code({}, 'col({ size: ..., count: ... }, ...)'),
            ` grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices 
            (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any `,
            code({}, 'row({}, ...)'),
            '.'
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),
            col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)')
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 8 }, 'col({ size: Size.Md, count: 8 }, ...)'),
            col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)')
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)'),
            col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)'),
            col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)')
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 6 }, 'col({ size: Size.Md, count: 6 }, ...)'),
            col({ size: Size.Md, count: 6 }, 'col({ size: Size.Md, count: 6 }, ...)')
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 1 }, 'col({ size: Size.Md, count: 1 }, ...)')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 8 }, 'col({ size: Size.Md, count: 8 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 6 }, 'col({ size: Size.Md, count: 6 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 6 }, 'col({ size: Size.Md, count: 6 }, ...)')`, e({ tag: 'br' }),
            `])`, e({ tag: 'br' })
        ]))),
    ];
}

function exampleFluidContainer(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-options' } }, 'Grid options'),
        p({}, [
            `Turn any fixed-width grid layout into a full-width layout by changing your outermost `,
            code({}, 'container({}, ...)'),
            ` to `,
            code({ style: typography.textNowrap }, 'container({ fluid: true }, ...)'),
            `.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            'container({ fluid: true }, [', e({ tag: 'br' }),
            '   row({}, [', e({ tag: 'br' }),
            '      ...', e({ tag: 'br' }),
            '   ])', e({ tag: 'br' }),
            '])', e({ tag: 'br' }),
        ])))
    ];
}

function exampleMobileAndDesktop(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-example-mixed' } }, 'Example: Mobile and desktop'),
        p({}, [
            `Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid layout at once
             by adding complex input data `,
            code({}, 'col({ cols: [{ size: Size.Xs, count: ... }, { size: Size.Md, count: ... }] }, ...)'),
            ` for components. See the example below for a better idea of how it all works.`
        ]),
        row({ style: styles.showGrid }, [
            col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Md, count: 8 }] },
                'col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Md, count: 8 }] }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'
            )
        ]),
        row({ style: styles.showGrid }, [
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'
            )
        ]),
        row({ style: styles.showGrid }, [
            col({ cols: [{ size: Size.Xs, count: 6 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }] }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }] }, ...)'
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Md, count: 8 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Md, count: 8 }] }, ...)'`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)`, e({ tag: 'br' }),
            `    )'`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },,`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'`, e({ tag: 'br' }),
            `    )'`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }] }, ...)'`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }] }, ...)'`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function exampleMobileTabletAndDesktop(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-example-mixed-complete' } }, 'Example: Mobile, tablet and desktop'),
        p({}, [
            `Build on the previous example by creating even more dynamic and powerful layouts with tablet `,
            code({}, 'col({ size: Size.Sm, count: ... }, ...)'),
            ` component input data.`
        ]),
        row({ style: styles.showGrid }, [
            col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Sm, count: 6 }, { size: Size.Md, count: 8 }] },
                'col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Sm, count: 6 }, { size: Size.Md, count: 8 }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)'
            )
        ]),
        row({ style: styles.showGrid }, [
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] }, ...)'
            ),
            col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] },
                'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] }, ...)'
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Sm, count: 6 }, { size: Size.Md, count: 8 }] },`,
            e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 12 }, { size: Size.Sm, count: 6 }, { size: Size.Md, count: 8 }, ...)'`,
            e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Md, count: 4 }] }, ...)`, e({ tag: 'br' }),
            `    )'`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] }, ...)'`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] },`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] }, ...)'`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] },,`, e({ tag: 'br' }),
            `        'col({ cols: [{ size: Size.Xs, count: 6 }, { size: Size.Sm, count: 4 }] }, ...)'`, e({ tag: 'br' }),
            `    )'`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function exampleColumnWrapping(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-example-wrapping' } }, 'Example: Column wrapping'),
        p(
            {},
            `If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.`
        ),
        row({ style: styles.showGrid }, [
            col({ size: Size.Xs, count: 9 }, 'col({ size: Size.Xs, count: 9 }, ...)'),
            col({ size: Size.Xs, count: 4 }, [
                'col({ size: Size.Xs, count: 4 }, ...)',
                e({ tag: 'br' }),
                'Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.'
            ]),
            col({ size: Size.Xs, count: 6 }, [
                'col({ size: Size.Xs, count: 6 }, ...)',
                e({ tag: 'br' }),
                'Subsequent columns continue along the new line.'
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Xs, count: 9 }, 'col({ size: Size.Xs, count: 9 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Xs, count: 4 }, [`, e({ tag: 'br' }),
            `        'col({ size: Size.Xs, count: 4 }, ...)',`, e({ tag: 'br' }),
            `        e({ tag: 'br' }),`, e({ tag: 'br' }),
            `        'Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.'`,
            e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    col({ size: Size.Xs, count: 6 }, [`, e({ tag: 'br' }),
            `        'col({ size: Size.Xs, count: 6 }, ...)',`, e({ tag: 'br' }),
            `        e({ tag: 'br' }),`, e({ tag: 'br' }),
            `        'Subsequent columns continue along the new line.'`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function offsettingColumns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-offsetting' } }, 'Offsetting columns'),
        p({}, [
            `Move columns to the right using `,
            code({}, 'offsets'),
            ` input data property. These classes increase the left margin of a column by * columns. `,
            `For example, `,
            code({}, 'col({ cols: ..., offsets: { size: Size.Md, count:  }, ...)'),
            ` moves column over four columns.`
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)'),
            col({ size: Size.Md, count: 4, offsets: { size: Size.Md, count: 4 } },
                'col({ size: Size.Md, count: 4, offsets: { size: Size.Md, count: 4 } }, ...)')
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } },
                'col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } }, ...)'),
            col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } },
                'col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } }, ...)')
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 6, offsets: { size: Size.Md, count: 3 } },
                'col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } }, ...)')
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 4 }, 'col({ size: Size.Md, count: 4 }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 4, offsets: { size: Size.Md, count: 4 } },`, e({ tag: 'br' }),
            `        'col({ size: Size.Md, count: 4, offsets: { size: Size.Md, count: 4 } }, ...)')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } },`, e({ tag: 'br' }),
            `        'col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } },`, e({ tag: 'br' }),
            `        'col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } }, ...)')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 6, offsets: { size: Size.Md, count: 3 } },`, e({ tag: 'br' }),
            `        'col({ size: Size.Md, count: 3, offsets: { size: Size.Md, count: 3 } }, ...)')`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function nestingColumns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-nesting' } }, 'Nesting columns'),
        p({}, [
            `To nest your content with the default grid, add a new `,
            code({}, 'row({}, ...)'),
            ` and set of `,
            code({}, 'col({ ... }, ...)'),
            ` columns within an existing `,
            code({}, 'col({ ... }, ...)'),
            `column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 `,
            `available columns).`,
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Sm, count: 9 }, [
                'Level 1: col({ size: Size.Sm, count: 9 }, ...)',
                row({}, [
                    col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, [
                        'Level 2:  col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, ...)'
                    ]),
                    col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, [
                        'Level 2:  col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, ...)'
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Sm, count: 9 }, [`, e({ tag: 'br' }),
            `        'Level 1: col({ size: Size.Sm, count: 9 }, ...)',`, e({ tag: 'br' }),
            `        row({}, [`, e({ tag: 'br' }),
            `            col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, [`, e({ tag: 'br' }),
            `                'Level 2:  col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, ...)'`, e({ tag: 'br' }),
            `            ]),`, e({ tag: 'br' }),
            `            col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, [`, e({ tag: 'br' }),
            `                'Level 2:  col({ cols: [{ size: Size.Xs, count: 8 }, { size: Size.Sm, count: 6 }] }, ...)'`, e({ tag: 'br' }),
            `            ]),`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function columnOrdering(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'grid-column-ordering' } }, 'Column ordering'),
        p({}, [
            `Easily change the order of our built-in grid columns with `,
            code({}, 'pushes'),
            ` and `,
            code({}, 'pulls'),
            ` modifier properties on component input data.`,
            
        ]),
        row({ style: styles.showGrid }, [
            col({ size: Size.Md, count: 9, pushes: { size: Size.Md, count: 3 } }, 
                ' col({ size: Size.Md, count: 9, pushes: { size: Size.Md, count: 3 } }, ...)'),
            col({ size: Size.Md, count: 3, pulls: { size: Size.Md, count: 9 } }, 
                '{ size: Size.Md, count: 3, pulls: { size: Size.Md, count: 9 } , ...)')
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 9, pushes: { size: Size.Md, count: 3 } }, `, e({ tag: 'br' }),
            `        ' col({ size: Size.Md, count: 9, pushes: { size: Size.Md, count: 3 } }, ...)'),`, e({ tag: 'br' }),
            `    col({ size: Size.Md, count: 3, pulls: { size: Size.Md, count: 9 } }, `, e({ tag: 'br' }),
            `        '{ size: Size.Md, count: 3, pulls: { size: Size.Md, count: 9 } , ...)')`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}