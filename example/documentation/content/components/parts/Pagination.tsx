import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { justifyContent, Pagination } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const paginationRoute: IRouteWithNavDefinition = {
    url: "pagination",
    name: "pagination",
    label: "Pagination",
    handler: () => <PaginationDoc />,
    subs: [
        {
            url: "overview",
            name: "pagination-overview",
            label: "Overview",
            subs: [],
        },
        {
            url: "working-with-icons",
            name: "pagination-working-with-icons",
            label: "Working with icons",
            subs: [],
        },
        {
            url: "disabled-and-active-states",
            name: "pagination-disabled-and-active-states",
            label: "Disabled and active states",
            subs: [],
        },
        {
            url: "sizing",
            name: "pagination-sizing",
            label: "Sizing",
            subs: [],
        },
        {
            url: "alignment",
            name: "pagination-alignment",
            label: "Alignment",
            subs: [],
        },
    ],
};

export function PaginationDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="pagination">
                <h1>Pagination</h1>
            </Anchor>
            <Lead>
                Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
            </Lead>
            <Anchor name="pagination-overview">
                <h2>Overview</h2>
            </Anchor>
            <p>
                We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while
                providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of
                available links. Use a wrapping element to identify it as a navigation section to screen readers and other assistive
                technologies.
            </p>
            <p>
                In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive aria-label
                for the <code>{`<nav>`}</code> to reflect its purpose. For example, if the pagination component is used to navigate between
                a set of search results, an appropriate label could be aria-label="Search results pages".
            </p>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">Previous</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">Next</Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">Previous</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">Next</Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
            <Anchor name="pagination-working-with-icons">
                <h2>Working with icons</h2>
            </Anchor>
            <p>
                Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support
                with <code>aria</code> attributes.
            </p>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
            <Anchor name="pagination-disabled-and-active-states">
                <h2>Disabled and active states</h2>
            </Anchor>
            <p>
                Pagination links are customizable for different circumstances. Use <code>disabled</code> prop for links that appear
                un-clickable and <code>active</code> prop to indicate the current page.
            </p>
            <p>
                While the <code>disabled</code> style uses <code>pointer-events: none</code> to <em>try</em> to disable the link
                functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard
                navigation. As such, you should always add <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully
                disable their functionality.
            </p>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination>
                        <Pagination.Item disabled>
                            <Pagination.Link href="javascript:void(0)" tabindex={-1} disabled>
                                Previous
                            </Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item active aria-current>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">Next</Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination>
        <Pagination.Item disabled>
            <Pagination.Link href="javascript:void(0)" tabindex={-1} disabled>
                Previous
            </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item active aria-current>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">Next</Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
            <Anchor name="pagination-sizing">
                <h2>Sizing</h2>
            </Anchor>
            <p>
                Fancy larger or smaller pagination? Add <code>size="lg"</code> or <code>size="lg"</code> for additional sizes.
            </p>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination size="lg">
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item active aria-current>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination size="lg">
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item active aria-current>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination size="sm">
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item active aria-current>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination size="sm">
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item active aria-current>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
            <Anchor name="pagination-alignment">
                <h2>Alignment</h2>
            </Anchor>
            <p>Change the alignment of pagination components with flexbox utilities..</p>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination style={justifyContent("center")}>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item active aria-current>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination style={justifyContent("center")}>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item active aria-current>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
            <Example>
                <nav aria-label="Page navigation example">
                    <Pagination style={justifyContent("end")}>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item active aria-current>
                            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
                        </Pagination.Item>
                    </Pagination>
                </nav>
            </Example>
            <Code language="tsx">{`<nav aria-label="Page navigation example">
    <Pagination style={justifyContent("end")>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item active aria-current>
            <Pagination.Link href="javascript:void(0)">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
            <Pagination.Link href="javascript:void(0)">3</Pagination.Link>
        </Pagination.Item>
    </Pagination>
</nav>`}</Code>
        </>
    );
}
