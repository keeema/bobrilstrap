import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, span, table, Context, ITdData, responsiveTable } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Tables',
                id: 'tables'
            },
            [
                basicExample(),
                stripedRows(),
                borderedTable(),
                hoverRows(),
                condensedTable(),
                contextualStyles(),
                responsiveTables()
            ]);
    }
})

function basicExample(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-example' } }, 'Basic example'),
        p({}, [
            `For basic styling—light padding and only horizontal dividers use the `,
            code({}, 'table({ ... })'),
            ` component. It may seem super redundant, but given the widespread use of tables for other plugins like calendars 
            and date pickers, we've opted to isolate our custom table styles. Columns can be defined as array of `,
            code({}, 'string'), ` or `, code({}, 'ITdData'), ` and headers can be defined as array of `,
            code({}, 'string'), ` or `, code({}, 'IThData'), `.`
        ]),
        e({ style: styles.bsExample }, table({
            caption: 'Optional table caption.',
            head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },
            body: {
                rows: [
                    { columns: ['1', 'Mark', 'Otto', '@mdo'] },
                    { columns: ['2', 'Jacob', 'Thornton', '@fat'] },
                    { columns: ['3', 'Larry', 'the Bird', '@twitter'] }
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    caption: 'Optional table caption.',`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function stripedRows(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-striped' } }, 'Striped rows'),
        p({}, [
            `Set `, code({}, 'striped'), ` input data property to add zebra-striping to any table row within the `,
            code({}, '<tbody>'), `.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-striped-ie8' } }, [
            h4({}, 'Cross-browser compatibility'),
            p({}, [
                `Striped tables are styled via the `, code({}, ':nth-child'),
                ` CSS selector, which is not available in Internet Explorer 8.`
            ])
        ]),
        e({ style: styles.bsExample }, table({
            striped: true,
            head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },
            body: {
                rows: [
                    { columns: ['1', 'Mark', 'Otto', '@mdo'] },
                    { columns: ['2', 'Jacob', 'Thornton', '@fat'] },
                    { columns: ['3', 'Larry', 'the Bird', '@twitter'] }
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    caption: 'Optional table caption.',`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function borderedTable(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-bordered' } }, 'Bordered table'),
        p({}, [`Set `, code({}, 'bordered'), ` for borders on all sides of the table and cells.`]),
        e({ style: styles.bsExample }, table({
            bordered: true,
            head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },
            body: {
                rows: [
                    { columns: ['1', 'Mark', 'Otto', '@mdo'] },
                    { columns: ['2', 'Jacob', 'Thornton', '@fat'] },
                    { columns: ['3', 'Larry', 'the Bird', '@twitter'] }
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    striped: true,`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function hoverRows(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-hover-rows' } }, 'Hover rows'),
        p({}, [`Set `, code({}, 'hover'), ` input data property to enable a hover state on table rows within a `,
            code({}, '<tbody>'), `.`]),
        e({ style: styles.bsExample }, table({
            hover: true,
            head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },
            body: {
                rows: [
                    { columns: ['1', 'Mark', 'Otto', '@mdo'] },
                    { columns: ['2', 'Jacob', 'Thornton', '@fat'] },
                    { columns: ['3', 'Larry', 'the Bird', '@twitter'] }
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    hover: true,`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function condensedTable(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-condensed' } }, 'Condensed table'),
        p({}, [`Set `, code({}, 'condensed'), ` input data property to make tables more compact by cutting cell padding in half.`]),
        e({ style: styles.bsExample }, table({
            condensed: true,
            head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },
            body: {
                rows: [
                    { columns: ['1', 'Mark', 'Otto', '@mdo'] },
                    { columns: ['2', 'Jacob', 'Thornton', '@fat'] },
                    { columns: ['3', 'Larry', 'the Bird', '@twitter'] }
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    condensed: true,`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function contextualStyles(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-contextual-styles' } }, 'Contextual styles'),
        p({}, [`Use `, code({}, 'Context'), ` styles to color table rows or individual cells.`]),
        e({ style: styles.bsExample }, table({
            head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },
            body: {
                rows: [
                    { columns: ['1', 'Column content', 'Column content', '@	Column content'], context: Context.active },
                    { columns: ['2', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['3', 'Column content', 'Column content', '@	Column content'], context: Context.success },
                    { columns: ['4', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['5', 'Column content', 'Column content', '@	Column content'], context: Context.warning },
                    { columns: ['6', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['7', 'Column content', 'Column content', '@	Column content'], context: Context.danger },
                    { columns: ['8', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['9', 'Column content', 'Column content', '@	Column content'], context: Context.info },
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            { columns: ['1', ... ], context: Context.active },`, e({ tag: 'br' }),
            `            { columns: ['2', ... ] },`, e({ tag: 'br' }),
            `            { columns: ['3', ... ], context: Context.success },`, e({ tag: 'br' }),
            `            { columns: ['4', ... ] },`, e({ tag: 'br' }),
            `            { columns: ['5', ... ], context: Context.warning },`, e({ tag: 'br' }),
            `            { columns: ['6', ... ] },`, e({ tag: 'br' }),
            `            { columns: ['7', ... ], context: Context.danger },`, e({ tag: 'br' }),
            `            { columns: ['8', ... ] },`, e({ tag: 'br' }),
            `            { columns: ['9', ... ], context: Context.info },`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ]))),
        e({ style: styles.bsExample }, table({
            head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading', 'Column heading', 'Column heading'] } },
            body: {
                rows: [
                    {
                        columns: [
                            '1',
                            <ITdData>{ children: 'Column content', context: Context.active },
                            <ITdData>{ children: 'Column content', context: Context.success },
                            <ITdData>{ children: 'Column content', context: Context.warning },
                            <ITdData>{ children: 'Column content', context: Context.danger },
                            <ITdData>{ children: 'Column content', context: Context.info }
                        ]
                    },
                ]
            }
        })),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `table({`, e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `                columns: [`, e({ tag: 'br' }),
            `                    '1',`, e({ tag: 'br' }),
            `                    <ITdData>{ children: 'Column content', context: Context.active },`, e({ tag: 'br' }),
            `                    <ITdData>{ children: 'Column content', context: Context.success },`, e({ tag: 'br' }),
            `                    <ITdData>{ children: 'Column content', context: Context.warning },`, e({ tag: 'br' }),
            `                    <ITdData>{ children: 'Column content', context: Context.danger },`, e({ tag: 'br' }),
            `                    <ITdData>{ children: 'Column content', context: Context.info }`, e({ tag: 'br' }),
            `                ]`, e({ tag: 'br' }),
            `            },`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-context-accessibility' } }, [
            h4({}, 'Conveying meaning to assistive technologies'),
            p({}, [
                `Using color to add meaning to a table row or individual cell only provides a visual indication, which will not be 
                conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color 
                is either obvious from the content itself (the visible text in the relevant table row/cell), or is included through 
                alternative means, such as additional text hidden with the `, code({}, 'srOnly'), ` style from `, code({}, 'helpers'), `.`
            ])
        ]),
    ];
}

function responsiveTables(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-responsive' } }, 'Responsive tables'),
        p({}, [
            `Create responsive tables by `, code({}, 'responsiveTable({ table: ... })'),
            ` component to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, 
            you will not see any difference in these tables.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-responsive-overflow' } }, [
            h4({}, 'Vertical clipping/truncation'),
            p({}, [
                `Responsive tables make use of `, code({}, 'overflow-y: hidden'),
                `, which clips off any content that goes beyond the bottom or top edges of the table. In particular, 
                this can clip off dropdown menus and other third-party widgets.`
            ])
        ]),
        e({ style: styles.bsExample }, [
            responsiveTable({
                table: {
                    head: {
                        row: {
                            headers: [
                                '#', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading'
                            ]
                        }
                    },
                    body: {
                        rows: [
                            { columns: ['1', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'] },
                            { columns: ['2', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'] },
                            { columns: ['3', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'] }
                        ]
                    }
                }
            }),
            responsiveTable({
                table: {
                    bordered: true,
                    head: {
                        row: {
                            headers: [
                                '#', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading'
                            ]
                        }
                    },
                    body: {
                        rows: [
                            { columns: ['1', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'] },
                            { columns: ['2', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'] },
                            { columns: ['3', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'] }
                        ]
                    }
                }
            })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `responsiveTable({`, e({ tag: 'br' }),
            `    table: {`, e({ tag: 'br' }),
            `        bordered: true,`, e({ tag: 'br' }),
            `        head: {`, e({ tag: 'br' }),
            `            row: { headers: ['#', 'Table heading', ... ] }`, e({ tag: 'br' }),
            `        },`, e({ tag: 'br' }),
            `        body: {`, e({ tag: 'br' }),
            `            rows: [`, e({ tag: 'br' }),
            `                { columns: ['1', 'Table cell', ... ] },`, e({ tag: 'br' }),
            `                { columns: ['2', 'Table cell', ... ] },`, e({ tag: 'br' }),
            `                { columns: ['3', 'Table cell', ... ] }`, e({ tag: 'br' }),
            `            ]`, e({ tag: 'br' }),
            `        }`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}
