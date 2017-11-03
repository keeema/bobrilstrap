import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const codes = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Code",
        id: "code"
      },
      [inline(), userInput(), basicBlock(), variables(), sampleOutput()]
    );
  }
});

function inline(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "code-inline" } }, "Inline")),
    bs.P({}, [
      `Wrap inline snippets of code with  `,
      bs.Code({}, "bs.Code"),
      `.`
    ]),
    bs.E({ style: styles.bsExample }, [
      "For example, ",
      bs.Code({}, "section"),
      " should be wrapped as inline."
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `['For example, ', bs.Code({}, 'section'), ' should be wrapped as inline.']`
        ])
      )
    )
  ];
}

function userInput(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "code-user-input" } }, "User input")),
    bs.P({}, [
      `Use the  `,
      bs.Code({}, "bs.Kbd"),
      ` to indicate input that is typically entered via keyboard.`
    ]),
    bs.E({ style: styles.bsExample }, [
      "To switch directories, type ",
      bs.Kbd({}, "cd"),
      " followed by the name of the directory.",
      bs.E({ tag: "br" }),
      "To edit settings, press ",
      bs.Kbd({}, "ctrl + ,")
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `[`,
          bs.E({ tag: "br" }),
          `   'To switch directories, type ', kbd({}, 'cd'), ' followed by the name of the directory.',`,
          bs.E({ tag: "br" }),
          `   bs.E({ tag: 'br' }),`,
          bs.E({ tag: "br" }),
          `   'To edit settings, press ', kbd({}, 'ctrl + ,')`,
          bs.E({ tag: "br" }),
          `]`
        ])
      )
    )
  ];
}

function basicBlock(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "code-block" } }, "Basic block")),
    bs.P({}, [
      `Use `,
      bs.Code({}, "Pre"),
      ` for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.`
    ]),
    bs.E({ style: styles.bsExample }, bs.Pre({}, "<p>Sample text here...</p>")),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [`pre({}, '<p>Sample text here...</p>')`])
      )
    )
  ];
}

function variables(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "code-variables" } }, "Variables")),
    bs.P({}, [
      `For indicating variables use the `,
      bs.Code({}, "bs.V"),
      ` or `,
      bs.Code({}, "bs.Variable"),
      ` component.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.V({}, "y"),
      " = ",
      bs.V({}, "mx"),
      " + ",
      bs.V({}, "b")
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `[v({}, 'y'), ' = ', v({}, 'mx'), ' + ', v({}, 'b')]`
        ])
      )
    )
  ];
}

function sampleOutput(): b.IBobrilChildren {
  return [
    b.anchor(bs.H2({ attrs: { id: "code-sample-output" } }, "Sample output")),
    bs.P({}, [
      `For indicating blocks sample output from a program use the `,
      bs.Code({}, "bs.Samp"),
      ` component.`
    ]),
    bs.E(
      { style: styles.bsExample },
      bs.Samp(
        {},
        "This text is meant to be treated as sample output from a computer program."
      )
    ),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.Samp({}, 'This text is meant to be treated as sample output from a computer program.')`
        ])
      )
    )
  ];
}
