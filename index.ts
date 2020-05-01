// eslint-disable-next-line spaced-comment
/// <reference types="bootstrap" />

import * as b from "bobril";
import "./components/bobrilSwipeExtension";

export * from "./components/a";
export * from "./components/abbreviation";
export * from "./components/address";
export * from "./components/affix";
export * from "./components/alert";
export * from "./components/badge";
export * from "./components/blockquote";
export * from "./components/bobrilHelpers";
export * from "./components/breadcrumb";
export * from "./components/breadcrumbItem";
export * from "./components/button";
export * from "./components/buttonGroup";
export * from "./components/buttonToolbar";
export * from "./components/carousel";
export * from "./components/cite";
export * from "./components/collapse";
export * from "./components/code";
export * from "./components/col";
export * from "./components/container";
export * from "./components/checkbox";
export * from "./components/dd";
export * from "./components/del";
export * from "./components/dl";
export * from "./components/dropdown";
export * from "./components/dropdownItem";
export * from "./components/dropdownMenu";
export * from "./components/dt";
export * from "./components/embed";
export * from "./components/element";
export * from "./components/embedResponsive";
export * from "./components/fieldset";
export * from "./components/figure";
export * from "./components/footer";
export * from "./components/form";
export * from "./components/formGroup";
export * from "./components/glyphicon";
export * from "./components/headings";
export * from "./components/helpers";
export * from "./components/helpText";
export * from "./components/iframe";
export * from "./components/image";
export * from "./components/inputCheckbox";
export * from "./components/inputGroup";
export * from "./components/inputGroupAddon";
export * from "./components/inputGroupBtn";
export * from "./components/inputRadio";
export * from "./components/inputText";
export * from "./components/ins";
export * from "./components/italics";
export * from "./components/jumbotron";
export * from "./components/kbd";
export * from "./components/label";
export * from "./components/li";
export * from "./components/listGroup";
export * from "./components/listGroupItem";
export * from "./components/listGroupItemLink";
export * from "./components/listGroupItemText";
export * from "./components/listGroupItemHeading";
export * from "./components/object";
export * from "./components/ol";
export * from "./components/option";
export * from "./components/mark";
export * from "./components/main";
export * from "./components/media";
export * from "./components/mediaContent";
export * from "./components/mediaHeading";
export * from "./components/modal";
export * from "./components/modalTitle";
export * from "./components/nav";
export * from "./components/navbarBrand";
export * from "./components/navbarCollapse";
export * from "./components/navbarHeader";
export * from "./components/navbarNav";
export * from "./components/navbarNavItem";
export * from "./components/pageHeader";
export * from "./components/pager";
export * from "./components/pagerItem";
export * from "./components/pagination";
export * from "./components/paginationItem";
export * from "./components/panel";
export * from "./components/panelBody";
export * from "./components/panelCollapse";
export * from "./components/panelFooter";
export * from "./components/panelGroup";
export * from "./components/panelHeading";
export * from "./components/panelTitle";
export * from "./components/paragraph";
export * from "./components/progress";
export * from "./components/progressBar";
export * from "./components/pill";
export * from "./components/pills";
export * from "./components/popover";
export * from "./components/pre";
export * from "./components/radio";
export * from "./components/responsive";
export * from "./components/responsiveTable";
export * from "./components/row";
export * from "./components/select";
export * from "./components/size";
export * from "./components/span";
export * from "./components/sub";
export * from "./components/sup";
export * from "./components/samp";
export * from "./components/small";
export * from "./components/strong";
export * from "./components/strikethrough";
export * from "./components/tab";
export * from "./components/table";
export * from "./components/tabs";
export * from "./components/tbody";
export * from "./components/td";
export * from "./components/textarea";
export * from "./components/th";
export * from "./components/thead";
export * from "./components/tooltip";
export * from "./components/tr";
export * from "./components/typography";
export * from "./components/ul";
export * from "./components/underlined";
export * from "./components/validations";
export * from "./components/variable";
export * from "./components/video";
export * from "./components/well";

const defaultCss = b.asset("node_modules/bootstrap/dist/css/bootstrap.min.css");

export function init(): b.IBobrilNode {
    b.asset("node_modules/jquery/dist/jquery.min.js");
    b.asset("node_modules/bootstrap/dist/js/bootstrap.min.js");
    b.asset("node_modules/bootstrap-3-typeahead/bootstrap3-typeahead.min.js");
    moveDefaultCssToBeginning();
    return {};
}

function moveDefaultCssToBeginning(): void {
    const links = document.head.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.href.endsWith(defaultCss)) {
            if (i > 0) {
                document.head.removeChild(link);
                document.head.insertBefore(link, links[0]);
            }
            return;
        }
    }
}

init();
