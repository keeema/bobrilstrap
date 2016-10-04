import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { glyphicons } from './glyphicons';
import { dropdowns } from './dropdowns';
import { buttonGroups } from './buttonGroups';
import { buttonDropdowns } from './buttonDropdowns';
import { inputGroups } from './inputGroups';
import { navs } from './navs';

export const components = b.createVirtualComponent({
    id: 'bobrilstrap-components',
    init() {
        document.title = 'Bobrilstrap - Components';
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer(
                {
                    id: 'components',
                    sidebar: {
                        items: [
                            {
                                targetId: 'glyphicons', title: 'Glyphicons',
                                subs: [
                                    { targetId: 'glyphicons-glyphs', title: 'Available glyphs' },
                                    { targetId: 'glyphicons-how-to-use', title: 'How to use' },
                                    { targetId: 'glyphicons-examples', title: 'Examples' }
                                ]
                            },
                            {
                                targetId: 'dropdowns', title: 'Dropdowns',
                                subs: [
                                    { targetId: 'dropdowns-example', title: 'Example' },
                                    { targetId: 'dropdowns-alignment', title: 'Alignment' },
                                    { targetId: 'dropdowns-headers', title: 'Headers' },
                                    { targetId: 'dropdowns-divider', title: 'Divider' },
                                    { targetId: 'dropdowns-disabled', title: 'Disabled menu items' }
                                ]
                            },
                            {
                                targetId: 'btn-groups', title: 'Button groups',
                                subs: [
                                    { targetId: 'btn-groups-single', title: 'Basic example' },
                                    { targetId: 'btn-groups-toolbar', title: 'Button toolbar' },
                                    { targetId: 'btn-groups-sizing', title: 'Sizing' },
                                    { targetId: 'btn-groups-nested', title: 'Nesting' },
                                    { targetId: 'btn-groups-vertical', title: 'Vertical variation' },
                                    { targetId: 'btn-groups-justified', title: 'Justified button groups' }
                                ]
                            },
                            {
                                targetId: 'btn-dropdowns', title: 'Button dropdowns',
                                subs: [
                                    { targetId: 'btn-dropdowns-single', title: 'Single button dropdowns' },
                                    { targetId: 'btn-dropdowns-split', title: 'Split button dropdowns' },
                                    { targetId: 'btn-dropdowns-sizing', title: 'Sizing' },
                                    { targetId: 'btn-dropdowns-dropup', title: 'Dropup variation' }
                                ]
                            },
                            {
                                targetId: 'input-groups', title: 'Input groups',
                                subs: [
                                    { targetId: 'input-groups-basic', title: 'Basic example' },
                                    { targetId: 'input-groups-sizing', title: 'Sizing' },
                                    { targetId: 'input-groups-checkboxes-radios', title: 'Checkboxes and radio addons' },
                                    { targetId: 'input-groups-buttons', title: 'Button addons' },
                                    { targetId: 'input-groups-buttons-dropdowns', title: 'Buttons with dropdowns' },
                                    { targetId: 'input-groups-buttons-segmented', title: 'Segmented buttons' },
                                    { targetId: 'input-groups-buttons-multiple', title: 'Multiple buttons' }
                                ]
                            },
                            {
                                targetId: 'nav', title: 'Navs',
                                subs: [
                                    { targetId: 'nav-tabs', title: 'Tabs' },
                                    { targetId: 'nav-pills', title: 'Pills' },
                                    { targetId: 'nav-justified', title: 'Justified' },
                                    { targetId: 'nav-disabled-links', title: 'Disabled links' },
                                    { targetId: 'nav-dropdowns', title: 'Using dropdowns' }
                                ]
                            }
                        ]
                    }
                },
                [
                    glyphicons(),
                    dropdowns(),
                    buttonGroups(),
                    buttonDropdowns(),
                    inputGroups(),
                    navs()
                ])
        ];
    }
});

const texts = {
    header: 'Components',
    headerContent: `Over a dozen reusable components built to provide iconography, dropdowns,
     input groups, navigation, alerts, and much more.`
};