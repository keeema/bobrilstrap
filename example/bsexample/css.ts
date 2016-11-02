import * as b from 'bobril';

export const styles = {
    bsCallout: b.styleDef('bs-callout'),
    bsCalloutInfo: b.styleDef('bs-callout-info'),
    bsCalloutDanger: b.styleDef('bs-callout-danger'),
    bsCalloutWarning: b.styleDef('bs-callout-warning'),
    bsDocsActivateAnimatedProgressbar: b.styleDef('bs-docs-activate-animated-progressbar'),
    bsDocsContainer: b.styleDef('bs-docs-container'),
    bsDocsBooticon: b.styleDef('bs-docs-booticon'),
    bsDocsBooticonLg: b.styleDef('bs-docs-booticon-lg'),
    bsDocsBooticonOutline: b.styleDef('bs-docs-booticon-outline'),
    bsDocsNav: b.styleDef('bs-docs-nav'),
    bsDocsHeader: b.styleDef('bs-docs-header'),
    bsDocsFooter: b.styleDef('bs-docs-footer'),
    bsDocsFooterLinks: b.styleDef('bs-docs-footer-links'),
    bsDocsSection: b.styleDef('bs-docs-section'),
    bsDocsSidebar: b.styleDef('bs-docs-sidebar'),
    bsDocsSidenav: b.styleDef('bs-docs-sidenav'),
    bsExample: b.styleDef('bs-example'),
    bsExampleBgClasses: b.styleDef('bs-example-bg-classes'),
    bsExampleControlSizing: b.styleDef('bs-example-control-sizing'),
    bsExampleType: b.styleDef('bs-example-type'),
    bsExampleImages: b.styleDef('bs-example-images'),
    bsDocsMastHead: b.styleDef('bs-docs-masthead'),
    bsNavbarTopExample: b.styleDef('bs-navbar-top-example'),
    bsNavbarBottomExample: b.styleDef('bs-navbar-bottom-example'),
    bsGlyphicons: b.styleDef('bs-glyphicons'),
    bsGlyphiconsList: b.styleDef('bs-glyphicons-list'),
    controls: b.styleDef('controls'),
    glyphiconClass: b.styleDef('glyphicon-class'),
    highlight: b.styleDef('highlight'),
    isHidden: b.styleDef('is-hidden'),
    isVisible: b.styleDef('is-visible'),
    pageHeader: b.styleDef('page-header'),
    responsiveUtilities: b.styleDef('responsive-utilities'),
    responsiveUtilitiesTest: b.styleDef('row responsive-utilities-test'),
    visibleOn: b.styleDef('visible-on'),
    hiddenOn: b.styleDef('hidden-on'),
    showGrid: b.styleDef('show-grid'),
    typeInfo: b.styleDef('type-info')
};

export function init() {
    b.asset('./docs.min.css');
}