import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const buttons = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Buttons",
        id: "buttons"
      },
      [buttonsTags(), options(), sizes(), activeState(), disabledState()]
    );
  }
});

function buttonsTags(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "buttons-tags" } }, "Button tags")),
    bs.P({}, [
      `Use the button `,
      bs.Code({}, "tag"),
      ` input data property to decide for an <a>, <button>, or <input> element`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Form({}, [
        bs.Button({
          label: "Link",
          tag: bs.ButtonTag.A,
          onClick: () => alert("Clicked <a> element!")
        }),
        " ",
        bs.Button({
          label: "Button (default)",
          onClick: () => alert("Clicked <button> element!")
        }),
        " ",
        bs.Button({
          label: "Input",
          tag: bs.ButtonTag.Input,
          onClick: () => alert("Clicked <input> element!")
        }),
        " ",
        bs.Button({
          label: "Submit",
          tag: bs.ButtonTag.Input,
          type: bs.ButtonType.Submit,
          onClick: () => alert("Clicked submit!")
        })
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Button({ label: 'Link', tag: bs.ButtonTag.A, onClick: () => alert('Clicked <a> element!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Button', onClick: () => alert('Clicked <button> element!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ `,
          bs.E({ tag: "br" }),
          `    label: 'Input', `,
          bs.E({ tag: "br" }),
          `    tag: bs.ButtonTag.Input, `,
          bs.E({ tag: "br" }),
          `    onClick: () => alert('Clicked <input> element!') `,
          bs.E({ tag: "br" }),
          `}), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({`,
          bs.E({ tag: "br" }),
          `    label: 'Submit',`,
          bs.E({ tag: "br" }),
          `    tag: bs.ButtonTag.Input, type:`,
          bs.E({ tag: "br" }),
          `    bs.ButtonType.Submit,`,
          bs.E({ tag: "br" }),
          `    onClick: () => alert('Clicked submit!')`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-buttons-context-usage" }
      },
      [
        bs.H4({}, `Context-specific usage`),
        bs.P({}, [
          `While `,
          bs.Code({}, "bs.Button"),
          ` can be used with `,
          bs.Code({}, "a"),
          ` and `,
          bs.Code({}, "button"),
          ` `,
          bs.Code({}, "tag"),
          ` input data property, only `,
          bs.Code({}, "button"),
          `s are supported within our Nav and Navbar components.`
        ])
      ]
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-buttons-ff-height" }
      },
      [
        bs.H4({}, `Cross-browser rendering`),
        bs.P({}, [
          `As a best practice, `,
          bs.Strong({}, [
            `we highly recommend using the `,
            bs.Code({}, "bs.Button"),
            ` (the default) tag whenever possible`
          ]),
          ` to ensure matching cross-browser rendering.`
        ]),
        bs.P({}, [
          `Among other things, there's a bug in Firefox <30 that prevents Bootstrap from setting the `,
          bs.Code({}, "line-height"),
          ` of `,
          bs.Code({}, "<input>"),
          `-based buttons, causing them to not exactly match the height of other buttons on Firefox`
        ])
      ]
    )
  ];
}

function options(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "buttons-options" } }, "Options")),
    bs.P(
      {},
      `Use any of the available button classes to quickly create a styled button.`
    ),
    bs.E({ style: styles.bsExample }, [
      bs.Button({ label: "Default", onClick: () => alert("Clicked!") }),
      " ",
      bs.Button({
        label: "Primary",
        option: bs.ButtonOption.Primary,
        onClick: () => alert("Clicked!")
      }),
      " ",
      bs.Button({
        label: "Success",
        option: bs.ButtonOption.Success,
        onClick: () => alert("Clicked!")
      }),
      " ",
      bs.Button({
        label: "Info",
        option: bs.ButtonOption.Info,
        onClick: () => alert("Clicked!")
      }),
      " ",
      bs.Button({
        label: "Warning",
        option: bs.ButtonOption.Warning,
        onClick: () => alert("Clicked!")
      }),
      " ",
      bs.Button({
        label: "Danger",
        option: bs.ButtonOption.Danger,
        onClick: () => alert("Clicked!")
      }),
      " ",
      bs.Button({
        label: "Link",
        option: bs.ButtonOption.Link,
        onClick: () => alert("Clicked!")
      })
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Button({ label: 'Default', onClick: () => alert('Clicked!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Primary', option: bs.ButtonOption.Primary, onClick: () => alert('Clicked!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Success', option: bs.ButtonOption.Success, onClick: () => alert('Clicked!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Info', option: bs.ButtonOption.Info, onClick: () => alert('Clicked!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Warning', option: bs.ButtonOption.Warning, onClick: () => alert('Clicked!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Danger', option: bs.ButtonOption.Danger, onClick: () => alert('Clicked!') }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Link', option: bs.ButtonOption.Link, onClick: () => alert('Clicked!') })`
        ])
      )
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-buttons-context-usage" }
      },
      [
        bs.H4({}, `Context-specific usage`),
        bs.P({}, [
          `Using color to add meaning to a button only provides a visual indication, which will not be conveyed to users of 
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious 
                from the content itself (the visible text of the button), or is included through alternative means, such as additional 
                text hidden with the `,
          bs.Code({}, "bs.helpers.srOnly"),
          ` style.`
        ])
      ]
    )
  ];
}

const limitedWidthStyle = b.styleDef(
  { maxWidth: "400px" },
  undefined,
  "buttons-limited-width-example"
);

function sizes(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "buttons-sizes" } }, "Sizes")),
    bs.P({}, [
      `Fancy larger or smaller buttons? Set the `,
      bs.Code({}, "size"),
      ` input data property.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.P({}, [
        bs.Button({ label: "Large button", size: bs.Size.Lg }),
        " ",
        bs.Button({
          label: "Large button",
          size: bs.Size.Lg,
          option: bs.ButtonOption.Primary
        })
      ]),
      bs.P({}, [
        bs.Button({ label: "Default button", size: bs.Size.Md }),
        " ",
        bs.Button({ label: "Default button", option: bs.ButtonOption.Primary })
      ]),
      bs.P({}, [
        bs.Button({ label: "Small button", size: bs.Size.Sm }),
        " ",
        bs.Button({
          label: "Small button",
          size: bs.Size.Sm,
          option: bs.ButtonOption.Primary
        })
      ]),
      bs.P({}, [
        bs.Button({ label: "Extra small button", size: bs.Size.Xs }),
        " ",
        bs.Button({
          label: "Extra small button",
          size: bs.Size.Xs,
          option: bs.ButtonOption.Primary
        })
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.P({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Large button', size: bs.Size.Lg }), ' ',`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Large button', size: bs.Size.Lg, option: bs.ButtonOption.Primary })`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.P({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Default button', size: bs.Size.Md }), ' ',`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Default button', option: bs.ButtonOption.Primary })`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.P({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Small button', size: bs.Size.Sm }), ' ',`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Small button', size: bs.Size.Sm, option: bs.ButtonOption.Primary })`,
          bs.E({ tag: "br" }),
          `]),`,
          bs.E({ tag: "br" }),
          `bs.P({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Extra small button', size: bs.Size.Xs }), ' ',`,
          bs.E({ tag: "br" }),
          `    bs.Button({ label: 'Extra small button', size: bs.Size.Xs, option: bs.ButtonOption.Primary`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    ),
    bs.P({}, [
      `Create block level buttons—those that span the full width of a parent by `,
      bs.Code({}, "block"),
      ` input data property.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Well({ style: [bs.helpers.centerBlock, limitedWidthStyle] }, [
        bs.Button({ label: "Block level button", block: true }),
        bs.Button({
          label: "Block level button",
          block: true,
          option: bs.ButtonOption.Primary
        })
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Button({ label: 'Block level button', block: true }),`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Block level button', block: true, option: bs.ButtonOption.Primary })`
        ])
      )
    )
  ];
}

function activeState(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "buttons-active" } }, "Active state")),
    bs.P({}, [
      `Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For <button> elements, 
            this is done via :active. For <a> elements, it's done with .active. However, you may use `,
      bs.Code({}, "active"),
      ` input data property on `,
      bs.Code({}, "bs.Button"),
      `(and set the `,
      bs.Code({}, "aria.pressed"),
      ` property) should you need to replicate the active state programmatically.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Button({
        label: "Primary link",
        option: bs.ButtonOption.Primary,
        size: bs.Size.Lg,
        active: true
      }),
      " ",
      bs.Button({ label: "Link", size: bs.Size.Lg, active: true })
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Button({ label: 'Primary link', option: bs.ButtonOption.Primary, size: bs.Size.Lg, active: true }), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Link', size: bs.Size.Lg, active: true })`
        ])
      )
    )
  ];
}

function disabledState(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "buttons-disabled" } }, "Disabled state")),
    bs.P({}, [
      `Make buttons look unclickable by fading them back with `,
      bs.Code({}, "opacity"),
      `. You can do this by setting the input data property `,
      bs.Code({}, "disabled"),
      `.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Button({
        label: "Primary button",
        option: bs.ButtonOption.Primary,
        size: bs.Size.Lg,
        disabled: true,
        onClick: () => alert("Clicked")
      }),
      " ",
      bs.Button({
        label: "Button",
        size: bs.Size.Lg,
        disabled: true,
        onClick: () => alert("Clicked")
      }),
      bs.Button({
        label: "Primary link",
        option: bs.ButtonOption.Primary,
        size: bs.Size.Lg,
        disabled: true,
        tag: bs.ButtonTag.A,
        onClick: () => alert("Clicked")
      }),
      " ",
      bs.Button({
        label: "Link",
        size: bs.Size.Lg,
        disabled: true,
        tag: bs.ButtonTag.A,
        onClick: () => alert("Clicked")
      })
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Button({`,
          bs.E({ tag: "br" }),
          `    label: 'Primary button',`,
          bs.E({ tag: "br" }),
          `    option: bs.ButtonOption.Primary,`,
          bs.E({ tag: "br" }),
          `    size: bs.Size.Lg,`,
          bs.E({ tag: "br" }),
          `    disabled: true,`,
          bs.E({ tag: "br" }),
          `    onClick: () => alert('Clicked')`,
          bs.E({ tag: "br" }),
          `}), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Button', size: bs.Size.Lg, disabled: true, onClick: () => alert('Clicked') }),`,
          bs.E({ tag: "br" }),
          `bs.Button({`,
          bs.E({ tag: "br" }),
          `    label: 'Primary link',`,
          bs.E({ tag: "br" }),
          `    option: bs.ButtonOption.Primary,`,
          bs.E({ tag: "br" }),
          `    size: bs.Size.Lg,`,
          bs.E({ tag: "br" }),
          `    disabled: true,`,
          bs.E({ tag: "br" }),
          `    tag: bs.ButtonTag.A,`,
          bs.E({ tag: "br" }),
          `    onClick: () => alert('Clicked')`,
          bs.E({ tag: "br" }),
          `}), ' ',`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: 'Link', size: Lg, disabled: true, tag: bs.ButtonTag.A, onClick: () => alert('Clicked') })`
        ])
      )
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-buttons-ie-disabled" }
      },
      [
        bs.H4({}, `Cross-browser compatibility`),
        bs.P({}, [
          `If you set the `,
          bs.Code({}, "disabled"),
          ` property to a `,
          bs.Code({}, "bs.Button"),
          ` Internet Explorer 9 and below will render text gray with a nasty text-shadow that we cannot fix.`
        ])
      ]
    ),
    bs.E(
      {
        style: [styles.bsCallout, styles.bsCalloutDanger],
        attrs: { id: "callout-buttons-disabled-anchor" }
      },
      [
        bs.H4({}, `Link functionality caveat`),
        bs.P({}, [
          `This class uses `,
          bs.Code({}, "pointer-events: none"),
          ` to try to disable the link functionality of `,
          bs.Code({}, "<a>"),
          `s, but that CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet 
                Explorer 11. In addition, even in browsers that do support `,
          bs.Code({}, "pointer-events: none"),
          ` keyboard navigation 
                remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to 
                activate these links. So to be safe, use custom JavaScript to disable such links.`
        ])
      ]
    )
  ];
}
