import * as b from 'bobril';
import * as bse from './example/bsexample/css';
import * as bs from './index';
import { masterPage } from './example/masterPage';
import { bobrilstrapPage } from './example/bobrilstrap/page';
import { css } from './example/css/page';
import { components } from './example/components/page';
import { liveComponents } from './example/liveComponents/page';

bs.init();
bse.init();

b.routes(
    b.route({ handler: masterPage }, [
        b.route({ url: 'css', name: 'css', handler: css }, [
            b.route({ url: 'css-top', name: 'css-top', handler: false }),
            b.route({ url: 'overview', name: 'overview', handler: false }),
            b.route({ url: 'overview-type-links', name: 'overview-type-links', handler: false }),
            b.route({ url: 'overview-normalize', name: 'overview-normalize', handler: false }),
            b.route({ url: 'overview-containers', name: 'overview-containers', handler: false }),
            b.route({ url: 'grid', name: 'grid', handler: false }),
            b.route({ url: 'grid-intro', name: 'grid-intro', handler: false }),
            b.route({ url: 'grid-options', name: 'grid-options', handler: false }),
            b.route({ url: 'grid-example-basic', name: 'grid-example-basic', handler: false }),
            b.route({ url: 'grid-example-fluid', name: 'grid-example-fluid', handler: false }),
            b.route({ url: 'grid-example-mixed', name: 'grid-example-mixed', handler: false }),
            b.route({ url: 'grid-example-mixed-complete', name: 'grid-example-mixed-complete', handler: false }),
            b.route({ url: 'grid-example-wrapping', name: 'grid-example-wrapping', handler: false }),
            b.route({ url: 'grid-offsetting', name: 'grid-offsetting', handler: false }),
            b.route({ url: 'grid-nesting', name: 'grid-nesting', handler: false }),
            b.route({ url: 'grid-column-ordering', name: 'grid-column-ordering', handler: false }),
            b.route({ url: 'type', name: 'type', handler: false }),
            b.route({ url: 'type-headings', name: 'type-headings', handler: false }),
            b.route({ url: 'type-body-copy', name: 'type-body-copy', handler: false }),
            b.route({ url: 'type-inline-text', name: 'type-inline-text', handler: false }),
            b.route({ url: 'type-alignment', name: 'type-alignment', handler: false }),
            b.route({ url: 'type-transformation', name: 'type-transformation', handler: false }),
            b.route({ url: 'type-abbreviations', name: 'type-abbreviations', handler: false }),
            b.route({ url: 'type-addresses', name: 'type-addresses', handler: false }),
            b.route({ url: 'type-blockquotes', name: 'type-blockquotes', handler: false }),
            b.route({ url: 'type-lists', name: 'type-lists', handler: false }),
            b.route({ url: 'code', name: 'code', handler: false }),
            b.route({ url: 'code-inline', name: 'code-inline', handler: false }),
            b.route({ url: 'code-user-input', name: 'code-user-input', handler: false }),
            b.route({ url: 'code-block', name: 'code-block', handler: false }),
            b.route({ url: 'code-variables', name: 'code-variables', handler: false }),
            b.route({ url: 'code-sample-output', name: 'code-sample-output', handler: false }),
            b.route({ url: 'tables', name: 'tables', handler: false }),
            b.route({ url: 'tables-example', name: 'tables-example', handler: false }),
            b.route({ url: 'tables-striped', name: 'tables-striped', handler: false }),
            b.route({ url: 'tables-bordered', name: 'tables-bordered', handler: false }),
            b.route({ url: 'tables-hover-rows', name: 'tables-hover-rows', handler: false }),
            b.route({ url: 'tables-condensed', name: 'tables-condensed', handler: false }),
            b.route({ url: 'tables-contextual-styles', name: 'tables-contextual-styles', handler: false }),
            b.route({ url: 'tables-responsive', name: 'tables-responsive', handler: false }),
            b.route({ url: 'forms', name: 'forms', handler: false }),
            b.route({ url: 'basic-forms', name: 'basic-forms', handler: false }),
            b.route({ url: 'forms-inline', name: 'forms-inline', handler: false }),
            b.route({ url: 'forms-horizontal', name: 'forms-horizontal', handler: false }),
            b.route({ url: 'forms-controls', name: 'forms-controls', handler: false }),
            b.route({ url: 'forms-controls-static', name: 'forms-controls-static', handler: false }),
            b.route({ url: 'forms-control-focus', name: 'forms-control-focus', handler: false }),
            b.route({ url: 'forms-control-disabled', name: 'forms-control-disabled', handler: false }),
            b.route({ url: 'forms-control-readonly', name: 'forms-control-readonly', handler: false }),
            b.route({ url: 'forms-help-text', name: 'forms-help-text', handler: false }),
            b.route({ url: 'forms-control-validation', name: 'forms-control-validation', handler: false }),
            b.route({ url: 'forms-control-sizes', name: 'forms-control-sizes', handler: false }),
            b.route({ url: 'buttons', name: 'buttons', handler: false }),
            b.route({ url: 'buttons-tags', name: 'buttons-tags', handler: false }),
            b.route({ url: 'buttons-options', name: 'buttons-options', handler: false }),
            b.route({ url: 'buttons-sizes', name: 'buttons-sizes', handler: false }),
            b.route({ url: 'buttons-active', name: 'buttons-active', handler: false }),
            b.route({ url: 'buttons-disabled', name: 'buttons-disabled', handler: false }),
            b.route({ url: 'images', name: 'images', handler: false }),
            b.route({ url: 'images-responsive', name: 'images-responsive', handler: false }),
            b.route({ url: 'images-shapes', name: 'images-shapes', handler: false }),
            b.route({ url: 'helper-styles', name: 'helper-styles', handler: false }),
            b.route({ url: 'helper-styles-colors', name: 'helper-styles-colors', handler: false }),
            b.route({ url: 'helper-styles-backgrounds', name: 'helper-styles-backgrounds', handler: false }),
            b.route({ url: 'helper-styles-close', name: 'helper-styles-close', handler: false }),
            b.route({ url: 'helper-styles-carets', name: 'helper-styles-carets', handler: false }),
            b.route({ url: 'helper-styles-floats', name: 'helper-styles-floats', handler: false }),
            b.route({ url: 'helper-styles-center', name: 'helper-styles-center', handler: false }),
            b.route({ url: 'helper-styles-clearfix', name: 'helper-styles-clearfix', handler: false }),
            b.route({ url: 'helper-styles-show-hide', name: 'helper-styles-show-hide', handler: false }),
            b.route({ url: 'helper-styles-screen-readers', name: 'helper-styles-screen-readers', handler: false }),
            b.route({ url: 'helper-styles-image-replacement', name: 'helper-styles-image-replacement', handler: false }),
            b.route({ url: 'responsive-utilities', name: 'responsive-utilities', handler: false }),
            b.route({ url: 'responsive-utilities-styles', name: 'responsive-utilities-styles', handler: false }),
            b.route({ url: 'responsive-utilities-print', name: 'responsive-utilities-print', handler: false }),
            b.route({ url: 'responsive-utilities-tests', name: 'responsive-utilities-tests', handler: false })
        ]),
        b.route({ url: 'bobrilstrap', name: 'bobrilstrap', handler: bobrilstrapPage }, [
            b.route({ url: 'bobrilstrap-top', name: 'bobrilstrap-top', handler: false }),
            b.route({ url: 'bobril', name: 'bobril', handler: false }),
            b.route({ url: 'bobrilstrap-installation', name: 'bobrilstrap-installation', handler: false }),
            b.route({ url: 'bobrilstrap-tsx', name: 'bobrilstrap-tsx', handler: false }),
            b.route({ url: 'bobrilstrap-themes', name: 'bobrilstrap-themes', handler: false })
        ]),
        b.route({ url: 'components', name: 'components', handler: components }, [
            b.route({ url: 'components-top', name: 'components-top', handler: false }),
            b.route({ url: 'glyphicons', name: 'glyphicons', handler: false }),
            b.route({ url: 'glyphicons-glyphs', name: 'glyphicons-glyphs', handler: false }),
            b.route({ url: 'glyphicons-how-to-use', name: 'glyphicons-how-to-use', handler: false }),
            b.route({ url: 'glyphicons-examples', name: 'glyphicons-examples', handler: false }),
            b.route({ url: 'dropdowns', name: 'dropdowns', handler: false }),
            b.route({ url: 'dropdowns-example', name: 'dropdowns-example', handler: false }),
            b.route({ url: 'dropdowns-alignment', name: 'dropdowns-alignment', handler: false }),
            b.route({ url: 'dropdowns-headers', name: 'dropdowns-headers', handler: false }),
            b.route({ url: 'dropdowns-divider', name: 'dropdowns-divider', handler: false }),
            b.route({ url: 'dropdowns-disabled', name: 'dropdowns-disabled', handler: false }),
            b.route({ url: 'btn-groups', name: 'btn-groups', handler: false }),
            b.route({ url: 'btn-groups-single', name: 'btn-groups-single', handler: false }),
            b.route({ url: 'btn-groups-toolbar', name: 'btn-groups-toolbar', handler: false }),
            b.route({ url: 'btn-groups-sizing', name: 'btn-groups-sizing', handler: false }),
            b.route({ url: 'btn-groups-nested', name: 'btn-groups-nested', handler: false }),
            b.route({ url: 'btn-groups-vertical', name: 'btn-groups-vertical', handler: false }),
            b.route({ url: 'btn-groups-justified', name: 'btn-groups-justified', handler: false }),
            b.route({ url: 'btn-dropdowns', name: 'btn-dropdowns', handler: false }),
            b.route({ url: 'btn-dropdowns-single', name: 'btn-dropdowns-single', handler: false }),
            b.route({ url: 'btn-dropdowns-split', name: 'btn-dropdowns-split', handler: false }),
            b.route({ url: 'btn-dropdowns-sizing', name: 'btn-dropdowns-sizing', handler: false }),
            b.route({ url: 'btn-dropdowns-dropup', name: 'btn-dropdowns-dropup', handler: false }),
            b.route({ url: 'input-groups', name: 'input-groups', handler: false }),
            b.route({ url: 'input-groups-basic', name: 'input-groups-basic', handler: false }),
            b.route({ url: 'input-groups-sizing', name: 'input-groups-sizing', handler: false }),
            b.route({ url: 'input-groups-checkboxes-radios', name: 'input-groups-checkboxes-radios', handler: false }),
            b.route({ url: 'input-groups-buttons', name: 'input-groups-buttons', handler: false }),
            b.route({ url: 'input-groups-buttons-dropdowns', name: 'input-groups-buttons-dropdowns', handler: false }),
            b.route({ url: 'input-groups-buttons-segmented', name: 'input-groups-buttons-segmented', handler: false }),
            b.route({ url: 'input-groups-buttons-multiple', name: 'input-groups-buttons-multiple', handler: false }),
            b.route({ url: 'nav', name: 'nav', handler: false }),
            b.route({ url: 'nav-tabs', name: 'nav-tabs', handler: false }),
            b.route({ url: 'nav-pills', name: 'nav-pills', handler: false }),
            b.route({ url: 'nav-justified', name: 'nav-justified', handler: false }),
            b.route({ url: 'nav-disabled-links', name: 'nav-disabled-links', handler: false }),
            b.route({ url: 'nav-dropdowns', name: 'nav-dropdowns', handler: false }),
            b.route({ url: 'navbar', name: 'navbar', handler: false }),
            b.route({ url: 'navbar-default', name: 'navbar-default', handler: false }),
            b.route({ url: 'navbar-brand-image', name: 'navbar-brand-image', handler: false }),
            b.route({ url: 'navbar-forms', name: 'navbar-forms', handler: false }),
            b.route({ url: 'navbar-buttons', name: 'navbar-buttons', handler: false }),
            b.route({ url: 'navbar-text', name: 'navbar-text', handler: false }),
            b.route({ url: 'navbar-links', name: 'navbar-links', handler: false }),
            b.route({ url: 'navbar-component-alignment', name: 'navbar-component-alignment', handler: false }),
            b.route({ url: 'navbar-fixed-top', name: 'navbar-fixed-top', handler: false }),
            b.route({ url: 'navbar-fixed-bottom', name: 'navbar-fixed-bottom', handler: false }),
            b.route({ url: 'navbar-static-top', name: 'navbar-static-top', handler: false }),
            b.route({ url: 'navbar-inverted', name: 'navbar-inverted', handler: false }),
            b.route({ url: 'breadcrumbs', name: 'breadcrumbs', handler: false }),
            b.route({ url: 'pagination', name: 'pagination', handler: false }),
            b.route({ url: 'pagination-default', name: 'pagination-default', handler: false }),
            b.route({ url: 'pagination-pager', name: 'pagination-pager', handler: false }),
            b.route({ url: 'labels', name: 'labels', handler: false }),
            b.route({ url: 'badges', name: 'badges', handler: false }),
            b.route({ url: 'jumbotron', name: 'jumbotron', handler: false }),
            b.route({ url: 'page-header', name: 'page-header', handler: false }),
            b.route({ url: 'thumbnails', name: 'thumbnails', handler: false }),
            b.route({ url: 'thumbnails-default', name: 'thumbnails-default', handler: false }),
            b.route({ url: 'thumbnails-custom-content', name: 'thumbnails-custom-content', handler: false }),
            b.route({ url: 'alerts', name: 'alerts', handler: false }),
            b.route({ url: 'alerts-examples', name: 'alerts-examples', handler: false }),
            b.route({ url: 'alerts-dismissible', name: 'alerts-dismissible', handler: false }),
            b.route({ url: 'alerts-links', name: 'alerts-links', handler: false }),
            b.route({ url: 'progress', name: 'progress', handler: false }),
            b.route({ url: 'progress-basic', name: 'progress-basic', handler: false }),
            b.route({ url: 'progress-label', name: 'progress-label', handler: false }),
            b.route({ url: 'progress-alternatives', name: 'progress-alternatives', handler: false }),
            b.route({ url: 'progress-striped', name: 'progress-striped', handler: false }),
            b.route({ url: 'progress-animated', name: 'progress-animated', handler: false }),
            b.route({ url: 'progress-stacked', name: 'progress-stacked', handler: false }),
            b.route({ url: 'media', name: 'media', handler: false }),
            b.route({ url: 'media-default', name: 'media-default', handler: false }),
            b.route({ url: 'media-list', name: 'media-list', handler: false }),
            b.route({ url: 'list-group', name: 'list-group', handler: false }),
            b.route({ url: 'list-group-basic', name: 'list-group-basic', handler: false }),
            b.route({ url: 'list-group-badges', name: 'list-group-badges', handler: false }),
            b.route({ url: 'list-group-linked', name: 'list-group-linked', handler: false }),
            b.route({ url: 'list-group-buttons', name: 'list-group-buttons', handler: false }),
            b.route({ url: 'list-group-disabled', name: 'list-group-disabled', handler: false }),
            b.route({ url: 'list-group-contextual-classes', name: 'list-group-contextual-classes', handler: false }),
            b.route({ url: 'list-group-custom-content', name: 'list-group-custom-content', handler: false }),
            b.route({ url: 'panels', name: 'panels', handler: false }),
            b.route({ url: 'panels-basic', name: 'panels-basic', handler: false }),
            b.route({ url: 'panels-heading', name: 'panels-heading', handler: false }),
            b.route({ url: 'panels-footer', name: 'panels-footer', handler: false }),
            b.route({ url: 'panels-alternatives', name: 'panels-alternatives', handler: false }),
            b.route({ url: 'panels-tables', name: 'panels-tables', handler: false }),
            b.route({ url: 'panels-list-group', name: 'panels-list-group', handler: false }),
            b.route({ url: 'responsive-embed', name: 'responsive-embed', handler: false }),
            b.route({ url: 'wells', name: 'wells', handler: false })
        ]),
        b.route({ url: 'live-components', name: 'live-components', handler: liveComponents }, [
            b.route({ url: 'live-components-top', name: 'live-components-top', handler: false }),
            b.route({ url: 'modals', name: 'modals', handler: false }),
            b.route({ url: 'tooltip', name: 'tooltip', handler: false }),
            b.route({ url: 'popover', name: 'popover', handler: false }),
            b.route({ url: 'collapse', name: 'collapse', handler: false }),
            b.route({ url: 'carousel', name: 'carousel', handler: false }),
            b.route({ url: 'affix', name: 'affix', handler: false })
        ]),
        b.routeDefault({ name: 'bobrilstrap', handler: bobrilstrapPage })
    ]));