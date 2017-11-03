import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const buttonGroups = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Button groups",
        id: "btn-groups",
        lead: `Group a series of buttons together on a single line with the button group.`
      },
      [
        labeling(),
        example(),
        toolbar(),
        sizing(),
        nesting(),
        vertical(),
        justified()
      ]
    );
  }
});

function labeling(): b.IBobrilChildren {
  return [
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-btn-group-accessibility" }
      },
      [
        bs.H4({}, `Provide a label`),
        bs.P({}, [
          `In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not 
                announce them, despite the presence of the correct role attribute. In the examples provided here, we use `,
          bs.Code({}, "aria.label"),
          `, but alternatives such as `,
          bs.Code({}, "aria.labelledby"),
          ` can also be used.`
        ])
      ]
    )
  ];
}

function example(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "btn-groups-single" } }, "Basic example")),
    bs.P({}, [
      `Wrap a series of `,
      bs.Code({}, "bs.Button"),
      `s in `,
      bs.Code({}, "bs.ButtonGroup"),
      `.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup({}, [
        bs.Button({ label: "Left" }),
        bs.Button({ label: "Middle" }),
        bs.Button({ label: "Right" })
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({}, [`,
          bs.E({ tag: "br" }),
          `   bs.Button({ label: 'Left' }),`,
          bs.E({ tag: "br" }),
          `   bs.Button({ label: 'Middle' }),`,
          bs.E({ tag: "br" }),
          `   bs.Button({ label: 'Right' })`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function toolbar(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "btn-groups-toolbar" } }, "Button toolbar")),
    bs.P({}, [
      `Combine sets of `,
      bs.Code({}, "bs.ButtonGroup"),
      ` into a `,
      bs.Code({}, "bs.ButtonToolbar"),
      ` for more complex components..`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonToolbar({}, [
        bs.ButtonGroup({}, [
          bs.Button({ label: "1" }),
          bs.Button({ label: "2" }),
          bs.Button({ label: "3" }),
          bs.Button({ label: "4" })
        ]),
        bs.ButtonGroup({}, [
          bs.Button({ label: "5" }),
          bs.Button({ label: "6" }),
          bs.Button({ label: "7" })
        ]),
        bs.ButtonGroup({}, [bs.Button({ label: "8" })])
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonToolbar({}, [`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, ...),`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, ...),`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, ...)`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function sizing(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "btn-groups-sizing" } }, "Sizing")),
    bs.P({}, [
      `Instead of applying button sizing classes to every `,
      bs.Code({}, "bs.Button"),
      ` in a group, just set `,
      bs.Code({}, "size"),
      ` input data property on each `,
      bs.Code({}, "bs.ButtonGroup"),
      `, including when nesting multiple groups.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup({ size: bs.ButtonGroupSize.Lg }, [
        bs.Button({ label: "Left" }),
        bs.Button({ label: "Middle" }),
        bs.Button({ label: "Right" })
      ]),
      bs.E({ tag: "br" }),
      bs.ButtonGroup({}, [
        bs.Button({ label: "Left" }),
        bs.Button({ label: "Middle" }),
        bs.Button({ label: "Right" })
      ]),
      bs.E({ tag: "br" }),
      bs.ButtonGroup({ size: bs.ButtonGroupSize.Sm }, [
        bs.Button({ label: "Left" }),
        bs.Button({ label: "Middle" }),
        bs.Button({ label: "Right" })
      ]),
      bs.E({ tag: "br" }),
      bs.ButtonGroup({ size: bs.ButtonGroupSize.Xs }, [
        bs.Button({ label: "Left" }),
        bs.Button({ label: "Middle" }),
        bs.Button({ label: "Right" })
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({ size: bs.ButtonGroupSize.Lg }, ...),`,
          bs.E({ tag: "br" }),
          `bs.ButtonGroup({}, ...),`,
          bs.E({ tag: "br" }),
          `bs.ButtonGroup({ size: bs.ButtonGroupSize.Sm }, ...),`,
          bs.E({ tag: "br" }),
          `bs.ButtonGroup({ size: bs.ButtonGroupSize.Xs }, ...)`
        ])
      )
    )
  ];
}

function nesting(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "btn-groups-nested" } }, "Nesting")),
    bs.P({}, [
      `Place a `,
      bs.Code({}, "bs.ButtonGroup"),
      ` within another `,
      bs.Code({}, "bs.ButtonGroup"),
      ` when you want dropdown menus mixed with a series of buttons.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup({}, [
        bs.Button({ label: "1" }),
        bs.Button({ label: "2" }),
        bs.ButtonGroup({}, [
          bs.Button({ label: "Dropdown", variant: bs.ButtonVariant.Dropdown }),
          bs.DropdownMenu({}, [
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            ),
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            )
          ])
        ])
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: '1' }),`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: '2' }),`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, [`,
          bs.E({ tag: "br" }),
          `        bs.Button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),`,
          bs.E({ tag: "br" }),
          `        bs.DropdownMenu({}, [`,
          bs.E({ tag: "br" }),
          `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Dropdown link')),`,
          bs.E({ tag: "br" }),
          `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Dropdown link')),`,
          bs.E({ tag: "br" }),
          `        ])`,
          bs.E({ tag: "br" }),
          `    ])`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    ),
    bs.P({}, [
      `You can use a simplified `,
      bs.Code({}, "bs.Dropdown"),
      ` component with defined`,
      bs.Code({}, "bs.ButtonGroup"),
      ` property directly as well.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup({}, [
        bs.Button({ label: "1" }),
        bs.Button({ label: "2" }),
        bs.Dropdown({ buttonGroup: true, button: { label: "Dropdown" } }, [
          bs.DropdownMenu({}, [
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            ),
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            )
          ])
        ])
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: '1' }),`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: '2' }),`,
          bs.E({ tag: "br" }),
          `    bs.Dropdown({ buttonGroup: true, button: { label: 'Dropdown' } }, [`,
          bs.E({ tag: "br" }),
          `        bs.DropdownMenu({}, [`,
          bs.E({ tag: "br" }),
          `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Dropdown link')),`,
          bs.E({ tag: "br" }),
          `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Dropdown link')),`,
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

function vertical(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2({ attrs: { id: "btn-groups-vertical" } }, "Vertical variation")
    ),
    bs.P({}, [
      `Make a set of buttons appear vertically stacked rather than horizontally. `,
      bs.Strong(
        { style: bs.helpers.text.danger },
        `Split button dropdowns are not supported here.`
      )
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup({ vertical: true }, [
        bs.Button({ label: "Button" }),
        bs.Button({ label: "Button" }),
        bs.ButtonGroup({}, [
          bs.Button({ label: "Dropdown", variant: bs.ButtonVariant.Dropdown }),
          bs.DropdownMenu({}, [
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            ),
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            )
          ])
        ]),
        bs.Button({ label: "Button" }),
        bs.Button({ label: "Button" }),
        ,
        bs.ButtonGroup({}, [
          bs.Button({ label: "Dropdown", variant: bs.ButtonVariant.Dropdown }),
          bs.DropdownMenu({}, [
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            ),
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            )
          ])
        ]),
        ,
        bs.ButtonGroup({}, [
          bs.Button({ label: "Dropdown", variant: bs.ButtonVariant.Dropdown }),
          bs.DropdownMenu({}, [
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            ),
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            )
          ])
        ]),
        bs.ButtonGroup({}, [
          bs.Button({ label: "Dropdown", variant: bs.ButtonVariant.Dropdown }),
          bs.DropdownMenu({}, [
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            ),
            bs.DropdownItem(
              {},
              bs.A({ href: "javascript:void(0)" }, "Dropdown link")
            )
          ])
        ])
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({ vertical: true }, [`,
          bs.E({ tag: "br" }),
          `    ...`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}

function justified(): b.IBobrilChildren {
  return [
    b.anchor(
      bs.H2(
        { attrs: { id: "btn-groups-justified" } },
        "Justified button groups"
      )
    ),
    bs.P({}, [
      `Make a group of buttons stretch at equal sizes to span the entire width of its parent. 
            Also works with button dropdowns within the button group.`
    ]),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-btn-group-justified-dbl-border" }
      },
      [
        bs.H4({}, `Handling borders`),
        bs.P({}, [
          `Due to the specific HTML and CSS used to justify buttons (namely `,
          bs.Code({}, "display: table-cell"),
          `), the borders between them are doubled. In regular button groups, `,
          bs.Code({}, "margin-left: -1px"),
          ` is used to stack the borders instead of removing them. However, `,
          bs.Code({}, "margin"),
          ` doesn't work with `,
          bs.Code({}, "display: table-cell"),
          `. As a result, depending on your customizations to Bootstrap, you may wish to remove or re-color the borders.`
        ])
      ]
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-btn-group-ie8-border" }
      },
      [
        bs.H4({}, `IE8 and borders`),
        bs.P({}, [
          `Internet Explorer 8 doesn't render borders on buttons in a justified button group, whether it's on `,
          bs.Code({}, "<a>"),
          ` or `,
          bs.Code({}, "<button>"),
          ` elements. To get around that, wrap each button in another .btn-group.`
        ]),
        bs.P({}, [`See #12476 for more information.`])
      ]
    ),
    bs.H4({}, ["With ", bs.Code({}, "<a>"), " elements"]),
    bs.P({}, [
      `Just wrap a series of `,
      bs.Code({}, "bs.Button"),
      `s in `,
      bs.Code({}, "bs.ButtonGroup({ justified: true }, ...)"),
      `.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup(
        { justified: true, aria: { label: "Justified button group" } },
        [
          bs.Button({ tag: bs.ButtonTag.A, label: "Left" }),
          bs.Button({ tag: bs.ButtonTag.A, label: "Middle" }),
          bs.Button({ tag: bs.ButtonTag.A, label: "Right" })
        ]
      ),
      bs.E({ tag: "br" }),
      bs.ButtonGroup(
        {
          justified: true,
          aria: { label: "Justified button group with nested dropdown" }
        },
        [
          bs.Button({ tag: bs.ButtonTag.A, label: "Left" }),
          bs.Button({ tag: bs.ButtonTag.A, label: "Middle" }),
          bs.ButtonGroup({}, [
            bs.Button({
              tag: bs.ButtonTag.A,
              label: "Dropdown",
              variant: bs.ButtonVariant.Dropdown
            }),
            bs.DropdownMenu({}, [
              bs.DropdownItem(
                {},
                bs.A({ href: "javascript:void(0)" }, "Action")
              ),
              bs.DropdownItem(
                {},
                bs.A({ href: "javascript:void(0)" }, "Another action")
              ),
              bs.DropdownItem(
                {},
                bs.A({ href: "javascript:void(0)" }, "Something else here")
              ),
              bs.DropdownItem({ header: true }, "Dropdown header"),
              bs.DropdownItem(
                {},
                bs.A({ href: "javascript:void(0)" }, "Separated link")
              )
            ])
          ])
        ]
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({ justified: true }, [`,
          bs.E({ tag: "br" }),
          `    ...`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    ),
    bs.H4({}, ["With ", bs.Code({}, "<button>"), " elements"]),
    bs.P({}, [
      `To use justified button groups with `,
      bs.Code({}, "<button>"),
      ` elements, `,
      bs.Strong({ style: bs.helpers.text.danger }, [
        `you must wrap each button in a `,
        bs.Code({}, "bs.ButtonGroup")
      ]),
      `. Most browsers don't properly apply our CSS for justification to `,
      bs.Code({}, "<button>"),
      ` elements, but since we support button dropdowns, we can work around that.`
    ]),

    bs.E({ style: styles.bsExample }, [
      bs.ButtonGroup(
        { justified: true, aria: { label: "Justified button group" } },
        [
          bs.ButtonGroup({}, bs.Button({ label: "Left" })),
          bs.ButtonGroup({}, bs.Button({ label: "Middle" })),
          bs.ButtonGroup({}, bs.Button({ label: "Right" }))
        ]
      )
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.ButtonGroup({ justified: true }, [`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, bs.Button({ label: 'Left' })),`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, bs.Button({ label: 'Middle' })),`,
          bs.E({ tag: "br" }),
          `    bs.ButtonGroup({}, bs.Button({ label: 'Right' }))`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}
