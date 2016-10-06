import * as b from 'bobril';

export const styles = {
    bsCallout: b.styleDef('bs-callout'),
    bsCalloutInfo: b.styleDef('bs-callout-info'),
    bsCalloutDanger: b.styleDef('bs-callout-danger'),
    bsCalloutWarning: b.styleDef('bs-callout-warning'),
    bsDocsContainer: b.styleDef('bs-docs-container'),
    bsDocsNav: b.styleDef('bs-docs-nav'),
    bsDocsHeader: b.styleDef('bs-docs-header'),
    bsDocsSection: b.styleDef('bs-docs-section'),
    bsDocsSidebar: b.styleDef('bs-docs-sidebar'),
    bsDocsSidenav: b.styleDef('bs-docs-sidenav'),
    bsExample: b.styleDef('bs-example'),
    bsExampleBgClasses: b.styleDef('bs-example-bg-classes'),
    bsExampleControlSizing: b.styleDef('bs-example-control-sizing'),
    bsExampleType: b.styleDef('bs-example-type'),
    bsExampleImages: b.styleDef('bs-example-images'),
    bsNavbarTopExample: b.styleDef('bs-navbar-top-example'),
    bsNavbarBottomExample: b.styleDef('bs-navbar-bottom-example'),
    bsGlyphicons: b.styleDef('bs-glyphicons'),
    bsGlyphiconsList: b.styleDef('bs-glyphicons-list'),
    centerBlock: b.styleDef('center-block'),
    controls: b.styleDef('controls'),
    glyphiconClass: b.styleDef('glyphicon-class'), 
    highlight: b.styleDef('highlight'),
    isHidden: b.styleDef('is-hidden'),
    isVisible: b.styleDef('is-visible'),
    lead: b.styleDef('lead'),
    pageHeader: b.styleDef('page-header'),
    responsiveUtilities: b.styleDef('responsive-utilities'),
    responsiveUtilitiesTest: b.styleDef('row responsive-utilities-test'),
    visibleOn: b.styleDef('visible-on'),
    hiddenOn: b.styleDef('hidden-on'),
    showGrid: b.styleDef('show-grid'),
    typeInfo: b.styleDef('type-info'),
    well: b.styleDef('well')
};

export function init() {
    b.asset('./docs.min.css');
}