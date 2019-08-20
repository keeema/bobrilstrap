import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { section } from "../common/section";
import { pre, langJs } from "../prettify/pre";

export const typeahead = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Typeahead",
        id: "typeahead",
        lead: []
      },
      [example()]
    );
  }
});

function example(): b.IBobrilChildren {
  return [
    bs.P({}, [
      `To create `,
      bs.Code({}, "typeahead"),
      ` just provide `,
      bs.Code({}, "typeaheadOptions"),
      ` in `,
      bs.Code({}, "bs.InputText"),
      ` input data properties. These options are described on `,
      bs.A(
        { href: "https://github.com/bassjobsen/Bootstrap-3-Typeahead/" },
        "Bootstrap 3 Typeahead GitHub project pages"
      ),
      `.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.InputText({
        placeholder: "Write some text...",
        typeaheadOptions: {
          source: ["First", "Second", "Third"]
        }
      })
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.InputText({`,
          bs.E({ tag: "br" }),
          `  placeholder: "Write some text...",`,
          bs.E({ tag: "br" }),
          `  typeaheadOptions: {`,
          bs.E({ tag: "br" }),
          `    source: ["First", "Second", "Third"]`,
          bs.E({ tag: "br" }),
          `  }`,
          bs.E({ tag: "br" }),
          `})`
        ])
      )
    )
  ];
}
