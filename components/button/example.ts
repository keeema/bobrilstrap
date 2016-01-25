import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import row from 'bobrilstrap-row';
import button, { Size, Option, Tag, Type } from './index';

bsCore.init();

b.init(() => [
    container({}, [
        row({}, [
            button({ tag: Tag.a, option: Option.default, onClick: () => alert('Clicked'), title: 'Link' }),
            button({ option: Option.default, onClick: () => alert('Clicked'), title: 'Button', type: Type.submit }),
            button({ tag: Tag.input, option: Option.default, onClick: () => alert('Clicked'), title: 'Input' }),
            button({ tag: Tag.input, option: Option.default, onClick: () => alert('Clicked'), title: 'Submit', type: Type.submit })
        ]),
        row({}, [
            button({}, 'No option (Default)'),
            button({ option: Option.default }, 'Default'),
            button({ option: Option.primary }, 'Primary'),
            button({ option: Option.success }, 'Success'),
            button({ option: Option.info }, 'Info'),
            button({ option: Option.warning }, 'Warning'),
            button({ option: Option.danger }, 'Danger'),
            button({ option: Option.link }, 'Link')
        ]),
        row({}, [
            button({ option: Option.primary, size: Size.lg }, 'Large Button'),
            button({ option: Option.default, size: Size.lg }, 'Large Button')
        ]),
        row({}, [
            button({ option: Option.primary }, 'Default Button'),
            button({ option: Option.default }, 'Default Button')
        ]),
         row({}, [
            button({ option: Option.primary, size: Size.md }, 'Medium Button'),
            button({ option: Option.default, size: Size.md }, 'Medium Button')
        ]),
        row({}, [
            button({ option: Option.primary, size: Size.sm }, 'Small Button'),
            button({ option: Option.default, size: Size.sm }, 'Small Button')
        ]),
        row({}, [
            button({ option: Option.primary, size: Size.xs }, 'Extra small button'),
            button({ option: Option.default, size: Size.xs }, 'Extra small button')
        ]),
        row({}, [
            button({ option: Option.primary, size: Size.lg, block: true }, 'Block level button'),
            button({ option: Option.default, size: Size.lg, block: true }, 'Block level button')
        ]),
        row({}, [
            button({ option: Option.primary, size: Size.lg, active: true }, 'Primary Button'),
            button({ option: Option.default, size: Size.lg, active: true }, 'Button')
        ]),
        row({}, [
            button({ tag: Tag.a, option: Option.primary, size: Size.lg, active: true }, 'Primary Button'),
            button({ tag: Tag.a, option: Option.default, size: Size.lg, active: true }, 'Button')
        ]),
        row({}, [
            button({ option: Option.primary, size: Size.lg, disabled: true }, 'Primary Button'),
            button({ option: Option.default, size: Size.lg, disabled: true }, 'Button')
        ]),
        row({}, [
            button({ tag: Tag.a, option: Option.primary, size: Size.lg, disabled: true }, 'Primary Button'),
            button({ tag: Tag.a, option: Option.default, size: Size.lg, disabled: true }, 'Button')
        ])
    ])
]);