import * as b from 'bobril';
import { a, e, p, h2, h4, code, figure, dropdownMenu,
    dropdownItem, ButtonOption, dropdown, Size, Target } from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const buttonDropdowns = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Button dropdowns',
                id: 'btn-dropdowns',
                lead: [
                    ` Use a `, code({}, 'buttonGroup'), ` input data property of `, code({}, 'dropdown'), ` to wrap button in `,
                    code({}, 'buttonGroup'), ` component. It accepts simple `, code({}, 'boolean'),
                    ` or complex `, code({}, 'IButtonGroup'), `.`
                ]
            },
            [
                handlingSpecificStructure(),
                singleButtonDropdowns(),
                splitButtonDropdowns(),
                sizing(),
                dropupVariations()
            ]);
    }
});

function handlingSpecificStructure(): b.IBobrilChildren {
    return e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-dropdowns-special-cases' } }, [
        h4({}, `Handling specific dropdown structure`),
        p({}, [
            `If you need some special dropdown structure, you can compose it directly with components `,
            code({}, 'button'), `, `, code({}, 'span'), `, `, code({}, 'ul'), `, `, code({}, 'li'), ` etc. . `,
            `In such case follow the structure rules in original `,
            a({ href: 'http://getbootstrap.com/components/#btn-dropdowns', target: Target.Blank }, 'Bootstrap dropdown manual'), `.`
        ])
    ]);
}

function singleButtonDropdowns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'btn-dropdowns-single' } }, 'Single button dropdowns'),
        p({}, [
            `Turn a button into a dropdown toggle with some basic markup changes. Use a `,
            code({}, 'buttonGroup'), ` data property to wrap button in `, code({}, 'buttonGroup'),
            ` component.`
        ]),
        e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Default', ButtonOption.Default), ' ',
            getSingleButtonDropdown('Primary', ButtonOption.Primary), ' ',
            getSingleButtonDropdown('Success', ButtonOption.Success), ' ',
            getSingleButtonDropdown('Info', ButtonOption.Info), ' ',
            getSingleButtonDropdown('Warning', ButtonOption.Warning), ' ',
            getSingleButtonDropdown('Danger', ButtonOption.Danger)
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdown(`, e({ tag: 'br' }),
            `    { `, e({ tag: 'br' }),
            `        buttonGroup: true,`, e({ tag: 'br' }),
            `        button: { label: 'Default', option: ButtonOption.Default }`, e({ tag: 'br' }),
            `    },`, e({ tag: 'br' }),
            `    dropdownMenu({ }, [`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Action')),      `, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function getSingleButtonDropdown(label: string, option: ButtonOption, size: Size = Size.Md, up: boolean = false): b.IBobrilChildren {
    return dropdown(
        {
            buttonGroup: true,
            button: { label, option, size },
            up
        },
        dropdownMenu({}, [
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
            dropdownItem({ separator: true }),
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
        ])
    );
}

function splitButtonDropdowns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'btn-dropdowns-split' } }, 'Split button dropdowns'),
        p({}, [
            `Similarly, create split button dropdowns with the same markup changes, only with `,
            code({}, 'splitted'), ` property set to `, code({}, 'true'), `.`
        ]),
        e({ style: styles.bsExample }, [
            getSplitButtonDropdown('Default'), ' ',
            getSplitButtonDropdown('Primary', ButtonOption.Primary), ' ',
            getSplitButtonDropdown('Success', ButtonOption.Success), ' ',
            getSplitButtonDropdown('Info', ButtonOption.Info), ' ',
            getSplitButtonDropdown('Warning', ButtonOption.Warning), ' ',
            getSplitButtonDropdown('Danger', ButtonOption.Danger)
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdown(`, e({ tag: 'br' }),
            `    { `, e({ tag: 'br' }),
            `        buttonGroup: true,`, e({ tag: 'br' }),
            `        button: { label: 'Default', option: ButtonOption.Default, onClick: () => alert('Clicked!') },`, e({ tag: 'br' }),
            `        splitted: true,`, e({ tag: 'br' }),
            `        splittedSrOnlyText: 'Toggle Dropdown' `, e({ tag: 'br' }),
            `    },`, e({ tag: 'br' }),
            `    dropdownMenu({ }, [`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Action')),      `, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function getSplitButtonDropdown(label: string, option: ButtonOption = ButtonOption.Default): b.IBobrilChildren {
    return dropdown(
        {
            buttonGroup: true,
            button: { label, option, onClick: () => alert('Clicked!') },
            splitted: true,
            splittedSrOnlyText: 'Toggle Dropdown'
        },
        dropdownMenu({}, [
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
            dropdownItem({ separator: true }),
            dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
        ])
    );
}

function sizing(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'btn-dropdowns-sizing' } }, 'Sizing'),
        p({}, `Button dropdowns work with buttons of all sizes.`),
        e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Large', ButtonOption.Default, Size.Lg), ' ',
            getSingleButtonDropdown('Medium', ButtonOption.Default, Size.Md), ' ',
            getSingleButtonDropdown('Small', ButtonOption.Default, Size.Sm), ' ',
            getSingleButtonDropdown('Extra small', ButtonOption.Default, Size.Xs), ' '
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdown(`, e({ tag: 'br' }),
            `    { `, e({ tag: 'br' }),
            `        buttonGroup: true,`, e({ tag: 'br' }),
            `        button: { label: 'Default', option: ButtonOption.Default, size: Size.Lg }`, e({ tag: 'br' }),
            `    },`, e({ tag: 'br' }),
            `    dropdownMenu({ }, [`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Action')),      `, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function dropupVariations(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'btn-dropdowns-dropup' } }, 'Dropup variation'),
        p({}, [`Trigger dropdown menus above elements by setting `, code({}, 'up'), ` property.`]),
        e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Dropup', ButtonOption.Default, Size.Md, true), ' ',
            getSingleButtonDropdown('Right dropup', ButtonOption.Primary, Size.Md, true), ' '
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdown(`, e({ tag: 'br' }),
            `    { `, e({ tag: 'br' }),
            `        buttonGroup: true,`, e({ tag: 'br' }),
            `        button: { label: 'Default', option: ButtonOption.Default },`, e({ tag: 'br' }),
            `        up: true`, e({ tag: 'br' }),
            `    },`, e({ tag: 'br' }),
            `    dropdownMenu({ }, [`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Action')),      `, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `)`
        ])))
    ];
}   