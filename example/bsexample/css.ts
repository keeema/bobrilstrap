import * as b from 'bobril';

export const styles = {
    bsCallout: b.styleDef('bs-callout'),
    bsCalloutInfo: b.styleDef('bs-callout-info'),
    bsCalloutDanger: b.styleDef('bs-callout-danger'),
    bsDocsContainer: b.styleDef('bs-docs-container'),
    bsDocsNav: b.styleDef('bs-docs-nav'),
    bsDocsHeader: b.styleDef('bs-docs-header'),
    bsDocsSection: b.styleDef('bs-docs-section'),
    bsExample: b.styleDef('bs-example'),
    bsExampleControlSizing: b.styleDef('bs-example-control-sizing'),
    bsExampleType: b.styleDef('bs-example-type'),
    bsExampleImages: b.styleDef('bs-example-images'),
    centerBlock: b.styleDef('center-block'),
    collapse: b.styleDef('collapse'),
    collapsed: b.styleDef('collapsed'),
    controls: b.styleDef('controls'),
    highlight: b.styleDef('highlight'),
    lead: b.styleDef('lead'),
    nav: b.styleDef('nav'),
    navbar: b.styleDef('navbar'),
    navbarBrand: b.styleDef('navbar-brand'),
    navbarCollapse: b.styleDef('navbar-collapse'),
    navbarHeader: b.styleDef('navbar-header'),
    navbarNav: b.styleDef('navbar-nav'),
    navbarRight: b.styleDef('navbar-right'),
    navbarStaticTop: b.styleDef('navbar-static-top'),
    navbarToggle: b.styleDef('navbar-toggle'),
    pageHeader: b.styleDef('page-header'),
    showGrid: b.styleDef('show-grid'),
    typeInfo: b.styleDef('type-info'),
    well: b.styleDef('well')
};

export function init() {
    b.asset('./docs.min.css');
}