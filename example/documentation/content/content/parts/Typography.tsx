import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    Blockquote,
    Col,
    displayHeading,
    Figure,
    heading,
    initialism,
    lead,
    List,
    Row,
    textAlign,
    textColor,
    text,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const typographyRoute: IRouteWithNavDefinition = {
    url: "typography",
    name: "typography",
    label: "Typography",
    handler: () => <TypographyDoc />,
    subs: [
        {
            url: "global-settings",
            name: "typography-global-settings",
            label: "Global settings",
            subs: [],
        },
        {
            url: "headings",
            name: "typography-headings",
            label: "Headings",
            subs: [
                {
                    url: "customizing-headings",
                    name: "typography-headings-customizing-headings",
                    label: "Customizing headings",
                    subs: [],
                },
            ],
        },
        {
            url: "display-headings",
            name: "typography-display-headings",
            label: "Display headings",
            subs: [],
        },
        {
            url: "lead",
            name: "typography-lead",
            label: "Lead",
            subs: [],
        },
        {
            url: "inline-text-elements",
            name: "typography-inline-text-elements",
            label: "Inline text elements",
            subs: [],
        },
        {
            url: "text-utilities",
            name: "typography-text-utilities",
            label: "Text utilities",
            subs: [],
        },
        {
            url: "abbreviations",
            name: "typography-abbreviations",
            label: "Abbreviations",
            subs: [],
        },
        {
            url: "blockquotes",
            name: "typography-blockquotes",
            label: "Blockquotes",
            subs: [
                {
                    url: "naming-source",
                    name: "typography-blockquotes-naming-source",
                    label: "Naming a source",
                    subs: [],
                },
                {
                    url: "alignment",
                    name: "typography-blockquotes-alignment",
                    label: "Alignment",
                    subs: [],
                },
            ],
        },
        {
            url: "lists",
            name: "typography-lists",
            label: "Lists",
            subs: [
                {
                    url: "unstyled",
                    name: "typography-lists-unstyled",
                    label: "Unstyled",
                    subs: [],
                },
                {
                    url: "inline",
                    name: "typography-lists-inline",
                    label: "Inline",
                    subs: [],
                },
                {
                    url: "description-list-alignment",
                    name: "typography-lists-description-list-alignment",
                    label: "Description list alignment",
                    subs: [],
                },
            ],
        },
        {
            url: "responsive-font-sizes",
            name: "typography-responsive-font-sizes",
            label: "Responsive font sizes",
            subs: [],
        },
    ],
};

export function TypographyDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="typography">
                <h1>Typography</h1>
            </Anchor>
            <Lead>Documentation and examples for typography, including global settings, headings, body text, lists, and more.</Lead>
            <Anchor name="typography-global-settings">
                <h2>Global settings</h2>
            </Anchor>
            <p>Basic global display, typography, and link styles are set. When more control is needed, check out the textual utility.</p>
            <Anchor name="typography-headings">
                <h2>Headings</h2>
            </Anchor>
            <p>
                All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.
            </p>
            <Example>
                <h1>h1 heading</h1>
                <h2>h2 heading</h2>
                <h3>h3 heading</h3>
                <h4>h4 heading</h4>
                <h5>h5 heading</h5>
                <h6>h6 heading</h6>
            </Example>
            <Code language="tsx">{`<h1>h1 heading</h1>
<h2>h2 heading</h2>
<h3>h3 heading</h3>
<h4>h4 heading</h4>
<h5>h5 heading</h5>
<h6>h6 heading</h6>`}</Code>
            <p>
                <code>heading(1)</code> through <code>heading(6)</code> utilities are also available, for when you want to match the font
                styling of a heading but cannot use the associated HTML element.
            </p>
            <Example>
                <p style={heading(1)}>h1 heading</p>
                <p style={heading(2)}>h2 heading</p>
                <p style={heading(3)}>h3 heading</p>
                <p style={heading(4)}>h4 heading</p>
                <p style={heading(5)}>h5 heading</p>
                <p style={heading(6)}>h6 heading</p>
            </Example>
            <Code language="tsx">{`<p style={heading(1)}>h1 heading</p>
<p style={heading(2)}>h2 heading</p>
<p style={heading(3)}>h3 heading</p>
<p style={heading(4)}>h4 heading</p>
<p style={heading(5)}>h5 heading</p>
<p style={heading(6)}>h6 heading</p>`}</Code>
            <Anchor name="typography-headings-customizing-headings">
                <h3>Customizing headings</h3>
            </Anchor>
            <p>Use the included utilities to recreate the small secondary heading text from Bootstrap 3.</p>
            <Example>
                <h3>
                    Fancy display heading <small style={textColor("muted")}> With faded secondary text</small>
                </h3>
            </Example>
            <Code language="tsx">{`<h3>
    Fancy display heading <small style={textColor("muted")}> With faded secondary text</small>
</h3>`}</Code>
            <Anchor name="typography-display-headings">
                <h2>Display headings</h2>
            </Anchor>
            <p>
                Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand
                out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.
            </p>
            <Example>
                <h1 style={displayHeading(1)}>Display 1</h1>
                <h1 style={displayHeading(2)}>Display 2</h1>
                <h1 style={displayHeading(3)}>Display 3</h1>
                <h1 style={displayHeading(4)}>Display 4</h1>
                <h1 style={displayHeading(5)}>Display 5</h1>
                <h1 style={displayHeading(6)}>Display 6</h1>
            </Example>
            <Code language="tsx">{`<h1 style={displayHeading(1)}>Display 1</h1>
<h1 style={displayHeading(2)}>Display 2</h1>
<h1 style={displayHeading(3)}>Display 3</h1>
<h1 style={displayHeading(4)}>Display 4</h1>
<h1 style={displayHeading(5)}>Display 5</h1>
<h1 style={displayHeading(6)}>Display 6</h1>`}</Code>
            <Anchor name="typography-lead">
                <h2>Display headings</h2>
            </Anchor>
            <p>Make a paragraph stand out by adding.</p>
            <Example>
                <p style={lead}>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                </p>
            </Example>
            <Code language="tsx">{`<p style={lead}>
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>`}</Code>
            <Anchor name="typography-inline-text-elements">
                <h2>Inline text elements</h2>
            </Anchor>
            <p>Styling for common inline HTML5 elements.</p>
            <Example>
                <p>
                    You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                    <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p>
                    <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
                <p>
                    <ins>This line of text is meant to be treated as an addition to the document.</ins>
                </p>
                <p>
                    <u>This line of text will render as underlined.</u>
                </p>
                <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>
                    <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                    <em>This line rendered as italicized text.</em>
                </p>
            </Example>
            <Code language="tsx">{`<p>
                    You can use the mark tag to <mark>highlight</mark> text.
</p>
<p>
    <del>This line of text is meant to be treated as deleted text.</del>
</p>
<p>
    <s>This line of text is meant to be treated as no longer accurate.</s>
</p>
<p>
    <ins>This line of text is meant to be treated as an addition to the document.</ins>
</p>
<p>
    <u>This line of text will render as underlined.</u>
</p>
<p>
    <small>This line of text is meant to be treated as fine print.</small>
</p>
<p>
    <strong>This line rendered as bold text.</strong>
</p>
<p>
    <em>This line rendered as italicized text.</em>
</p>`}</Code>
            <p>Beware that those tags should be used for semantic purpose:</p>
            <ul>
                <li>
                    <code>&lt;mark&gt;</code> represents text which is marked or highlighted for reference or notation purposes.
                </li>
                <li>
                    <code>&lt;small&gt;</code> represents side-comments and small print, like copyright and legal text.
                </li>
                <li>
                    <code>&lt;s&gt;</code> represents element that are no longer relevant or no longer accurate.
                </li>
                <li>
                    <code>&lt;u&gt;</code> represents a span of inline text which should be rendered in a way that indicates that it has a
                    non-textual annotation.
                </li>
            </ul>
            <p>If you want to style your text, you should use the following styles instead:</p>
            <ul>
                <li>
                    <code>mark</code> will apply the same styles as <code>&lt;mark&gt;</code>.
                </li>
                <li>
                    <code>small</code> will apply the same styles as <code>&lt;small&gt;</code>.
                </li>
                <li>
                    <code>textDecoration("underline")</code> will apply the same styles as <code>&lt;u&gt;</code>.
                </li>
                <li>
                    <code>textDecoration("line-through")</code> will apply the same styles as <code>&lt;s&gt;</code>.
                </li>
            </ul>
            <p>
                While not shown above, feel free to use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> in HTML5. <code>&lt;b&gt;</code>{" "}
                is meant to highlight words or phrases without conveying additional importance, while <code>&lt;i&gt;</code> is mostly for
                voice, technical terms, etc.
            </p>
            <Anchor name="typography-text-utilities">
                <h2>Text utilities</h2>
            </Anchor>
            <p>
                Change text alignment, transform, style, weight, line-height, decoration and color with our{" "}
                <b.Link name="text">text utilities</b.Link> and <b.Link name="colors">color utilities</b.Link>.
            </p>
            <Anchor name="typography-abbreviations">
                <h2>Abbreviations</h2>
            </Anchor>
            <p>
                Stylized implementation of HTML’s <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded
                version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and
                to users of assistive technologies.
            </p>
            <p>
                Add <code>initialism</code> style to an abbreviation for a slightly smaller font-size.
            </p>
            <Example>
                <p>
                    <abbr title="attribute">attr</abbr>
                </p>
                <p>
                    <abbr title="HyperText Markup Language" style={initialism}>
                        HTML
                    </abbr>
                </p>
            </Example>
            <Code language="tsx">
                {`<p>
    <abbr title="attribute">attr</abbr>
</p>
<p>
    <abbr title="HyperText Markup Language" style={initialism}>
        HTML
    </abbr>
</p>`}
            </Code>
            <Anchor name="typography-blockquotes">
                <h2>Blockquotes</h2>
            </Anchor>
            <p>
                For quoting blocks of content from another source within your document. Wrap <code>{`<Blockquotes>`}</code> around any{" "}
                <abbr title="HyperText Markup Language">HTML</abbr> as the quote.
            </p>
            <Example>
                <Blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </Blockquote>
            </Example>
            <Code language="tsx">
                {`<Blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</Blockquote>`}
            </Code>
            <Anchor name="typography-blockquotes-naming-source">
                <h3>Naming a source</h3>
            </Anchor>
            <p>
                The HTML spec requires that blockquote attribution be placed outside the <code>&lt;blockquote&gt;</code>. When providing
                attribution, wrap your <code>{`<Blockquote>`}</code> in a <code>&lt;figure&gt;</code> or <code>{`<Figure>`}</code> and use a{" "}
                <code>{`<Blockquote.Footer>`}</code> or a block level element e.g., <code>{`<Blockquote.Footer as="p">`}</code>. Be sure to
                wrap the name of the source work in <code>&lt;cite&gt;</code> as well.
            </p>
            <Example>
                <Figure>
                    <Blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </Blockquote>
                    <Blockquote.Footer>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </Blockquote.Footer>
                </Figure>
            </Example>
            <Code language="tsx">
                {`<Figure>
    <Blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </Blockquote>
    <Blockquote.Footer>
        Someone famous in <cite title="Source Title">Source Title</cite>
    </Blockquote.Footer>
</Figure>`}
            </Code>
            <Anchor name="typography-blockquotes-alignment">
                <h3>Alignment</h3>
            </Anchor>
            <p>Use text utilities as needed to change the alignment of your blockquote.</p>
            <Example>
                <Figure style={textAlign("center")}>
                    <Blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </Blockquote>
                    <Blockquote.Footer>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </Blockquote.Footer>
                </Figure>
            </Example>
            <Code language="tsx">
                {`<Figure style={textAlign("center")}>
    <Blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </Blockquote>
    <Blockquote.Footer>
        Someone famous in <cite title="Source Title">Source Title</cite>
    </Blockquote.Footer>
</Figure>`}
            </Code>
            <Anchor name="typography-lists">
                <h2>Lists</h2>
            </Anchor>
            <Anchor name="typography-lists-unstyled">
                <h3>Unstyled</h3>
            </Anchor>
            <p>
                Remove the default <code>list-style</code> and left margin on list items (immediate children only).{" "}
                <strong>This only applies to immediate children list items</strong>, meaning you will need to use the component for any
                nested lists as well.
            </p>
            <Example>
                <List unstyled>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>
                        Nulla volutpat aliquam velit
                        <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </List>
            </Example>
            <Code language="tsx">
                {`<List unstyled>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
        Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</List>`}
            </Code>
            <Anchor name="typography-lists-inline">
                <h3>Inline</h3>
            </Anchor>
            <p>
                Remove a list’s bullets and apply some light <code>margin</code> with a combination of two components,{" "}
                <code>{`<List inline>`}</code> and <code>{`<List.InlineItem>`}</code>.
            </p>
            <Example>
                <List inline>
                    <List.InlineItem>Lorem ipsum</List.InlineItem>
                    <List.InlineItem>Phasellus iaculis</List.InlineItem>
                    <List.InlineItem>Nulla volutpat</List.InlineItem>
                </List>
            </Example>
            <Code language="tsx">
                {`<List inline>
    <List.InlineItem>Lorem ipsum</List.InlineItem>
    <List.InlineItem>Phasellus iaculis</List.InlineItem>
    <List.InlineItem>Nulla volutpat</List.InlineItem>
</List>`}
            </Code>
            <Anchor name="typography-lists-description-list-alignment">
                <h3>Description list alignment</h3>
            </Anchor>
            <p>
                Align terms and descriptions horizontally by using our grid system’s predefined styles (or semantic mixins). For longer
                terms, you can optionally add a <code>text("truncate")</code> style to truncate the text with an ellipsis.
            </p>
            <Example>
                <Row as="dl">
                    <Col as="dt" sm={3}>
                        Description lists
                    </Col>
                    <Col as="dd" sm={9}>
                        A description list is perfect for defining terms.
                    </Col>

                    <Col as="dt" sm={3}>
                        Euismod
                    </Col>
                    <Col as="dd" sm={9}>
                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                    </Col>

                    <Col as="dt" sm={3}>
                        Malesuada porta
                    </Col>
                    <Col as="dd" sm={9}>
                        Etiam porta sem malesuada magna mollis euismod.
                    </Col>

                    <Col as="dt" sm={3} style={text("truncate")}>
                        Truncated term is truncated
                    </Col>
                    <Col as="dd" sm={9}>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </Col>

                    <Col as="dt" sm={3}>
                        Nesting
                    </Col>
                    <Col as="dd" sm={9}>
                        <Row as="dl">
                            <Col as="dt" sm={4}>
                                Nested definition list
                            </Col>
                            <Col as="dd" sm={8}>
                                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">
                {`<Row as="dl">
    <Col as="dt" sm={3}>
        Description lists
    </Col>
    <Col as="dd" sm={9}>
        A description list is perfect for defining terms.
    </Col>

    <Col as="dt" sm={3}>
        Euismod
    </Col>
    <Col as="dd" sm={9}>
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
    </Col>

    <Col as="dt" sm={3}>
        Malesuada porta
    </Col>
    <Col as="dd" sm={9}>
        Etiam porta sem malesuada magna mollis euismod.
    </Col>

    <Col as="dt" sm={3} style={text("truncate")}>
        Truncated term is truncated
    </Col>
    <Col as="dd" sm={9}>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    </Col>

    <Col as="dt" sm={3}>
        Nesting
    </Col>
    <Col as="dd" sm={9}>
        <Row as="dl">
            <Col as="dt" sm={4}>
                Nested definition list
            </Col>
            <Col as="dd" sm={8}>
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
            </Col>
        </Row>
    </Col>
</Row>`}
            </Code>
            <Anchor name="typography-responsive-font-sizes">
                <h3>Responsive font sizes</h3>
            </Anchor>
            <p>Responsive font sizes are enabled by default, allowing text to scale more naturally across device and viewport sizes.</p>
        </>
    );
}
