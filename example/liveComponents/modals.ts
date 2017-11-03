import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const modals = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Modals",
        id: "modals",
        lead: []
      },
      [liveDemo()]
    );
  }
});

const liveDemoVisible = b.propim(false);
function liveDemo(): b.IBobrilChildren {
  return [
    bs.P({}, [
      `Use `,
      bs.Code({}, "bs.Modal"),
      ` to show content in modal window. It is separated to three parts - `,
      bs.Code({}, "header"),
      `, `,
      bs.Code({}, "body"),
      ` and `,
      bs.Code({}, "footer"),
      `. It has also usefull 
            input data properties for defining the look like `,
      bs.Code({}, "size"),
      ` etc. or callbacks like `,
      bs.Code({}, "onHide"),
      ` to handle the close.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.Button({
        label: " Launch demo modal ",
        onClick: () => liveDemoVisible(true)
      }),
      bs.Modal({
        visible: liveDemoVisible(),
        animation: true,
        size: bs.ModalSize.Sm,
        header: [
          bs.Button(
            {
              option: bs.ButtonOption.Close,
              aria: { label: "Close" },
              onClick: () => liveDemoVisible(false)
            },
            bs.Span({ aria: { hidden: true } }, "×")
          ),
          bs.ModalTitle4({}, "Modal title")
        ],
        body: "One fine body…",
        footer: bs.Button({
          label: "Close",
          onClick: () => liveDemoVisible(false)
        })
      })
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `const liveDemoVisible = b.propim(false); // On some not-rendered place`,
          bs.E({ tag: "br" }),
          ``,
          bs.E({ tag: "br" }),
          `// On some rendered place`,
          bs.E({ tag: "br" }),
          `bs.Button({ label: ' Launch demo modal ', onClick: () => liveDemoVisible(true) }),`,
          bs.E({ tag: "br" }),
          `bs.Modal({`,
          bs.E({ tag: "br" }),
          `    visible: liveDemoVisible(),`,
          bs.E({ tag: "br" }),
          `    animation: true,`,
          bs.E({ tag: "br" }),
          `    size: bs.ModalSize.Sm,`,
          bs.E({ tag: "br" }),
          `    header: [`,
          bs.E({ tag: "br" }),
          `        bs.Button(`,
          bs.E({ tag: "br" }),
          `            {`,
          bs.E({ tag: "br" }),
          `                option: bs.ButtonOption.Close,`,
          bs.E({ tag: "br" }),
          `                aria: { label: 'Close' },`,
          bs.E({ tag: "br" }),
          `                onClick: () => liveDemoVisible(false)`,
          bs.E({ tag: "br" }),
          `            },`,
          bs.E({ tag: "br" }),
          `            bs.Span({ aria: { hidden: true } }, '×')`,
          bs.E({ tag: "br" }),
          `        ),`,
          bs.E({ tag: "br" }),
          `        bs.ModalTitle4({}, 'Modal title')`,
          bs.E({ tag: "br" }),
          `    ],`,
          bs.E({ tag: "br" }),
          `    body: 'One fine body…',`,
          bs.E({ tag: "br" }),
          `    footer: bs.Button({ label: 'Close', onClick: () => liveDemoVisible(false) })`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}
