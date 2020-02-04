import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const pagination = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Pagination",
        id: "pagination",
        lead: [
          `Provide pagination links for your site or app with the multi-page pagination component, or the simpler `,
          b.link(bs.A({}, "pager alternative"), "pagination-pager"),
          `.`
        ]
      },
      [paginationDefault(), pager()]
    );
  }
});

function paginationDefault(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2({ attrs: { id: "pagination-default" } }, "Default pagination")
    ),
    bs.P({}, [
      `Simple pagination inspired by Rdio, great for apps and search results. 
            The large block is hard to miss, easily scalable, and provides large click areas.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Pagination({ aria: { label: "Page navigation" } }, [
        bs.PaginationItem(
          {},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Previous" } },
            bs.Span({ aria: { hidden: true } }, "«")
          )
        ),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "1")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "2")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "3")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "4")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "5")),
        bs.PaginationItem(
          {},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Previous" } },
            bs.Span({ aria: { hidden: true } }, "»")
          )
        )
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Pagination({ aria: { label: 'Page navigation' } }, [`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem(`,
          bs.E({ tag: "br" }),
          `        {},`,
          bs.E({ tag: "br" }),
          `        bs.A(`,
          bs.E({ tag: "br" }),
          `            { href: '...;', aria: { label: 'Previous' } },`,
          bs.E({ tag: "br" }),
          `            bs.Span({ aria: { hidden: true } }, '«')`,
          bs.E({ tag: "br" }),
          `        )`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '1')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '2')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '3')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '4')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '5')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem(`,
          bs.E({ tag: "br" }),
          `        {},`,
          bs.E({ tag: "br" }),
          `        bs.A(`,
          bs.E({ tag: "br" }),
          `            { href: '...;', aria: { label: 'Next' } },`,
          bs.E({ tag: "br" }),
          `            bs.Span({ aria: { hidden: true } }, '»')`,
          bs.E({ tag: "br" }),
          `        )`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `])`,
          bs.E({ tag: "br" })
        ])
      )
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutInfo],
        attrs: { id: "callout-pagination-label" }
      },
      [
        bs.H4({}, [`Labelling the pagination component`]),
        bs.P({}, [
          `The pagination component is be wrapped in a `,
          bs.Code({}, "<nav>"),
          ` element to identify it as a navigation section 
                to screen readers and other assistive technologies. In addition, as a page is likely to have more than one such 
                navigation section already (such as the primary navigation in the header, or a sidebar navigation), it is advisable to 
                provide a descriptive `,
          bs.Code({}, "aria.label"),
          ` for the `,
          bs.Code({}, "bs.Pagination"),
          ` which reflects its 
                purpose.For example, if the pagination component is used to navigate between a set of search results, an appropriate label 
                could be `,
          bs.Code({}, `aria: { label: 'Search results pages' }`),
          `.`
        ])
      ]
    ),
    bs.H3({ id: "disabled-and-active-states" }, "Disabled and active states"),
    bs.P({}, [
      `Links are customizable for different circumstances. Use `,
      bs.Code({}, "disabled"),
      ` input data property for unclickable 
            links and `,
      bs.Code({}, "active"),
      ` to indicate the current page.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Pagination({ aria: { label: "Page navigation" } }, [
        bs.PaginationItem(
          { disabled: true },
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Previous" } },
            bs.Span({ aria: { hidden: true } }, "«")
          )
        ),
        bs.PaginationItem(
          { active: true },
          bs.A({ href: "javascript: void(0);" }, "1")
        ),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "2")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "3")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "4")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "5")),
        bs.PaginationItem(
          {},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Next" } },
            bs.Span({ aria: { hidden: true } }, "»")
          )
        )
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Pagination({ aria: { label: 'Page navigation' } }, [`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem(`,
          bs.E({ tag: "br" }),
          `        { disabled: true },`,
          bs.E({ tag: "br" }),
          `        bs.A(`,
          bs.E({ tag: "br" }),
          `            { href: '...;', aria: { label: 'Previous' } },`,
          bs.E({ tag: "br" }),
          `            bs.Span({ aria: { hidden: true } }, '«')`,
          bs.E({ tag: "br" }),
          `        )`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({ active: true }, bs.A({ href: '...;' }, '1')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '2')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '3')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '4')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem({}, bs.A({ href: '...;' }, '5')),`,
          bs.E({ tag: "br" }),
          `    bs.PaginationItem(`,
          bs.E({ tag: "br" }),
          `        {},`,
          bs.E({ tag: "br" }),
          `        bs.A(`,
          bs.E({ tag: "br" }),
          `            { href: '...;', aria: { label: 'Next' } },`,
          bs.E({ tag: "br" }),
          `            bs.Span({ aria: { hidden: true } }, '»')`,
          bs.E({ tag: "br" }),
          `        )`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `])`,
          bs.E({ tag: "br" })
        ])
      )
    ),
    bs.H3({ id: "sizing" }, "Sizing"),
    bs.P({}, [
      `Fancy larger or smaller pagination? Set the `,
      bs.Code({}, "size"),
      `input data property for additional sizes.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Pagination(
        { size: bs.PaginationSize.Lg, aria: { label: "Page navigation" } },
        [
          bs.PaginationItem({},
            bs.A(
              { href: "javascript: void(0);", aria: { label: "Previous" } },
              bs.Span({ aria: { hidden: true } }, "«")
            )
          ),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "1")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "2")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "3")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "4")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "5")),
          bs.PaginationItem(
            {},
            bs.A(
              { href: "javascript: void(0);", aria: { label: "Next" } },
              bs.Span({ aria: { hidden: true } }, "»")
            )
          )
        ]
      ),
      bs.Pagination({ aria: { label: "Page navigation" } }, [
        bs.PaginationItem({},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Previous" } },
            bs.Span({ aria: { hidden: true } }, "«")
          )
        ),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "1")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "2")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "3")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "4")),
        bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "5")),
        bs.PaginationItem(
          {},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Next" } },
            bs.Span({ aria: { hidden: true } }, "»")
          )
        )
      ]),
      bs.Pagination(
        { size: bs.PaginationSize.Sm, aria: { label: "Page navigation" } },
        [
          bs.PaginationItem({},
            bs.A(
              { href: "javascript: void(0);", aria: { label: "Previous" } },
              bs.Span({ aria: { hidden: true } }, "«")
            )
          ),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "1")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "2")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "3")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "4")),
          bs.PaginationItem({}, bs.A({ href: "javascript: void(0);" }, "5")),
          bs.PaginationItem(
            {},
            bs.A(
              { href: "javascript: void(0);", aria: { label: "Next" } },
              bs.Span({ aria: { hidden: true } }, "»")
            )
          )
        ]
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Pagination({ aria: { label: '...' }, size: bs.PaginationSize.Lg }, [...])`,
          bs.E({ tag: "br" }),
          `bs.Pagination({ aria: { label: '...' } }, [...])`,
          bs.E({ tag: "br" }),
          `bs.Pagination({ aria: { label: '...' }, size: bs.PaginationSize.Sm }, [...])`,
          bs.E({ tag: "br" })
        ])
      )
    )
  ];
}

function pager(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "pagination-pager" } }, "Pager")),
    bs.P({}, [
      `Quick previous and next links for simple pagination implementations with light markup and styles. 
            It's great for simple sites like blogs or magazines.`
    ]),
    bs.H3({ id: "default-example" }, "Default example"),
    bs.P({}, [`By default, the pager centers links.`]),
    bs.E({ style: styles.bsExample }, [
      bs.Pager({ aria: { label: "..." } }, [
        bs.PagerItem(
          {},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Previous" } },
            "Previous"
          )
        ),
        " ",
        bs.PagerItem(
          {},
          bs.A(
            { href: "javascript: void(0);", aria: { label: "Next" } },
            "Next"
          )
        )
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Pager({ aria: { label: '...' } }, [`,
          bs.E({ tag: "br" }),
          `    bs.PagerItem({}, bs.A({ href: '...;', aria: { label: 'Previous' } }, 'Previous')), ' ',`,
          bs.E({ tag: "br" }),
          `    bs.PagerItem({}, bs.A({ href: '...;', aria: { label: 'Next' } }, 'Next'))`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    ),
    bs.H3({ id: "aligned-links" }, "Aligned links"),
    bs.P({}, [`Alternatively, you can align each link to the sides:`]),
    bs.E({ style: styles.bsExample }, [
      bs.Pager({ aria: { label: "..." } }, [
        bs.PagerItem(
          { alignment: bs.PagerItemAlignment.Previous },
          bs.A({ href: "javascript: void(0);" }, [
            bs.Span({ aria: { hidden: true } }, "←"),
            " Older"
          ])
        ),
        bs.PagerItem(
          { alignment: bs.PagerItemAlignment.Next },
          bs.A({ href: "javascript: void(0);" }, [
            "Newer ",
            bs.Span({ aria: { hidden: true } }, " →")
          ])
        )
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Pager({ aria: { label: '...' } }, [`,
          bs.E({ tag: "br" }),
          `    bs.PagerItem(`,
          bs.E({ tag: "br" }),
          `        { alignment: bs.PagerItemAlignment.Previous }, `,
          bs.E({ tag: "br" }),
          `        bs.A({ href: '...;' }, [bs.Span({ aria: { hidden: true } }, '←'), 'Older '])`,
          bs.E({ tag: "br" }),
          `    ), `,
          bs.E({ tag: "br" }),
          `    bs.PagerItem(`,
          bs.E({ tag: "br" }),
          `        { alignment: bs.PagerItemAlignment.Next }, `,
          bs.E({ tag: "br" }),
          `        bs.A({ href: '...;' }, ['Newer ', bs.Span({ aria: { hidden: true } }, ' →')])`,
          bs.E({ tag: "br" }),
          `    ) `,
          bs.E({ tag: "br" }),
          `]) `
        ])
      )
    ),
    bs.H3({ id: "optional-disabled-state" }, "Optional disabled state"),
    bs.P({}, [
      `Pager links also use the `,
      bs.Code({}, "disabled"),
      ` input data property.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Pager({ aria: { label: "..." } }, [
        bs.PagerItem(
          { alignment: bs.PagerItemAlignment.Previous, disabled: true },
          bs.A({ href: "javascript: void(0);" }, [
            bs.Span({ aria: { hidden: true } }, "←"),
            " Older"
          ])
        ),
        bs.PagerItem(
          { alignment: bs.PagerItemAlignment.Next },
          bs.A({ href: "javascript: void(0);" }, [
            "Newer ",
            bs.Span({ aria: { hidden: true } }, " →")
          ])
        )
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Pager({ aria: { label: '...' } }, [`,
          bs.E({ tag: "br" }),
          `    bs.PagerItem(`,
          bs.E({ tag: "br" }),
          `        { alignment: bs.PagerItemAlignment.Previous, disabled: true }, `,
          bs.E({ tag: "br" }),
          `        bs.A({ href: '...;' }, [bs.Span({ aria: { hidden: true } }, '←'), 'Older '])`,
          bs.E({ tag: "br" }),
          `    ), `,
          bs.E({ tag: "br" }),
          `    bs.PagerItem(`,
          bs.E({ tag: "br" }),
          `        { alignment: bs.PagerItemAlignment.Next }, `,
          bs.E({ tag: "br" }),
          `        bs.A({ href: '...;' }, ['Newer ', bs.Span({ aria: { hidden: true } }, ' →')])`,
          bs.E({ tag: "br" }),
          `    ) `,
          bs.E({ tag: "br" }),
          `]) `
        ])
      )
    )
  ];
}
