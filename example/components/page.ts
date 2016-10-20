import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { glyphicons } from './glyphicons';
import { dropdowns } from './dropdowns';
import { buttonGroups } from './buttonGroups';
import { buttonDropdowns } from './buttonDropdowns';
import { inputGroups } from './inputGroups';
import { navs } from './navs';
import { navbarPage } from './navbar';
import { breadcrumbs } from './breadcrumbs';
import { pagination } from './pagination';
import { labels } from './labels';
import { badges } from './badges';
import { jumbotron } from './jumbotron';
import { pageHeader } from './pageHeader';
import { thumbnails } from './thumbnails';
import { alerts } from './alerts';
import { progress } from './progress';

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
                            },
                            {
                                targetId: 'navbar', title: 'Navbar',
                                subs: [
                                    { targetId: 'navbar-default', title: 'Default navbar' },
                                    { targetId: 'navbar-brand-image', title: 'Brand image' },
                                    { targetId: 'navbar-forms', title: 'Forms' },
                                    { targetId: 'navbar-buttons', title: 'Buttons' },
                                    { targetId: 'navbar-text', title: 'Text' },
                                    { targetId: 'navbar-links', title: 'Links' },
                                    { targetId: 'navbar-component-alignment', title: 'Component alignment' },
                                    { targetId: 'navbar-fixed-top', title: 'Fixed to top' },
                                    { targetId: 'navbar-fixed-bottom', title: 'Fixed to bottom' },
                                    { targetId: 'navbar-static-top', title: 'Static top' },
                                    { targetId: 'navbar-inverted', title: 'Inverted navbar' }
                                ]
                            },
                            {
                                targetId: 'breadcrumbs', title: 'Breadcrumbs',
                                subs: []
                            },
                            {
                                targetId: 'pagination', title: 'Pagination',
                                subs: [
                                    { targetId: 'pagination-default', title: 'Default pagination' },
                                    { targetId: 'pagination-pager', title: 'Pager' }
                                ]
                            },
                            {
                                targetId: 'labels', title: 'Labels',
                                subs: []
                            },
                            {
                                targetId: 'badges', title: 'Badges',
                                subs: []
                            },
                            {
                                targetId: 'jumbotron', title: 'Jumbotron',
                                subs: []
                            },
                            {
                                targetId: 'page-header', title: 'Page header',
                                subs: []
                            },
                            {
                                targetId: 'thumbnails', title: 'Thumbnails',
                                subs: [
                                    { targetId: 'thumbnails-default', title: 'Default example' },
                                    { targetId: 'thumbnails-custom-content', title: 'Custom content' }
                                ]
                            },
                            {
                                targetId: 'alerts', title: 'Alerts',
                                subs: [
                                    { targetId: 'alerts-examples', title: 'Examples' },
                                    { targetId: 'alerts-dismissible', title: 'Dismissible alerts' },
                                    { targetId: 'alerts-links', title: 'Links in alerts' }
                                ]
                            },
                            {
                                targetId: 'progress', title: 'Progress bars',
                                subs: [
                                    { targetId: 'progress-basic', title: 'Basic example' },
                                    { targetId: 'progress-label', title: 'With label' },
                                    { targetId: 'progress-alternatives', title: 'Contextual alternatives' },
                                    { targetId: 'progress-striped', title: 'Striped' },
                                    { targetId: 'progress-animated', title: 'Animated' },
                                    { targetId: 'progress-stacked', title: 'Stacked' }
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
                    navs(),
                    navbarPage(),
                    breadcrumbs(),
                    pagination(),
                    labels(),
                    badges(),
                    jumbotron(),
                    pageHeader(),
                    thumbnails(),
                    alerts(),
                    progress()
                ])
        ];
    }
});

const texts = {
    header: 'Components',
    headerContent: `Over a dozen reusable components built to provide iconography, dropdowns,
     input groups, navigation, alerts, and much more.`
};