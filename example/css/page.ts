import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { overview } from './overview';
import { grids } from './grids';
import { typographyPage } from './typography';
import { codes } from './codes';
import { tables } from './tables';
import { forms } from './forms';
import { buttons } from './buttons';
import { images } from './images';
import { helpersPage } from './helpers';
import { responsive } from './responsive';

export const css = b.createVirtualComponent({
    id: 'bobrilstrap-css',
    init() {
        document.title = 'CSS - Bobrilstrap';
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer(
                {
                    id: 'css',
                    sidebar: {
                        items: [
                            {
                                targetId: 'overview', title: 'Overview',
                                subs: [
                                    { targetId: 'overview-type-links', title: 'Typography and links' },
                                    { targetId: 'overview-normalize', title: 'Normalize' },
                                    { targetId: 'overview-containers', title: 'Containers' }
                                ]
                            },
                            {
                                targetId: 'grid', title: 'Grid system',
                                subs: [
                                    { targetId: 'grid-intro', title: 'Introductions' },
                                    { targetId: 'grid-options', title: 'Grid options' },
                                    { targetId: 'grid-example-basic', title: 'Example: Stacked-to-horizontal' },
                                    { targetId: 'grid-example-fluid', title: 'Example: Fluid container' },
                                    { targetId: 'grid-example-mixed', title: 'Example: Mobile and desktop' },
                                    { targetId: 'grid-example-mixed-complete', title: 'Example: Mobile, tablet and desktop' },
                                    { targetId: 'grid-example-wrapping', title: 'Example: Column wrapping' },
                                    { targetId: 'grid-offsetting', title: 'Offsetting columns' },
                                    { targetId: 'grid-nesting', title: 'Nesting columns' },
                                    { targetId: 'grid-column-ordering', title: 'Column ordering' }
                                ]
                            },
                            {
                                targetId: 'type', title: 'Typography',
                                subs: [
                                    { targetId: 'type-headings', title: 'Headings' },
                                    { targetId: 'type-body-copy', title: 'Body copy' },
                                    { targetId: 'type-inline-text', title: 'Inline text elements' },
                                    { targetId: 'type-alignment', title: 'Alignment styles' },
                                    { targetId: 'type-transformation', title: 'Transformation styles' },
                                    { targetId: 'type-abbreviations', title: 'Abbreviations' },
                                    { targetId: 'type-addresses', title: 'Addresses' },
                                    { targetId: 'type-blockquotes', title: 'Blockquotes' },
                                    { targetId: 'type-lists', title: 'Lists' }
                                ]
                            },
                            {
                                targetId: 'code', title: 'Code',
                                subs: [
                                    { targetId: 'code-inline', title: 'Inline' },
                                    { targetId: 'code-user-input', title: 'User input' },
                                    { targetId: 'code-block', title: 'Basic block' },
                                    { targetId: 'code-variables', title: 'Variables' },
                                    { targetId: 'code-sample-output', title: 'Sample output' }

                                ]
                            },
                            {
                                targetId: 'tables', title: 'Tables',
                                subs: [
                                    { targetId: 'tables-example', title: 'Basic example' },
                                    { targetId: 'tables-striped', title: 'Striped rows' },
                                    { targetId: 'tables-bordered', title: 'Bordered table' },
                                    { targetId: 'tables-hover-rows', title: 'Hover rows' },
                                    { targetId: 'tables-condensed', title: 'Condensed table' },
                                    { targetId: 'tables-contextual-styles', title: 'Contextual styles' },
                                    { targetId: 'tables-responsive', title: 'Responsive tables' }

                                ]
                            },
                            {
                                targetId: 'forms', title: 'Forms',
                                subs: [
                                    { targetId: 'basic-forms', title: 'Basic example' },
                                    { targetId: 'forms-inline', title: 'Inline form' },
                                    { targetId: 'forms-horizontal', title: 'Horizontal form' },
                                    { targetId: 'forms-controls', title: 'Supported controls' },
                                    { targetId: 'forms-controls-static', title: 'Static control' },
                                    { targetId: 'forms-control-focus', title: 'Focus state' },
                                    { targetId: 'forms-control-disabled', title: 'Disabled state' },
                                    { targetId: 'forms-control-readonly', title: 'Readonly state' },
                                    { targetId: 'forms-help-text', title: 'Help text' },
                                    { targetId: 'forms-control-validation', title: 'Validation states' },
                                    { targetId: 'forms-control-sizes', title: 'Control sizing' }
                                ]
                            },
                            {
                                targetId: 'buttons', title: 'Buttons',
                                subs: [
                                    { targetId: 'buttons-tags', title: 'Button tags' },
                                    { targetId: 'buttons-options', title: 'Options' },
                                    { targetId: 'buttons-sizes', title: 'Sizes' },
                                    { targetId: 'buttons-active', title: 'Active state' },
                                    { targetId: 'buttons-disabled', title: 'Disabled state' }
                                ]
                            },
                            {
                                targetId: 'images', title: 'Images',
                                subs: [
                                    { targetId: 'images-responsive', title: 'Responsive images' },
                                    { targetId: 'images-shapes', title: 'Image shapes' }
                                ]
                            },
                            {
                                targetId: 'helper-styles', title: 'Helper styles',
                                subs: [
                                    { targetId: 'helper-styles-colors', title: 'Contextual colors' },
                                    { targetId: 'helper-styles-backgrounds', title: 'Contextual backgrounds' },
                                    { targetId: 'helper-styles-close', title: 'Close icon' },
                                    { targetId: 'helper-styles-carets', title: 'Carets' },
                                    { targetId: 'helper-styles-floats', title: 'Quick floats' },
                                    { targetId: 'helper-styles-center', title: 'Center content blocks' },
                                    { targetId: 'helper-styles-clearfix', title: 'Clearfix' },
                                    { targetId: 'helper-styles-show-hide', title: 'Showing and hiding content' },
                                    { targetId: 'helper-styles-screen-readers', title: 'Screen reader and keyboard navigation content' },
                                    { targetId: 'helper-styles-image-replacement', title: 'Image replacement' }
                                ]
                            },
                            {
                                targetId: 'responsive-utilities', title: 'Responsive utilities',
                                subs: [
                                    { targetId: 'responsive-utilities-styles', title: 'Available styles' },
                                    { targetId: 'responsive-utilities-print', title: 'Print styles' },
                                    { targetId: 'responsive-utilities-tests', title: 'Test cases' }
                                ]
                            },
                        ]
                    }
                },
                [
                    overview(),
                    grids(),
                    typographyPage(),
                    codes(),
                    tables(),
                    forms(),
                    buttons(),
                    images(),
                    helpersPage(),
                    responsive()
                ])
        ];
    }
});

const texts = {
    header: 'CSS',
    headerContent: `Global CSS settings, fundamental HTML elements styled and enhanced with extensible
     classes, and an advanced grid system. Everything wrapped to bobril components.`
};