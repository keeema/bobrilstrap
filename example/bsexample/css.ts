import * as b from 'bobril';

export const styles = {
    bsDocsContainer: b.styleDef('bs-docs-container'),
    bsDocsNav: b.styleDef('bs-docs-nav'),
    bsDocsHeader: b.styleDef('bs-docs-header'),
    bsDocsSection: b.styleDef('bs-docs-section'),
    collapse: b.styleDef('collapse'),
    collapsed: b.styleDef('collapsed'),
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
    pageHeader: b.styleDef('page-header')
};

export function init() {
    b.asset('./bootstrap-theme.min.css');
    b.asset('./docs.min.css');
}