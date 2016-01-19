import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import elem from 'bobrilstrap-element';
import table, { tableStyle } from './index';

b.init(() => [
    core({}),
    container({}, [
        table({}, getPeopleContent()),
        table({ styles: tableStyle.tableStriped }, getPeopleContent()),
        table({ styles: tableStyle.tableBordered }, getPeopleContent()),
        table({ styles: tableStyle.tableHover }, getPeopleContent()),
        table({ styles: tableStyle.tableCondensed }, getPeopleContent()),
    ])
]);

function getPeopleContent(): b.IBobrilChildren {
    return [
        elem({ tag: 'thead' }, [
            elem({ tag: 'tr' }, [
                elem({ tag: 'th' }, '#'),
                elem({ tag: 'th' }, 'First Name'),
                elem({ tag: 'th' }, 'Last Name'),
                elem({ tag: 'th' }, 'Username')
            ]),
        ]),
        elem({ tag: 'tbody' }, [
            elem({ tag: 'tr' }, [
                elem({ tag: 'td' }, '1'), elem({ tag: 'td' }, 'Mark'), elem({ tag: 'td' }, 'Otto'), elem({ tag: 'td' }, '@mdo')
            ]),
            elem({ tag: 'tr' }, [
                elem({ tag: 'td' }, '2'), elem({ tag: 'td' }, 'Jacob'), elem({ tag: 'td' }, 'Thornton'), elem({ tag: 'td' }, '@fat')
            ]),
            elem({ tag: 'tr' }, [
                elem({ tag: 'td' }, '3'), elem({ tag: 'td' }, 'Larry'), elem({ tag: 'td' }, 'the Bird'), elem({ tag: 'td' }, '@twitter')
            ]),
        ])
    ];
}