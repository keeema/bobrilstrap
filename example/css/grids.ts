import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const grids = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Grid system",
        id: "grid",
        lead: `Bootstrap in Bobrilstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 
                columns as the device or viewport size increases. It includes predefined classes for easy layout options, 
                as well as powerful mixins for generating more semantic layouts.`
      },
      [
        introduction(),
        gridOptions(),
        exampleStackHorizontal(),
        exampleFluidContainer(),
        exampleMobileAndDesktop(),
        exampleMobileTabletAndDesktop(),
        exampleColumnWrapping(),
        offsettingColumns(),
        nestingColumns(),
        columnOrdering()
      ]
    );
  }
});

function introduction(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "grid-intro" } }, "Introduction")),
    bs.P(
      {},
      `Grid systems are used for creating page layouts through a series of rows 
        and columns that house your content. Here's how the Bootstrap grid system works:`
    ),
    bs.Ul({}, [
      bs.Li({}, [
        "Rows must be placed within a ",
        bs.Code({}, "bs.Container({}, ...)"),
        " (fixed-width) or ",
        bs.Code({}, "bs.Container({ fluid: true }, ...)"),
        "(full-width) for proper alignment and padding"
      ]),
      bs.Li({}, "Use rows to create horizontal groups of columns."),
      bs.Li(
        {},
        "Content should be placed within columns, and only columns may be immediate children of rows."
      ),
      bs.Li({}, [
        "Predefined grid components like ",
        bs.Code({}, "bs.Row"),
        " and ",
        bs.Code({}, "bs.Col({ size: bs.Size.Xs, span: 4 }, ...)"),
        " are available for quickly making grid layouts."
      ]),
      bs.Li({}, [
        "Columns create gutters (gaps between column content) via ",
        bs.Code({}, "padding"),
        ". That padding is offset in rows for the first and last column via negative margin on ",
        bs.Code({}, "bs.Row")
      ]),
      bs.Li(
        {},
        `The negative margin is why the examples below are outdented. It's so that content within grid columns is lined 
            up with non-grid content.`
      ),
      bs.Li({}, [
        "Grid columns are created by specifying the number of twelve available columns you wish to span. ",
        "For example, three equal columns would use three",
        bs.Code({}, "bs.Col({ size: bs.Size.Xs, span: 4 }, ...)")
      ]),
      bs.Li(
        {},
        `If more than 12 columns are placed within a single row, 
            each group of extra columns will, as one unit, wrap onto a new line.`
      ),
      bs.Li({}, [
        "Grid components apply to devices with screen widths greater than or equal to the breakpoint sizes, ",
        "and override grid classes targeted at smaller devices. Therefore, e.g. applying any ",
        bs.Code({}, "bs.Col({ size: bs.Size.Md, span: ... }, ...)"),
        "component will not only affect its styling on medium devices but also on large devices if it is not defined as ",
        bs.Code(
          {},
          "bs.Col({ cols: [{ size: bs.Size.Md, span: ... }, { size: bs.Size.Lg, span: ... }] }, ...)"
        ),
        "."
      ])
    ]),
    bs.P({}, "Look to the examples for applying these principles to your code.")
  ];
}

function gridOptions(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "grid-options" } }, "Grid options")),
    bs.P(
      {},
      `See how aspects of the Bootstrap grid system work across multiple devices with a handy table.`
    ),
    bs.ResponsiveTable({
      table: {
        bordered: true,
        striped: true,
        head: {
          row: {
            headers: [
              {},
              {
                children: [
                  " Extra small devices ",
                  bs.Small({}, "Phones (<768px)")
                ]
              },
              {
                children: [" Small devices ", bs.Small({}, "Tablets (≥768px)")]
              },
              {
                children: [
                  " Medium devices ",
                  bs.Small({}, "Desktops (≥992px)")
                ]
              },
              {
                children: [
                  " Large devices ",
                  bs.Small({}, "Desktops (≥1200px)")
                ]
              }
            ]
          }
        },
        body: {
          rows: [
            {
              headers: [
                { children: "Grid behavior", style: bs.typography.textNowrap }
              ],
              columns: [
                { children: "Horizontal at all times" },
                {
                  children: "Collapsed to start, horizontal above breakpoints",
                  colspan: 3
                }
              ]
            },
            {
              headers: [
                { children: "Container width", style: bs.typography.textNowrap }
              ],
              columns: [
                { children: "None (auto)" },
                { children: "750px" },
                { children: "970px" },
                { children: "1170px" }
              ]
            },
            {
              headers: [
                { children: "Component data", style: bs.typography.textNowrap }
              ],
              columns: [
                {
                  children: bs.Code({}, "{ size: bs.Size.Xs ... }"),
                  style: bs.typography.textNowrap
                },
                {
                  children: bs.Code({}, "{ size: bs.Size.Sm ... }"),
                  style: bs.typography.textNowrap
                },
                {
                  children: bs.Code({}, "{ size: bs.Size.Md ... }"),
                  style: bs.typography.textNowrap
                },
                {
                  children: bs.Code({}, "{ size: bs.Size.Lg ... }"),
                  style: bs.typography.textNowrap
                }
              ]
            },
            {
              headers: [
                { children: "# of columns", style: bs.typography.textNowrap }
              ],
              columns: [{ children: "12", colspan: 4 }]
            },
            {
              headers: [
                { children: "Column width", style: bs.typography.textNowrap }
              ],
              columns: [
                { children: "Auto" },
                { children: "~62px" },
                { children: "~81px" },
                { children: "~97px" }
              ]
            },
            {
              headers: [
                { children: "Gutter width", style: bs.typography.textNowrap }
              ],
              columns: [
                { children: "30px (15px on each side of a column)", colspan: 4 }
              ]
            },
            {
              headers: [
                { children: "Nestable", style: bs.typography.textNowrap }
              ],
              columns: [{ children: "Yes", colspan: 4 }]
            },
            {
              headers: [
                { children: "Offsets", style: bs.typography.textNowrap }
              ],
              columns: [{ children: "Yes", colspan: 4 }]
            },
            {
              headers: [
                { children: "Column ordering", style: bs.typography.textNowrap }
              ],
              columns: [{ children: "Yes", colspan: 4 }]
            }
          ]
        }
      }
    })
  ];
}

function exampleStackHorizontal(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2(
        { attrs: { id: "grid-example-basic" } },
        "Example: Stacked-to-horizontal"
      )
    ),
    bs.P({}, [
      `Using a single set of `,
      bs.Code({}, "bs.Col({ size: ..., span: ... }, ...)"),
      ` grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices 
            (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any `,
      bs.Code({}, "bs.Row"),
      "."
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 1 },
        "bs.Col({ size: bs.Size.Md, span: 1 }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 8 },
        "bs.Col({ size: bs.Size.Md, span: 8 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 4 },
        "bs.Col({ size: bs.Size.Md, span: 4 }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 4 },
        "bs.Col({ size: bs.Size.Md, span: 4 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 4 },
        "bs.Col({ size: bs.Size.Md, span: 4 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 4 },
        "bs.Col({ size: bs.Size.Md, span: 4 }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 6 },
        "bs.Col({ size: bs.Size.Md, span: 6 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 6 },
        "bs.Col({ size: bs.Size.Md, span: 6 }, ...)"
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 1 }, 'bs.Col({ size: bs.Size.Md, span: 1 }, ...)')`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 8 }, 'bs.Col({ size: bs.Size.Md, span: 8 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 4 }, 'bs.Col({ size: bs.Size.Md, span: 4 }, ...)')`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 4 }, 'bs.Col({ size: bs.Size.Md, span: 4 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 4 }, 'bs.Col({ size: bs.Size.Md, span: 4 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 4 }, 'bs.Col({ size: bs.Size.Md, span: 4 }, ...)')`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 6 }, 'bs.Col({ size: bs.Size.Md, span: 6 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 6 }, 'bs.Col({ size: bs.Size.Md, span: 6 }, ...)')`,
          bs.E({ tag: "br" }),
          `])`,
          bs.E({ tag: "br" })
        ])
      )
    )
  ];
}

function exampleFluidContainer(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2({ attrs: { id: "grid-example-fluid" } }, "Example: Fluid container")
    ),
    bs.P({}, [
      `Turn any fixed-width grid layout into a full-width layout by changing your outermost `,
      bs.Code({}, "bs.Container({}, ...)"),
      ` to `,
      bs.Code(
        { style: bs.typography.textNowrap },
        "bs.Container({ fluid: true }, ...)"
      ),
      `.`
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          "bs.Container({ fluid: true }, [",
          bs.E({ tag: "br" }),
          "   bs.Row({}, [",
          bs.E({ tag: "br" }),
          "      ...",
          bs.E({ tag: "br" }),
          "   ])",
          bs.E({ tag: "br" }),
          "])",
          bs.E({ tag: "br" })
        ])
      )
    )
  ];
}

function exampleMobileAndDesktop(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2(
        { attrs: { id: "grid-example-mixed" } },
        "Example: Mobile and desktop"
      )
    ),
    bs.P({}, [
      `Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid layout at once
             by adding complex input data `,
      bs.Code(
        {},
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: ... }, { size: bs.Size.Md, span: ... }] }, ...)"
      ),
      ` for components. See the example below for a better idea of how it all works.`
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Md, span: 8 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Md, span: 8 }] }, ...)"
      ),
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)"
      ),
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)"
      ),
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { cols: [{ size: bs.Size.Xs, span: 6 }] },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }] }, ...)"
      ),
      bs.Col(
        { cols: [{ size: bs.Size.Xs, span: 6 }] },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }] }, ...)"
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Md, span: 8 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Md, span: 8 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)`,
          bs.E({ tag: "br" }),
          `    )'`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] },,`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    )'`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    )`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function exampleMobileTabletAndDesktop(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2(
        { attrs: { id: "grid-example-mixed-complete" } },
        "Example: Mobile, tablet and desktop"
      )
    ),
    bs.P({}, [
      `Build on the previous example by creating even more dynamic and powerful layouts with tablet `,
      bs.Code({}, "bs.Col({ size: bs.Size.Sm, span: ... }, ...)"),
      ` component input data.`
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        {
          cols: [
            { size: bs.Size.Xs, span: 12 },
            { size: bs.Size.Sm, span: 6 },
            { size: bs.Size.Md, span: 8 }
          ]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 8 }, ...)"
      ),
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] }, ...)"
      ),
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] }, ...)"
      ),
      bs.Col(
        {
          cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }]
        },
        "bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] }, ...)"
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 8 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 12 }, { size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 8 }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 4 }] }, ...)`,
          bs.E({ tag: "br" }),
          `    )'`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    ),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] },,`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Sm, span: 4 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `    )'`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function exampleColumnWrapping(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2(
        { attrs: { id: "grid-example-wrapping" } },
        "Example: Column wrapping"
      )
    ),
    bs.P(
      {},
      `If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.`
    ),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Xs, span: 9 },
        "bs.Col({ size: bs.Size.Xs, span: 9 }, ...)"
      ),
      bs.Col({ size: bs.Size.Xs, span: 4 }, [
        "bs.Col({ size: bs.Size.Xs, span: 4 }, ...)",
        bs.E({ tag: "br" }),
        "Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit."
      ]),
      bs.Col({ size: bs.Size.Xs, span: 6 }, [
        "bs.Col({ size: bs.Size.Xs, span: 6 }, ...)",
        bs.E({ tag: "br" }),
        "Subsequent columns continue along the new line."
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Xs, span: 9 }, 'bs.Col({ size: bs.Size.Xs, span: 9 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Xs, span: 4 }, [`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ size: bs.Size.Xs, span: 4 }, ...)',`,
          bs.E({ tag: "br" }),
          `        bs.E({ tag: 'br' }),`,
          bs.E({ tag: "br" }),
          `        'Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.'`,
          bs.E({ tag: "br" }),
          `    ]),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Xs, span: 6 }, [`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ size: bs.Size.Xs, span: 6 }, ...)',`,
          bs.E({ tag: "br" }),
          `        bs.E({ tag: 'br' }),`,
          bs.E({ tag: "br" }),
          `        'Subsequent columns continue along the new line.'`,
          bs.E({ tag: "br" }),
          `    ])`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function offsettingColumns(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "grid-offsetting" } }, "Offsetting columns")),
    bs.P({}, [
      `Move columns to the right using `,
      bs.Code({}, "offsets"),
      ` input data property. These classes increase the left margin of a column by * columns. `,
      `For example, `,
      bs.Code(
        {},
        "bs.Col({ cols: ..., offsets: { size: bs.Size.Md, span:  }, ...)"
      ),
      ` moves column over four columns.`
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 4 },
        "bs.Col({ size: bs.Size.Md, span: 4 }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 4, offsets: { size: bs.Size.Md, span: 4 } },
        "bs.Col({ size: bs.Size.Md, span: 4, offsets: { size: bs.Size.Md, span: 4 } }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } },
        "bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } },
        "bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } }, ...)"
      )
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 6, offsets: { size: bs.Size.Md, span: 3 } },
        "bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } }, ...)"
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 4 }, 'bs.Col({ size: bs.Size.Md, span: 4 }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 4, offsets: { size: bs.Size.Md, span: 4 } },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ size: bs.Size.Md, span: 4, offsets: { size: bs.Size.Md, span: 4 } }, ...)')`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } }, ...)')`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 6, offsets: { size: bs.Size.Md, span: 3 } },`,
          bs.E({ tag: "br" }),
          `        'bs.Col({ size: bs.Size.Md, span: 3, offsets: { size: bs.Size.Md, span: 3 } }, ...)')`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function nestingColumns(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "grid-nesting" } }, "Nesting columns")),
    bs.P({}, [
      `To nest your content with the default grid, add a new `,
      bs.Code({}, "bs.Row"),
      ` and set of `,
      bs.Code({}, "bs.Col({ ... }, ...)"),
      ` columns within an existing `,
      bs.Code({}, "bs.Col({ ... }, ...)"),
      `column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 `,
      `available columns).`
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col({ size: bs.Size.Sm, span: 9 }, [
        "Level 1: bs.Col({ size: bs.Size.Sm, span: 9 }, ...)",
        bs.Row({}, [
          bs.Col(
            {
              cols: [
                { size: bs.Size.Xs, span: 8 },
                { size: bs.Size.Sm, span: 6 }
              ]
            },
            [
              "Level 2:  bs.Col({ cols: [{ size: bs.Size.Xs, span: 8 }, { size: bs.Size.Sm, span: 6 }] }, ...)"
            ]
          ),
          bs.Col(
            {
              cols: [
                { size: bs.Size.Xs, span: 8 },
                { size: bs.Size.Sm, span: 6 }
              ]
            },
            [
              "Level 2:  bs.Col({ cols: [{ size: bs.Size.Xs, span: 8 }, { size: bs.Size.Sm, span: 6 }] }, ...)"
            ]
          )
        ])
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Sm, span: 9 }, [`,
          bs.E({ tag: "br" }),
          `        'Level 1: bs.Col({ size: bs.Size.Sm, span: 9 }, ...)',`,
          bs.E({ tag: "br" }),
          `        bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `            bs.Col({ cols: [{ size: bs.Size.Xs, span: 8 }, { size: bs.Size.Sm, span: 6 }] }, [`,
          bs.E({ tag: "br" }),
          `                'Level 2:  bs.Col({ cols: [{ size: bs.Size.Xs, span: 8 }, { size: bs.Size.Sm, span: 6 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `            ]),`,
          bs.E({ tag: "br" }),
          `            bs.Col({ cols: [{ size: bs.Size.Xs, span: 8 }, { size: bs.Size.Sm, span: 6 }] }, [`,
          bs.E({ tag: "br" }),
          `                'Level 2:  bs.Col({ cols: [{ size: bs.Size.Xs, span: 8 }, { size: bs.Size.Sm, span: 6 }] }, ...)'`,
          bs.E({ tag: "br" }),
          `            ]),`,
          bs.E({ tag: "br" }),
          `        ])`,
          bs.E({ tag: "br" }),
          `    ])`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function columnOrdering(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2({ attrs: { id: "grid-column-ordering" } }, "Column ordering")
    ),
    bs.P({}, [
      `Easily change the order of our built-in grid columns with `,
      bs.Code({}, "pushes"),
      ` and `,
      bs.Code({}, "pulls"),
      ` modifier properties on component input data.`
    ]),
    bs.Row({ style: styles.showGrid }, [
      bs.Col(
        { size: bs.Size.Md, span: 9, pushes: { size: bs.Size.Md, span: 3 } },
        "bs.Col({ size: bs.Size.Md, span: 9, pushes: { size: bs.Size.Md, span: 3 } }, ...)"
      ),
      bs.Col(
        { size: bs.Size.Md, span: 3, pulls: { size: bs.Size.Md, span: 9 } },
        "{ size: bs.Size.Md, span: 3, pulls: { size: bs.Size.Md, span: 9 } , ...)"
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Row({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 9, pushes: { size: bs.Size.Md, span: 3 } }, `,
          bs.E({ tag: "br" }),
          `        ' bs.Col({ size: bs.Size.Md, span: 9, pushes: { size: bs.Size.Md, span: 3 } }, ...)'),`,
          bs.E({ tag: "br" }),
          `    bs.Col({ size: bs.Size.Md, span: 3, pulls: { size: bs.Size.Md, span: 9 } }, `,
          bs.E({ tag: "br" }),
          `        '{ size: bs.Size.Md, span: 3, pulls: { size: bs.Size.Md, span: 9 } , ...)')`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}
