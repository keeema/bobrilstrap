import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import responsiveTable from './index';

bsCore.init();

b.init(() => [
    container({}, [
        responsiveTable({
            table: {
                head: {
                    row: { headers: [{ children: '#' }, { children: 'First Name' }, { children: 'Last Name' }, { children: 'Username' }] }
                },
                body: {
                    rows: [
                        { columns: [{ children: '1' }, { children: 'Mark' }, { children: 'Otto' }, { children: '@mdo' }] },
                        { columns: [{ children: '2' }, { children: 'Jacob' }, { children: 'Thornton' }, { children: '@fat' }] },
                        { columns: [{ children: '3' }, { children: 'Larry' }, { children: 'the Bird' }, { children: '@twitter' }] }
                    ]
                }
            }
        })
    ])
]);