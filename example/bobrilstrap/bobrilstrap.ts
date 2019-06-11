import * as b from "bobril";
import * as bs from "../../index";
import * as prettify from "../prettify/pre";
import { styles } from "../bsexample/css";
import { section } from "../common/section";

export const bobrilstrap = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = [
      section(
        {
          id: "bobrilstrap-installation",
          header: "Bobrilstrap installation"
        },
        [
          bs.P(
            {},
            `To install bobrilstrap to your bobril application stop the running bobril-build and run following commands:`
          ),
          bs.Figure(
            { style: styles.highlight },
            bs.Pre(
              {},
              bs.Code({}, [
                "npm i bobrilstrap --save",
                bs.E({ tag: "br" }),
                "bb"
              ])
            )
          ),
          bs.P({}, [
            "To initialize the bobrilstrap framework change the file ",
            bs.Italics({}, "index.ts"),
            " to look like following: "
          ]),
          bs.Figure(
            { style: styles.highlight },
            prettify.pre(
              {},
              bs.Code({ style: prettify.langJs }, [
                `import "bobrilstrap";`,
                bs.E({ tag: "br" }),
                `import * as b from "bobril";`,
                bs.E({ tag: "br" }),
                `import * as bs from "bobrilstrap";`,
                bs.E({ tag: "br" }),
                bs.E({ tag: "br" }),
                `b.init(() => bs.H1({}, "Hello World!"));`
              ])
            )
          ),
          bs.P({}, [
            "Now you can use all the bobrilstrap components provided by the ",
            bs.Code({}, "bobrilstrap"),
            " package."
          ])
        ]
      ),
      section(
        {
          id: "bobrilstrap-tsx",
          header: "Using TSX"
        },
        [
          bs.P({}, [
            "You can simply use the TSX syntax with ",
            bs.Code({}, "bobril"),
            " and ",
            bs.Code({}, "bobrilstrap"),
            ". ",
            "You just need to define the ",
            bs.Italics({}, "index.tsx"),
            " file as the application entry in ",
            bs.Italics({}, "package.json"),
            " by adding following lines (not necessary when you don't use the TSX directly in ",
            bs.Italics({}, "index.tsx"),
            " file):"
          ]),
          bs.Figure(
            { style: styles.highlight },
            prettify.pre(
              {},
              bs.Code({ style: prettify.langJs }, [
                `"typescript": {`,
                bs.E({ tag: "br" }),
                `  "main": "index.tsx"`,
                bs.E({ tag: "br" }),
                `}`
              ])
            )
          ),
          bs.P({}, [
            "Now you can write your code in the ",
            bs.Italics({}, "index.tsx"),
            " file: "
          ]),
          bs.Figure(
            { style: styles.highlight },
            prettify.pre(
              {},
              bs.Code({ style: prettify.langJs }, [
                `import "bobrilstrap";`,
                bs.E({ tag: "br" }),
                `import * as b from "bobril"; `,
                ,
                bs.E({ tag: "br" }),
                `import { H1 } from "bobrilstrap";`,
                bs.E({ tag: "br" }),
                bs.E({ tag: "br" }),
                `b.init(() => <H1>Hello World!</H1>);`
              ])
            )
          )
        ]
      ),
      section(
        {
          id: "bobrilstrap-themes",
          header: "Themes"
        },
        [
          bs.P({}, [
            `To use a custom `,
            bs.Code({}, "Bootstrap"),
            ` theme just add the theme files as standard `,
            bs.Code({}, "bobril"),
            ` application assets after the `,
            bs.Code({}, "bobrilstrap"),
            ` initialization. Example:`
          ]),
          bs.Figure(
            { style: styles.highlight },
            prettify.pre(
              {},
              bs.Code({ style: prettify.langJs }, [
                `b.asset("node_modules/myTheme/bootstrap.min.css"); `
              ])
            )
          )
        ]
      )
    ];
  }
});
