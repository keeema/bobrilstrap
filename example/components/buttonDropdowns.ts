import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const buttonDropdowns = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Button dropdowns',
                id: 'btn-dropdowns',
                lead: [
                    ` Use a `, bs.code({}, 'bs.buttonGroup'), ` input data property of `, bs.code({}, 'bs.dropdown'), ` to wrap button in `,
                    bs.code({}, 'bs.buttonGroup'), ` component. It accepts simple `, bs.code({}, 'boolean'),
                    ` or complex `, bs.code({}, 'IButtonGroup'), `.`
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
    return bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-dropdowns-special-cases' } }, [
        bs.h4({}, `Handling specific dropdown structure`),
        bs.p({}, [
            `If you need some special dropdown structure, you can compose it directly with components `,
            bs.code({}, 'bs.button'), `, `, bs.code({}, 'bs.span'), `, `, bs.code({}, 'bs.ul'), `, `, bs.code({}, 'bs.li'), ` etc. . `,
            `In such case follow the structure rules in original `,
            bs.a({ href: 'http://getbootstrap.com/components/#btn-dropdowns', target: bs.Target.Blank }, 'Bootstrap dropdown manual'), `.`
        ])
    ]);
}

function singleButtonDropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-dropdowns-single' } }, 'Single button dropdowns')),
        bs.p({}, [
            `Turn a button into a dropdown toggle with some basic markup changes. Use a `,
            bs.code({}, 'bs.buttonGroup'), ` data property to wrap button in `, bs.code({}, 'bs.buttonGroup'),
            ` component.`
        ]),
        bs.e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Default', bs.ButtonOption.Default), ' ',
            getSingleButtonDropdown('Primary', bs.ButtonOption.Primary), ' ',
            getSingleButtonDropdown('Success', bs.ButtonOption.Success), ' ',
            getSingleButtonDropdown('Info', bs.ButtonOption.Info), ' ',
            getSingleButtonDropdown('Warning', bs.ButtonOption.Warning), ' ',
            getSingleButtonDropdown('Danger', bs.ButtonOption.Danger)
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdown(`, bs.e({ tag: 'br' }),
            `    { `, bs.e({ tag: 'br' }),
            `        buttonGroup: true,`, bs.e({ tag: 'br' }),
            `        button: { label: 'Default', option: bs.ButtonOption.Default }`, bs.e({ tag: 'br' }),
            `    },`, bs.e({ tag: 'br' }),
            `    bs.dropdownMenu({ }, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),      `, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function getSingleButtonDropdown(label: string, option: bs.ButtonOption, size: bs.Size = bs.Size.Md, up: boolean = false)
    : b.IBobrilChildren {
    return bs.dropdown(
        {
            buttonGroup: true,
            button: { label, option, size },
            up
        },
        bs.dropdownMenu({}, [
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
            bs.dropdownItem({ separator: true }),
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
        ])
    );
}

function splitButtonDropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-dropdowns-split' } }, 'Split button dropdowns')),
        bs.p({}, [
            `Similarly, create split button dropdowns with the same markup changes, only with `,
            bs.code({}, 'splitted'), ` property set to `, bs.code({}, 'true'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            getSplitButtonDropdown('Default'), ' ',
            getSplitButtonDropdown('Primary', bs.ButtonOption.Primary), ' ',
            getSplitButtonDropdown('Success', bs.ButtonOption.Success), ' ',
            getSplitButtonDropdown('Info', bs.ButtonOption.Info), ' ',
            getSplitButtonDropdown('Warning', bs.ButtonOption.Warning), ' ',
            getSplitButtonDropdown('Danger', bs.ButtonOption.Danger)
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdown(`, bs.e({ tag: 'br' }),
            `    { `, bs.e({ tag: 'br' }),
            `        buttonGroup: true,`, bs.e({ tag: 'br' }),
            `        button: { label: 'Default', option: bs.ButtonOption.Default, onClick: () => alert('Clicked!') },`, bs.e({ tag: 'br' }),
            `        splitted: true,`, bs.e({ tag: 'br' }),
            `        splittedSrOnlyText: 'Toggle Dropdown' `, bs.e({ tag: 'br' }),
            `    },`, bs.e({ tag: 'br' }),
            `    bs.dropdownMenu({ }, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),      `, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function getSplitButtonDropdown(label: string, option: bs.ButtonOption = bs.ButtonOption.Default): b.IBobrilChildren {
    return bs.dropdown(
        {
            buttonGroup: true,
            button: { label, option, onClick: () => alert('Clicked!') },
            splitted: true,
            splittedSrOnlyText: 'Toggle Dropdown'
        },
        bs.dropdownMenu({}, [
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
            bs.dropdownItem({ separator: true }),
            bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
        ])
    );
}

function sizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-dropdowns-sizing' } }, 'Sizing')),
        bs.p({}, `Button dropdowns work with buttons of all sizes.`),
        bs.e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Large', bs.ButtonOption.Default, bs.Size.Lg), ' ',
            getSingleButtonDropdown('Medium', bs.ButtonOption.Default, bs.Size.Md), ' ',
            getSingleButtonDropdown('Small', bs.ButtonOption.Default, bs.Size.Sm), ' ',
            getSingleButtonDropdown('Extra small', bs.ButtonOption.Default, bs.Size.Xs), ' '
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdown(`, bs.e({ tag: 'br' }),
            `    { `, bs.e({ tag: 'br' }),
            `        buttonGroup: true,`, bs.e({ tag: 'br' }),
            `        button: { label: 'Default', option: bs.ButtonOption.Default, size: bs.Size.Lg }`, bs.e({ tag: 'br' }),
            `    },`, bs.e({ tag: 'br' }),
            `    bs.dropdownMenu({ }, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),      `, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function dropupVariations(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-dropdowns-dropup' } }, 'Dropup variation')),
        bs.p({}, [`Trigger dropdown menus above elements by setting `, bs.code({}, 'up'), ` property.`]),
        bs.e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Dropup', bs.ButtonOption.Default, bs.Size.Md, true), ' ',
            getSingleButtonDropdown('Right dropup', bs.ButtonOption.Primary, bs.Size.Md, true), ' '
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdown(`, bs.e({ tag: 'br' }),
            `    { `, bs.e({ tag: 'br' }),
            `        buttonGroup: true,`, bs.e({ tag: 'br' }),
            `        button: { label: 'Default', option: bs.ButtonOption.Default },`, bs.e({ tag: 'br' }),
            `        up: true`, bs.e({ tag: 'br' }),
            `    },`, bs.e({ tag: 'br' }),
            `    bs.dropdownMenu({ }, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),      `, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}   