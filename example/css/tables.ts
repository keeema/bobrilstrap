import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, span, table } from '../../index';
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
                condensedTable()
            ]);
    }
})

function basicExample(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'tables-example' } }, 'Basic example'),
        p({}, [
            `For basic styling—light padding and only horizontal dividers—uset the `,
            code({}, 'table({}, ...)'),
            ` component. It may seem super redundant, but given the widespread use of tables for other plugins like calendars 
            and date pickers, we've opted to isolate our custom table styles. Columns can be defined as array of `,
            code({}, 'string'), ` or `, code({}, 'ITdData'), ` and headers can be defined as array of `,
            code({}, 'string'), ` or `, code({}, 'IThData'), `.`
        ]),
        e({ styles: styles.bsExample }, table({
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
        e({ styles: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-tables-striped-ie8' } }, [
            h4({}, 'Cross-browser compatibility'),
            p({}, [
                `Striped tables are styled via the `, code({}, ':nth-child'),
                ` CSS selector, which is not available in Internet Explorer 8.`
            ])
        ]),
        e({ styles: styles.bsExample }, table({
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
        e({ styles: styles.bsExample }, table({
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
        e({ styles: styles.bsExample }, table({
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
        e({ styles: styles.bsExample }, table({
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
