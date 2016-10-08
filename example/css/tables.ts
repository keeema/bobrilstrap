import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const tables = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
});

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-example' } }, 'Basic example')),
        bs.p({}, [
            `For basic styling—light padding and only horizontal dividers use the `,
            bs.code({}, 'bs.table({ ... })'),
            ` component. It may seem super redundant, but given the widespread use of tables for other plugins like calendars 
            and date pickers, we've opted to isolate our custom table styles. Columns can be defined as array of `,
            bs.code({}, 'string'), ` or `, bs.code({}, 'bs.ITdData'), ` and headers can be defined as array of `,
            bs.code({}, 'string'), ` or `, bs.code({}, 'bs.IThData'), `.`
        ]),
        bs.e({ style: styles.bsExample }, bs.table({
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
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    caption: 'Optional table caption.',`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function stripedRows(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-striped' } }, 'Striped rows')),
        bs.p({}, [
            `Set `, bs.code({}, 'striped'), ` input data property to add zebra-striping to any table row within the `,
            bs.code({}, '<tbody>'), `.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-striped-ie8' } }, [
            bs.h4({}, 'Cross-browser compatibility'),
            bs.p({}, [
                `Striped tables are styled via the `, bs.code({}, ':nth-child'),
                ` CSS selector, which is not available in Internet Explorer 8.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, bs.table({
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
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    caption: 'Optional table caption.',`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function borderedTable(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-bordered' } }, 'Bordered table')),
        bs.p({}, [`Set `, bs.code({}, 'bordered'), ` for borders on all sides of the table and cells.`]),
        bs.e({ style: styles.bsExample }, bs.table({
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
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    striped: true,`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function hoverRows(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-hover-rows' } }, 'Hover rows')),
        bs.p({}, [`Set `, bs.code({}, 'hover'), ` input data property to enable a hover state on table rows within a `,
            bs.code({}, '<tbody>'), `.`]),
        bs.e({ style: styles.bsExample }, bs.table({
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
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    hover: true,`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function condensedTable(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-condensed' } }, 'Condensed table')),
        bs.p({}, [`Set `, bs.code({}, 'condensed'), ` input data property to make tables more compact by cutting cell padding in half.`]),
        bs.e({ style: styles.bsExample }, bs.table({
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
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    condensed: true,`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`, bs.e({ tag: 'br' }),
            `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function contextualStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-contextual-styles' } }, 'Contextual styles')),
        bs.p({}, [`Use `, bs.code({}, 'bs.TableContext'), ` styles to color table rows or individual cells.`]),
        bs.e({ style: styles.bsExample }, bs.table({
            head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },
            body: {
                rows: [
                    { columns: ['1', 'Column content', 'Column content', '@	Column content'], context: bs.TableContext.Active },
                    { columns: ['2', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['3', 'Column content', 'Column content', '@	Column content'], context: bs.TableContext.Success },
                    { columns: ['4', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['5', 'Column content', 'Column content', '@	Column content'], context: bs.TableContext.Warning },
                    { columns: ['6', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['7', 'Column content', 'Column content', '@	Column content'], context: bs.TableContext.Danger },
                    { columns: ['8', 'Column content', 'Column content', '@	Column content'] },
                    { columns: ['9', 'Column content', 'Column content', '@	Column content'], context: bs.TableContext.Info }
                ]
            }
        })),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            { columns: ['1', ... ], context: bs.TableContext.Active },`, bs.e({ tag: 'br' }),
            `            { columns: ['2', ... ] },`, bs.e({ tag: 'br' }),
            `            { columns: ['3', ... ], context: bs.TableContext.Success },`, bs.e({ tag: 'br' }),
            `            { columns: ['4', ... ] },`, bs.e({ tag: 'br' }),
            `            { columns: ['5', ... ], context: bs.TableContext.Warning },`, bs.e({ tag: 'br' }),
            `            { columns: ['6', ... ] },`, bs.e({ tag: 'br' }),
            `            { columns: ['7', ... ], context: bs.TableContext.Danger },`, bs.e({ tag: 'br' }),
            `            { columns: ['8', ... ] },`, bs.e({ tag: 'br' }),
            `            { columns: ['9', ... ], context: bs.TableContext.Info },`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ]))),
        bs.e({ style: styles.bsExample }, bs.table({
            head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading', 'Column heading', 'Column heading'] } },
            body: {
                rows: [
                    {
                        columns: [
                            '1',
                            <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Active },
                            <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Success },
                            <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Warning },
                            <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Danger },
                            <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Info }
                        ]
                    }
                ]
            }
        })),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.table({`, bs.e({ tag: 'br' }),
            `    head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },`, bs.e({ tag: 'br' }),
            `    body: {`, bs.e({ tag: 'br' }),
            `        rows: [`, bs.e({ tag: 'br' }),
            `            {`, bs.e({ tag: 'br' }),
            `                columns: [`, bs.e({ tag: 'br' }),
            `                    '1',`, bs.e({ tag: 'br' }),
            `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Active },`, bs.e({ tag: 'br' }),
            `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Success },`, bs.e({ tag: 'br' }),
            `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Warning },`, bs.e({ tag: 'br' }),
            `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Danger },`, bs.e({ tag: 'br' }),
            `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Info }`, bs.e({ tag: 'br' }),
            `                ]`, bs.e({ tag: 'br' }),
            `            },`, bs.e({ tag: 'br' }),
            `        ]`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-context-accessibility' } }, [
            bs.h4({}, 'Conveying meaning to assistive technologies'),
            bs.p({}, [
                `Using color to add meaning to a table row or individual cell only provides a visual indication, which will not be 
                conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color 
                is either obvious from the content itself (the visible text in the relevant table row/cell), or is included through 
                alternative means, such as additional text hidden with the `, bs.code({}, 'srOnly'), ` style from `, 
                bs.code({}, 'bs.helpers'), `.`
            ])
        ])
    ];
}

function responsiveTables(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'tables-responsive' } }, 'Responsive tables')),
        bs.p({}, [
            `Create responsive tables by `, bs.code({}, 'bs.responsiveTable({ table: ... })'),
            ` component to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, 
            you will not see any difference in these tables.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-responsive-overflow' } }, [
            bs.h4({}, 'Vertical clipping/truncation'),
            bs.p({}, [
                `Responsive tables make use of `, bs.code({}, 'overflow-y: hidden'),
                `, which clips off any content that goes beyond the bottom or top edges of the table. In particular, 
                this can clip off dropdown menus and other third-party widgets.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.responsiveTable({
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
            bs.responsiveTable({
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
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.responsiveTable({`, bs.e({ tag: 'br' }),
            `    table: {`, bs.e({ tag: 'br' }),
            `        bordered: true,`, bs.e({ tag: 'br' }),
            `        head: {`, bs.e({ tag: 'br' }),
            `            row: { headers: ['#', 'Table heading', ... ] }`, bs.e({ tag: 'br' }),
            `        },`, bs.e({ tag: 'br' }),
            `        body: {`, bs.e({ tag: 'br' }),
            `            rows: [`, bs.e({ tag: 'br' }),
            `                { columns: ['1', 'Table cell', ... ] },`, bs.e({ tag: 'br' }),
            `                { columns: ['2', 'Table cell', ... ] },`, bs.e({ tag: 'br' }),
            `                { columns: ['3', 'Table cell', ... ] }`, bs.e({ tag: 'br' }),
            `            ]`, bs.e({ tag: 'br' }),
            `        }`, bs.e({ tag: 'br' }),
            `    }`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}
