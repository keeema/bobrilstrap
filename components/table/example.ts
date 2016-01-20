import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import elem from 'bobrilstrap-element';
import td from 'bobrilstrap-td';
import tr from 'bobrilstrap-tr';
import th from 'bobrilstrap-th';
import thead from 'bobrilstrap-thead';
import tbody from 'bobrilstrap-tbody';
import Context from 'bobrilstrap-context';
import table, { tableStyle } from './index';

b.init(() => [
    core({}),
    container({}, [
        table({}, getPeopleContent()),
        table({ striped: true }, getPeopleContent()),
        table({ bordered: true }, getPeopleContent()),
        table({ hover: true }, getPeopleContent()),
        table({ condensed: true }, getPeopleContent()),
        table({}, getContextContentByRows()),
        table({}, getContextContentByColumns()),
        table({ responsive: true }, getPeopleContent())
    ])
]);

function getPeopleContent(): b.IBobrilChildren {
    return [
        thead({}, [
            tr({}, [
                th({}, '#'), th({}, 'First Name'), th({}, 'Last Name'), th({}, 'Username')
            ]),
        ]),
        tbody({}, [
            tr({}, [
                td({}, '1'), td({}, 'Mark'), td({}, 'Otto'), td({}, '@mdo')
            ]),
            tr({}, [
                td({}, '2'), td({}, 'Jacob'), td({}, 'Thornton'), td({}, '@fat')
            ]),
            tr({}, [
                td({}, '3'), td({}, 'Larry'), td({}, 'the Bird'), td({}, '@twitter')
            ]),
        ])
    ];
}

function getContextContentByRows(): b.IBobrilChildren {
    return [
        thead({}, [
            tr({}, [
                th({}, '#'), th({}, 'Column heading'), th({}, 'Column heading'), th({}, 'Column heading')
            ]),
        ]),
        tbody({}, Object.keys(Context).map((context, index): b.IBobrilChildren => {
            return [
                tr({ context }, [
                    td({}, ((index * 2) + 1).toString()), td({}, 'Column content'), td({}, 'Column content'), td({}, '@Column content')
                ]),
                tr({}, [
                    td({}, ((index * 2) + 2).toString()), td({}, 'Column content'), td({}, 'Column content'), td({}, '@Column content')
                ]),
            ];
        })
        )
    ];
}

function getContextContentByColumns(): b.IBobrilChildren {
    return [
        thead({}, [
            tr({}, [
                th({}, '#'),
                th({}, 'Column heading'),
                th({}, 'Column heading'),
                th({}, 'Column heading'),
                th({}, 'Column heading'),
                th({}, 'Column heading')
            ]),
        ]),
        tbody({}, [
            tr({}, [
                td({}, '1'), Object.keys(Context).map((context): b.IBobrilChildren => td({ context }, 'Column content')),
            ]),
            tr({}, [
                td({}, '2'), Object.keys(Context).map((context): b.IBobrilChildren => td({}, 'Column content')),
            ]),
            tr({}, [
                td({}, '3'), Object.keys(Context).reverse().map((context): b.IBobrilChildren => td({ context }, 'Column content')),
            ]),
            tr({}, [
                td({}, '4'), Object.keys(Context).map((context): b.IBobrilChildren => td({}, 'Column content'))
            ])
        ])
    ];
}
