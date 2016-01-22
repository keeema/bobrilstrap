import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import { IData as IHeadData } from 'bobrilstrap-thead';
import { IData as IBodyData } from 'bobrilstrap-tbody';
import Context from 'bobrilstrap-context';
import table from './index';

b.init(() => [
    core({}),
    container({}, [
        table({ head: getPeopleHeader(), body: getPeopleBody() }),
        table({ head: getPeopleHeader(), body: getPeopleBody(), striped: true }),
        table({ head: getPeopleHeader(), body: getPeopleBody(), bordered: true }),
        table({ head: getPeopleHeader(), body: getPeopleBody(), hover: true }),
        table({ head: getPeopleHeader(), body: getPeopleBody(), condensed: true }),

        table({ head: getContextHeader(), body: getContextBodyByRows() }),
        table({ head: getContextHeader(), body: getContextBodyByColumns() })
    ])
]);

function getPeopleHeader(): IHeadData {
    return {
        row: { headers: [{ children: '#' }, { children: 'First Name' }, { children: 'Last Name' }, { children: 'Username' }] }
    };
}

function getPeopleBody(): IBodyData {
    return {
        rows: [
            { columns: [{ children: '1' }, { children: 'Mark' }, { children: 'Otto' }, { children: '@mdo' }] },
            { columns: [{ children: '2' }, { children: 'Jacob' }, { children: 'Thornton' }, { children: '@fat' }] },
            { columns: [{ children: '3' }, { children: 'Larry' }, { children: 'the Bird' }, { children: '@twitter' }] }
        ]
    };
}

function getContextHeader(): IHeadData {
    return {
        row: {
            headers: [
                { children: '#' },
                { children: 'Column heading' },
                { children: 'Column heading' },
                { children: 'Column heading' },
                { children: 'Column heading' },
                { children: 'Column heading' }
            ]
        }
    };
}

function getContextBodyByRows(): IBodyData {
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return {
        rows: items.map((item) => {
            return {
                context: item % 2 === 0 ? Object.keys(Context)[item / 2] : undefined,
                columns: [
                    { children: item.toString() },
                    { children: 'Column content' },
                    { children: 'Column content' },
                    { children: 'Column content' },
                    { children: 'Column content' },
                    { children: 'Column content' }
                ]
            };
        })
    };
}

function getContextBodyByColumns(): IBodyData {
    return {
        rows: [
            {
                columns: [{ children: '1' }]
                    .concat(Object.keys(Context).map(context => { return { context, children: 'Column content' }; }))
            },
            {
                columns: [{ children: '2' }]
                    .concat(Object.keys(Context).reverse().map(context => { return { context, children: 'Column content' }; }))
            }
        ]
    };
}