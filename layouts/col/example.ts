import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import row from 'bobrilstrap-row';
import { DeviceSize } from './index';
import col from './index';

let style = b.styleDef({ backgroundColor: '#000', color: '#fff' });
b.init(() => [
    core({}),
    container({}, [
        row({}, [
            col({ cols: { deviceSize: DeviceSize.sm, count: 1 }, styles: style }, '.col-sm-1')
        ]),
        row({}, [
            col({ cols: { deviceSize: DeviceSize.sm, count: 2 }, styles: style }, '.col-sm-2')
        ]),
        row({}, [
            col({ cols: { deviceSize: DeviceSize.sm, count: 3 }, styles: style }, '.col-sm-3')
        ]),
        row({}, [
            col(
                {
                    cols: { deviceSize: DeviceSize.sm, count: 3 },
                    offsets: { deviceSize: DeviceSize.sm, count: 1 },
                    styles: style
                },
                '.col-sm-3 .col-sm-offset-1')
        ]),
        row({}, [
            col(
                {
                    cols: { deviceSize: DeviceSize.sm, count: 3 },
                    offsets: { deviceSize: DeviceSize.sm, count: 2 },
                    styles: style
                },
                '.col-sm-3 .col-sm-offset-1')
        ]),
        row({}, [
            col(
                {
                    cols: { deviceSize: DeviceSize.sm, count: 3 },
                    offsets: { deviceSize: DeviceSize.sm, count: 3 },
                    styles: style
                },
                '.col-sm-3 .col-sm-offset-1')
        ])
    ]),
]);
