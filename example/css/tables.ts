import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const tables = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Tables",
        id: "tables"
      },
      [
        basicExample(),
        stripedRows(),
        borderedTable(),
        hoverRows(),
        condensedTable(),
        contextualStyles(),
        responsiveTables()
      ]
    );
  }
});

function basicExample(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "tables-example" } }, "Basic example")),
    bs.P({}, [
      `For basic styling—light padding and only horizontal dividers use the `,
      bs.Code({}, "bs.Table({ ... })"),
      ` component. It may seem super redundant, but given the widespread use of tables for other plugins like calendars 
            and date pickers, we've opted to isolate our custom table styles. Columns can be defined as array of `,
      bs.Code({}, "string"),
      ` or `,
      bs.Code({}, "bs.ITdData"),
      ` and headers can be defined as array of `,
      bs.Code({}, "string"),
      ` or `,
      bs.Code({}, "bs.IThData"),
      `.`
    ]),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        caption: "Optional table caption.",
        head: {
          row: { headers: ["#", "First Name", "Last Name", "Username"] }
        },
        body: {
          rows: [
            { columns: ["1", "Mark", "Otto", "@mdo"] },
            { columns: ["2", "Jacob", "Thornton", "@fat"] },
            { columns: ["3", "Larry", "the Bird", "@twitter"] }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    caption: 'Optional table caption.',`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}

function stripedRows(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "tables-striped" } }, "Striped rows")),
    bs.P({}, [
      `Set `,
      bs.Code({}, "striped"),
      ` input data property to add zebra-striping to any table row within the `,
      bs.Code({}, "<tbody>"),
      `.`
    ]),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-tables-striped-ie8" }
      },
      [
        bs.H4({}, "Cross-browser compatibility"),
        bs.P({}, [
          `Striped tables are styled via the `,
          bs.Code({}, ":nth-child"),
          ` CSS selector, which is not available in Internet Explorer 8.`
        ])
      ]
    ),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        striped: true,
        head: {
          row: { headers: ["#", "First Name", "Last Name", "Username"] }
        },
        body: {
          rows: [
            { columns: ["1", "Mark", "Otto", "@mdo"] },
            { columns: ["2", "Jacob", "Thornton", "@fat"] },
            { columns: ["3", "Larry", "the Bird", "@twitter"] }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    caption: 'Optional table caption.',`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}

function borderedTable(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "tables-bordered" } }, "Bordered table")),
    bs.P({}, [
      `Set `,
      bs.Code({}, "bordered"),
      ` for borders on all sides of the table and cells.`
    ]),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        bordered: true,
        head: {
          row: { headers: ["#", "First Name", "Last Name", "Username"] }
        },
        body: {
          rows: [
            { columns: ["1", "Mark", "Otto", "@mdo"] },
            { columns: ["2", "Jacob", "Thornton", "@fat"] },
            { columns: ["3", "Larry", "the Bird", "@twitter"] }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    striped: true,`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}

function hoverRows(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "tables-hover-rows" } }, "Hover rows")),
    bs.P({}, [
      `Set `,
      bs.Code({}, "hover"),
      ` input data property to enable a hover state on table rows within a `,
      bs.Code({}, "<tbody>"),
      `.`
    ]),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        hover: true,
        head: {
          row: { headers: ["#", "First Name", "Last Name", "Username"] }
        },
        body: {
          rows: [
            { columns: ["1", "Mark", "Otto", "@mdo"] },
            { columns: ["2", "Jacob", "Thornton", "@fat"] },
            { columns: ["3", "Larry", "the Bird", "@twitter"] }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    hover: true,`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}

function condensedTable(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "tables-condensed" } }, "Condensed table")),
    bs.P({}, [
      `Set `,
      bs.Code({}, "condensed"),
      ` input data property to make tables more compact by cutting cell padding in half.`
    ]),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        condensed: true,
        head: {
          row: { headers: ["#", "First Name", "Last Name", "Username"] }
        },
        body: {
          rows: [
            { columns: ["1", "Mark", "Otto", "@mdo"] },
            { columns: ["2", "Jacob", "Thornton", "@fat"] },
            { columns: ["3", "Larry", "the Bird", "@twitter"] }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    condensed: true,`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            { columns: ['1', 'Mark', 'Otto', '@mdo'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}

function contextualStyles(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2({ attrs: { id: "tables-contextual-styles" } }, "Contextual styles")
    ),
    bs.P({}, [
      `Use `,
      bs.Code({}, "bs.TableContext"),
      ` styles to color table rows or individual cells.`
    ]),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        head: {
          row: {
            headers: ["#", "Column heading", "Column heading", "Column heading"]
          }
        },
        body: {
          rows: [
            {
              columns: [
                "1",
                "Column content",
                "Column content",
                "@	Column content"
              ],
              context: bs.TableContext.Active
            },
            {
              columns: [
                "2",
                "Column content",
                "Column content",
                "@	Column content"
              ]
            },
            {
              columns: [
                "3",
                "Column content",
                "Column content",
                "@	Column content"
              ],
              context: bs.TableContext.Success
            },
            {
              columns: [
                "4",
                "Column content",
                "Column content",
                "@	Column content"
              ]
            },
            {
              columns: [
                "5",
                "Column content",
                "Column content",
                "@	Column content"
              ],
              context: bs.TableContext.Warning
            },
            {
              columns: [
                "6",
                "Column content",
                "Column content",
                "@	Column content"
              ]
            },
            {
              columns: [
                "7",
                "Column content",
                "Column content",
                "@	Column content"
              ],
              context: bs.TableContext.Danger
            },
            {
              columns: [
                "8",
                "Column content",
                "Column content",
                "@	Column content"
              ]
            },
            {
              columns: [
                "9",
                "Column content",
                "Column content",
                "@	Column content"
              ],
              context: bs.TableContext.Info
            }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            { columns: ['1', ... ], context: bs.TableContext.Active },`,
          bs.E({ tag: "br" }),
          `            { columns: ['2', ... ] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['3', ... ], context: bs.TableContext.Success },`,
          bs.E({ tag: "br" }),
          `            { columns: ['4', ... ] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['5', ... ], context: bs.TableContext.Warning },`,
          bs.E({ tag: "br" }),
          `            { columns: ['6', ... ] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['7', ... ], context: bs.TableContext.Danger },`,
          bs.E({ tag: "br" }),
          `            { columns: ['8', ... ] },`,
          bs.E({ tag: "br" }),
          `            { columns: ['9', ... ], context: bs.TableContext.Info },`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    ),
    bs.E(
      { style: styles.bsExample },
      bs.Table({
        head: {
          row: {
            headers: [
              "#",
              "Column heading",
              "Column heading",
              "Column heading",
              "Column heading",
              "Column heading"
            ]
          }
        },
        body: {
          rows: [
            {
              columns: [
                "1",
                <bs.ITdData>{
                  children: "Column content",
                  context: bs.TableContext.Active
                },
                <bs.ITdData>{
                  children: "Column content",
                  context: bs.TableContext.Success
                },
                <bs.ITdData>{
                  children: "Column content",
                  context: bs.TableContext.Warning
                },
                <bs.ITdData>{
                  children: "Column content",
                  context: bs.TableContext.Danger
                },
                <bs.ITdData>{
                  children: "Column content",
                  context: bs.TableContext.Info
                }
              ]
            }
          ]
        }
      })
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Table({`,
          bs.E({ tag: "br" }),
          `    head: { row: { headers: ['#', 'Column heading', 'Column heading', 'Column heading'] } },`,
          bs.E({ tag: "br" }),
          `    body: {`,
          bs.E({ tag: "br" }),
          `        rows: [`,
          bs.E({ tag: "br" }),
          `            {`,
          bs.E({ tag: "br" }),
          `                columns: [`,
          bs.E({ tag: "br" }),
          `                    '1',`,
          bs.E({ tag: "br" }),
          `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Active },`,
          bs.E({ tag: "br" }),
          `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Success },`,
          bs.E({ tag: "br" }),
          `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Warning },`,
          bs.E({ tag: "br" }),
          `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Danger },`,
          bs.E({ tag: "br" }),
          `                    <bs.ITdData>{ children: 'Column content', context: bs.TableContext.Info }`,
          bs.E({ tag: "br" }),
          `                ]`,
          bs.E({ tag: "br" }),
          `            },`,
          bs.E({ tag: "br" }),
          `        ]`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-tables-context-accessibility" }
      },
      [
        bs.H4({}, "Conveying meaning to assistive technologies"),
        bs.P({}, [
          `Using color to add meaning to a table row or individual cell only provides a visual indication, which will not be 
                conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color 
                is either obvious from the content itself (the visible text in the relevant table row/cell), or is included through 
                alternative means, such as additional text hidden with the `,
          bs.Code({}, "srOnly"),
          ` style from `,
          bs.Code({}, "bs.helpers"),
          `.`
        ])
      ]
    )
  ];
}

function responsiveTables(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2({ attrs: { id: "tables-responsive" } }, "Responsive tables")
    ),
    bs.P({}, [
      `Create responsive tables by `,
      bs.Code({}, "bs.ResponsiveTable({ table: ... })"),
      ` component to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, 
            you will not see any difference in these tables.`
    ]),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-tables-responsive-overflow" }
      },
      [
        bs.H4({}, "Vertical clipping/truncation"),
        bs.P({}, [
          `Responsive tables make use of `,
          bs.Code({}, "overflow-y: hidden"),
          `, which clips off any content that goes beyond the bottom or top edges of the table. In particular, 
                this can clip off dropdown menus and other third-party widgets.`
        ])
      ]
    ),
    bs.E({ style: styles.bsExample }, [
      bs.ResponsiveTable({
        table: {
          head: {
            row: {
              headers: [
                "#",
                "Table heading",
                "Table heading",
                "Table heading",
                "Table heading",
                "Table heading",
                "Table heading"
              ]
            }
          },
          body: {
            rows: [
              {
                columns: [
                  "1",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell"
                ]
              },
              {
                columns: [
                  "2",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell"
                ]
              },
              {
                columns: [
                  "3",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell"
                ]
              }
            ]
          }
        }
      }),
      bs.ResponsiveTable({
        table: {
          bordered: true,
          head: {
            row: {
              headers: [
                "#",
                "Table heading",
                "Table heading",
                "Table heading",
                "Table heading",
                "Table heading",
                "Table heading"
              ]
            }
          },
          body: {
            rows: [
              {
                columns: [
                  "1",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell"
                ]
              },
              {
                columns: [
                  "2",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell"
                ]
              },
              {
                columns: [
                  "3",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell",
                  "Table cell"
                ]
              }
            ]
          }
        }
      })
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ResponsiveTable({`,
          bs.E({ tag: "br" }),
          `    table: {`,
          bs.E({ tag: "br" }),
          `        bordered: true,`,
          bs.E({ tag: "br" }),
          `        head: {`,
          bs.E({ tag: "br" }),
          `            row: { headers: ['#', 'Table heading', ... ] }`,
          bs.E({ tag: "br" }),
          `        },`,
          bs.E({ tag: "br" }),
          `        body: {`,
          bs.E({ tag: "br" }),
          `            rows: [`,
          bs.E({ tag: "br" }),
          `                { columns: ['1', 'Table cell', ... ] },`,
          bs.E({ tag: "br" }),
          `                { columns: ['2', 'Table cell', ... ] },`,
          bs.E({ tag: "br" }),
          `                { columns: ['3', 'Table cell', ... ] }`,
          bs.E({ tag: "br" }),
          `            ]`,
          bs.E({ tag: "br" }),
          `        }`,
          bs.E({ tag: "br" }),
          `    }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}
