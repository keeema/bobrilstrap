import * as b from "bobril";
import * as bse from "./example/bsexample/css";
import * as bs from "./index";
import { masterPage } from "./example/masterPage";
import { bobrilstrapPage } from "./example/bobrilstrap/page";
import { css } from "./example/css/page";
import { components } from "./example/components/page";
import { liveComponents } from "./example/liveComponents/page";
import { donate } from "./example/donate/page";

bs.init();
bse.init();

b.routes(
  b.route({ handler: masterPage }, [
    b.route({ url: "css", name: "css", handler: css }, [
      b.route({ url: "css-top", name: "css-top" }),
      b.route({ url: "overview", name: "overview" }),
      b.route({ url: "overview-type-links", name: "overview-type-links" }),
      b.route({ url: "overview-normalize", name: "overview-normalize" }),
      b.route({ url: "overview-containers", name: "overview-containers" }),
      b.route({ url: "grid", name: "grid" }),
      b.route({ url: "grid-intro", name: "grid-intro" }),
      b.route({ url: "grid-options", name: "grid-options" }),
      b.route({ url: "grid-example-basic", name: "grid-example-basic" }),
      b.route({ url: "grid-example-fluid", name: "grid-example-fluid" }),
      b.route({ url: "grid-example-mixed", name: "grid-example-mixed" }),
      b.route({
        url: "grid-example-mixed-complete",
        name: "grid-example-mixed-complete"
      }),
      b.route({ url: "grid-example-wrapping", name: "grid-example-wrapping" }),
      b.route({ url: "grid-offsetting", name: "grid-offsetting" }),
      b.route({ url: "grid-nesting", name: "grid-nesting" }),
      b.route({ url: "grid-column-ordering", name: "grid-column-ordering" }),
      b.route({ url: "type", name: "type" }),
      b.route({ url: "type-headings", name: "type-headings" }),
      b.route({ url: "type-body-copy", name: "type-body-copy" }),
      b.route({ url: "type-inline-text", name: "type-inline-text" }),
      b.route({ url: "type-alignment", name: "type-alignment" }),
      b.route({ url: "type-transformation", name: "type-transformation" }),
      b.route({ url: "type-abbreviations", name: "type-abbreviations" }),
      b.route({ url: "type-addresses", name: "type-addresses" }),
      b.route({ url: "type-blockquotes", name: "type-blockquotes" }),
      b.route({ url: "type-lists", name: "type-lists" }),
      b.route({ url: "code", name: "code" }),
      b.route({ url: "code-inline", name: "code-inline" }),
      b.route({ url: "code-user-input", name: "code-user-input" }),
      b.route({ url: "code-block", name: "code-block" }),
      b.route({ url: "code-variables", name: "code-variables" }),
      b.route({ url: "code-sample-output", name: "code-sample-output" }),
      b.route({ url: "tables", name: "tables" }),
      b.route({ url: "tables-example", name: "tables-example" }),
      b.route({ url: "tables-striped", name: "tables-striped" }),
      b.route({ url: "tables-bordered", name: "tables-bordered" }),
      b.route({ url: "tables-hover-rows", name: "tables-hover-rows" }),
      b.route({ url: "tables-condensed", name: "tables-condensed" }),
      b.route({
        url: "tables-contextual-styles",
        name: "tables-contextual-styles"
      }),
      b.route({ url: "tables-responsive", name: "tables-responsive" }),
      b.route({ url: "forms", name: "forms" }),
      b.route({ url: "basic-forms", name: "basic-forms" }),
      b.route({ url: "forms-inline", name: "forms-inline" }),
      b.route({ url: "forms-horizontal", name: "forms-horizontal" }),
      b.route({ url: "forms-controls", name: "forms-controls" }),
      b.route({ url: "forms-controls-static", name: "forms-controls-static" }),
      b.route({ url: "forms-control-focus", name: "forms-control-focus" }),
      b.route({
        url: "forms-control-disabled",
        name: "forms-control-disabled"
      }),
      b.route({
        url: "forms-control-readonly",
        name: "forms-control-readonly"
      }),
      b.route({ url: "forms-help-text", name: "forms-help-text" }),
      b.route({
        url: "forms-control-validation",
        name: "forms-control-validation"
      }),
      b.route({ url: "forms-control-sizes", name: "forms-control-sizes" }),
      b.route({ url: "buttons", name: "buttons" }),
      b.route({ url: "buttons-tags", name: "buttons-tags" }),
      b.route({ url: "buttons-options", name: "buttons-options" }),
      b.route({ url: "buttons-sizes", name: "buttons-sizes" }),
      b.route({ url: "buttons-active", name: "buttons-active" }),
      b.route({ url: "buttons-disabled", name: "buttons-disabled" }),
      b.route({ url: "images", name: "images" }),
      b.route({ url: "images-responsive", name: "images-responsive" }),
      b.route({ url: "images-shapes", name: "images-shapes" }),
      b.route({ url: "helper-styles", name: "helper-styles" }),
      b.route({ url: "helper-styles-colors", name: "helper-styles-colors" }),
      b.route({
        url: "helper-styles-backgrounds",
        name: "helper-styles-backgrounds"
      }),
      b.route({ url: "helper-styles-close", name: "helper-styles-close" }),
      b.route({ url: "helper-styles-carets", name: "helper-styles-carets" }),
      b.route({ url: "helper-styles-floats", name: "helper-styles-floats" }),
      b.route({ url: "helper-styles-center", name: "helper-styles-center" }),
      b.route({
        url: "helper-styles-clearfix",
        name: "helper-styles-clearfix"
      }),
      b.route({
        url: "helper-styles-show-hide",
        name: "helper-styles-show-hide"
      }),
      b.route({
        url: "helper-styles-screen-readers",
        name: "helper-styles-screen-readers"
      }),
      b.route({
        url: "helper-styles-image-replacement",
        name: "helper-styles-image-replacement"
      }),
      b.route({ url: "responsive-utilities", name: "responsive-utilities" }),
      b.route({
        url: "responsive-utilities-styles",
        name: "responsive-utilities-styles"
      }),
      b.route({
        url: "responsive-utilities-print",
        name: "responsive-utilities-print"
      }),
      b.route({
        url: "responsive-utilities-tests",
        name: "responsive-utilities-tests"
      })
    ]),
    b.route(
      { url: "bobrilstrap", name: "bobrilstrap", handler: bobrilstrapPage },
      [
        b.route({ url: "bobrilstrap-top", name: "bobrilstrap-top" }),
        b.route({ url: "bobril", name: "bobril" }),
        b.route({
          url: "bobrilstrap-installation",
          name: "bobrilstrap-installation"
        }),
        b.route({ url: "bobrilstrap-tsx", name: "bobrilstrap-tsx" }),
        b.route({ url: "bobrilstrap-themes", name: "bobrilstrap-themes" })
      ]
    ),
    b.route({ url: "components", name: "components", handler: components }, [
      b.route({ url: "components-top", name: "components-top" }),
      b.route({ url: "glyphicons", name: "glyphicons" }),
      b.route({ url: "glyphicons-glyphs", name: "glyphicons-glyphs" }),
      b.route({ url: "glyphicons-how-to-use", name: "glyphicons-how-to-use" }),
      b.route({ url: "glyphicons-examples", name: "glyphicons-examples" }),
      b.route({ url: "dropdowns", name: "dropdowns" }),
      b.route({ url: "dropdowns-example", name: "dropdowns-example" }),
      b.route({ url: "dropdowns-alignment", name: "dropdowns-alignment" }),
      b.route({ url: "dropdowns-headers", name: "dropdowns-headers" }),
      b.route({ url: "dropdowns-divider", name: "dropdowns-divider" }),
      b.route({ url: "dropdowns-disabled", name: "dropdowns-disabled" }),
      b.route({ url: "btn-groups", name: "btn-groups" }),
      b.route({ url: "btn-groups-single", name: "btn-groups-single" }),
      b.route({ url: "btn-groups-toolbar", name: "btn-groups-toolbar" }),
      b.route({ url: "btn-groups-sizing", name: "btn-groups-sizing" }),
      b.route({ url: "btn-groups-nested", name: "btn-groups-nested" }),
      b.route({ url: "btn-groups-vertical", name: "btn-groups-vertical" }),
      b.route({ url: "btn-groups-justified", name: "btn-groups-justified" }),
      b.route({ url: "btn-dropdowns", name: "btn-dropdowns" }),
      b.route({ url: "btn-dropdowns-single", name: "btn-dropdowns-single" }),
      b.route({ url: "btn-dropdowns-split", name: "btn-dropdowns-split" }),
      b.route({ url: "btn-dropdowns-sizing", name: "btn-dropdowns-sizing" }),
      b.route({ url: "btn-dropdowns-dropup", name: "btn-dropdowns-dropup" }),
      b.route({ url: "input-groups", name: "input-groups" }),
      b.route({ url: "input-groups-basic", name: "input-groups-basic" }),
      b.route({ url: "input-groups-sizing", name: "input-groups-sizing" }),
      b.route({
        url: "input-groups-checkboxes-radios",
        name: "input-groups-checkboxes-radios"
      }),
      b.route({ url: "input-groups-buttons", name: "input-groups-buttons" }),
      b.route({
        url: "input-groups-buttons-dropdowns",
        name: "input-groups-buttons-dropdowns"
      }),
      b.route({
        url: "input-groups-buttons-segmented",
        name: "input-groups-buttons-segmented"
      }),
      b.route({
        url: "input-groups-buttons-multiple",
        name: "input-groups-buttons-multiple"
      }),
      b.route({ url: "nav", name: "nav" }),
      b.route({ url: "nav-tabs", name: "nav-tabs" }),
      b.route({ url: "nav-pills", name: "nav-pills" }),
      b.route({ url: "nav-justified", name: "nav-justified" }),
      b.route({ url: "nav-disabled-links", name: "nav-disabled-links" }),
      b.route({ url: "nav-dropdowns", name: "nav-dropdowns" }),
      b.route({ url: "navbar", name: "navbar" }),
      b.route({ url: "navbar-default", name: "navbar-default" }),
      b.route({ url: "navbar-brand-image", name: "navbar-brand-image" }),
      b.route({ url: "navbar-forms", name: "navbar-forms" }),
      b.route({ url: "navbar-buttons", name: "navbar-buttons" }),
      b.route({ url: "navbar-text", name: "navbar-text" }),
      b.route({ url: "navbar-links", name: "navbar-links" }),
      b.route({
        url: "navbar-component-alignment",
        name: "navbar-component-alignment"
      }),
      b.route({ url: "navbar-fixed-top", name: "navbar-fixed-top" }),
      b.route({ url: "navbar-fixed-bottom", name: "navbar-fixed-bottom" }),
      b.route({ url: "navbar-static-top", name: "navbar-static-top" }),
      b.route({ url: "navbar-inverted", name: "navbar-inverted" }),
      b.route({ url: "breadcrumbs", name: "breadcrumbs" }),
      b.route({ url: "pagination", name: "pagination" }),
      b.route({ url: "pagination-default", name: "pagination-default" }),
      b.route({ url: "pagination-pager", name: "pagination-pager" }),
      b.route({ url: "labels", name: "labels" }),
      b.route({ url: "badges", name: "badges" }),
      b.route({ url: "jumbotron", name: "jumbotron" }),
      b.route({ url: "page-header", name: "page-header" }),
      b.route({ url: "thumbnails", name: "thumbnails" }),
      b.route({ url: "thumbnails-default", name: "thumbnails-default" }),
      b.route({
        url: "thumbnails-custom-content",
        name: "thumbnails-custom-content"
      }),
      b.route({ url: "alerts", name: "alerts" }),
      b.route({ url: "alerts-examples", name: "alerts-examples" }),
      b.route({ url: "alerts-dismissible", name: "alerts-dismissible" }),
      b.route({ url: "alerts-links", name: "alerts-links" }),
      b.route({ url: "progress", name: "progress" }),
      b.route({ url: "progress-basic", name: "progress-basic" }),
      b.route({ url: "progress-label", name: "progress-label" }),
      b.route({ url: "progress-alternatives", name: "progress-alternatives" }),
      b.route({ url: "progress-striped", name: "progress-striped" }),
      b.route({ url: "progress-animated", name: "progress-animated" }),
      b.route({ url: "progress-stacked", name: "progress-stacked" }),
      b.route({ url: "media", name: "media" }),
      b.route({ url: "media-default", name: "media-default" }),
      b.route({ url: "media-list", name: "media-list" }),
      b.route({ url: "list-group", name: "list-group" }),
      b.route({ url: "list-group-basic", name: "list-group-basic" }),
      b.route({ url: "list-group-badges", name: "list-group-badges" }),
      b.route({ url: "list-group-linked", name: "list-group-linked" }),
      b.route({ url: "list-group-buttons", name: "list-group-buttons" }),
      b.route({ url: "list-group-disabled", name: "list-group-disabled" }),
      b.route({
        url: "list-group-contextual-classes",
        name: "list-group-contextual-classes"
      }),
      b.route({
        url: "list-group-custom-content",
        name: "list-group-custom-content"
      }),
      b.route({ url: "panels", name: "panels" }),
      b.route({ url: "panels-basic", name: "panels-basic" }),
      b.route({ url: "panels-heading", name: "panels-heading" }),
      b.route({ url: "panels-footer", name: "panels-footer" }),
      b.route({ url: "panels-alternatives", name: "panels-alternatives" }),
      b.route({ url: "panels-tables", name: "panels-tables" }),
      b.route({ url: "panels-list-group", name: "panels-list-group" }),
      b.route({ url: "responsive-embed", name: "responsive-embed" }),
      b.route({ url: "wells", name: "wells" })
    ]),
    b.route(
      {
        url: "live-components",
        name: "live-components",
        handler: liveComponents
      },
      [
        b.route({ url: "live-components-top", name: "live-components-top" }),
        b.route({ url: "modals", name: "modals" }),
        b.route({ url: "tooltip", name: "tooltip" }),
        b.route({ url: "popover", name: "popover" }),
        b.route({ url: "collapse", name: "collapse" }),
        b.route({ url: "carousel", name: "carousel" }),
        b.route({ url: "affix", name: "affix" })
      ]
    ),
    b.route({ url: "donate", name: "donate", handler: donate }),
    b.routeDefault({ name: "bobrilstrap", handler: bobrilstrapPage })
  ])
);
