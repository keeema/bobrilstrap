import * as b from 'bobril';
import { a, e, p, h2, code, figure, buttonGroup, dropdownMenu,
    dropdownItem, ButtonOption, dropdown } from '../../index';
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
                    `Use any button to trigger a dropdown menu by placing it within a `,
                    code({}, 'buttonGroup'),
                    ` and providing the proper menu markup.`
                ]
            },
            [
                singleButtonDropdowns()
            ]);
    }
});

function singleButtonDropdowns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'btn-dropdowns-single' } }, 'Single button dropdowns'),
        p({}, [
            `Turn a button into a dropdown toggle with some basic markup changes.`
        ]),
        e({ style: styles.bsExample }, [
            getSingleButtonDropdown('Default'), ' ',
            getSingleButtonDropdown('Primary', ButtonOption.Primary), ' ',
            getSingleButtonDropdown('Success', ButtonOption.Success), ' ',
            getSingleButtonDropdown('Info', ButtonOption.Info), ' ',
            getSingleButtonDropdown('Warning', ButtonOption.Warning), ' ',
            getSingleButtonDropdown('Danger', ButtonOption.Danger)
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({}, dropdown(`, e({ tag: 'br' }),
            `       { button: { label: 'Default', option: ButtonOption.Default } }`, e({ tag: 'br' }),
            `       dropdownMenu({ }, [`, e({ tag: 'br' }),
            `           dropdownItem({}, a({ href: '...' }, 'Action')),      `, e({ tag: 'br' }),
            `           dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `           dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `           dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `           dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `       ])`, e({ tag: 'br' }),
            `   )`, e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function getSingleButtonDropdown(label: string, option: ButtonOption = ButtonOption.Default): b.IBobrilChildren {
    return buttonGroup(
        {},
        dropdown(
            { button: { label, option } },
            dropdownMenu({}, [
                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                dropdownItem({ separator: true }),
                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
            ])
        )
    );
}