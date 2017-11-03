import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const collapse = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Collapse",
        id: "collapse",
        lead: []
      },
      [example()]
    );
  }
});

let expanded = 0;
function toggleExpandItem(item: number) {
  expanded = expanded === item ? 0 : item;
  b.invalidate();
}

function example(): b.IBobrilChildren {
  return [
    bs.E({ style: styles.bsExample }, [
      bs.PanelGroup({}, [
        bs.Panel({}, [
          bs.PanelHeading({}, [
            bs.PanelTitle4({}, [
              bs.A(
                {
                  href: "javascript:void(0)",
                  onClick: () => toggleExpandItem(1)
                },
                "Collapsible Group Item #1"
              )
            ])
          ]),
          bs.Collapse({ collapsed: expanded !== 1 }, [
            bs.PanelCollapse({}, [
              bs.PanelBody({}, [
                `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf 
                            moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 
                            3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch 
                            et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad 
                            vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm- to - table, raw denim aesthetic 
                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
              ])
            ])
          ])
        ]),
        bs.Panel({}, [
          bs.PanelHeading({}, [
            bs.PanelTitle4({}, [
              bs.A(
                {
                  href: "javascript:void(0)",
                  onClick: () => toggleExpandItem(2)
                },
                "Collapsible Group Item #2"
              )
            ])
          ]),
          bs.Collapse({ collapsed: expanded !== 2 }, [
            bs.PanelCollapse({}, [
              bs.PanelBody({}, [
                `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf 
                            moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 
                            3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch 
                            et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad 
                            vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm- to - table, raw denim aesthetic 
                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
              ])
            ])
          ])
        ]),
        bs.Panel({}, [
          bs.PanelHeading({}, [
            bs.PanelTitle4({}, [
              bs.A(
                {
                  href: "javascript:void(0)",
                  onClick: () => toggleExpandItem(3)
                },
                "Collapsible Group Item #3"
              )
            ])
          ]),
          bs.Collapse({ collapsed: expanded !== 3 }, [
            bs.PanelCollapse({}, [
              bs.PanelBody({}, [
                `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf 
                            moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 
                            3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch 
                            et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad 
                            vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm- to - table, raw denim aesthetic 
                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
              ])
            ])
          ])
        ])
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `// On some not-rendered place`,
          bs.E({ tag: "br" }),
          `let expanded = 0;`,
          bs.E({ tag: "br" }),
          `function toggleExpandItem(item: number) {`,
          bs.E({ tag: "br" }),
          `    expanded = expanded === item ? 0 : item;`,
          bs.E({ tag: "br" }),
          `    b.invalidate();`,
          bs.E({ tag: "br" }),
          `}`,
          bs.E({ tag: "br" }),
          bs.E({ tag: "br" }),

          `// On some rendered place`,
          bs.E({ tag: "br" }),
          `bs.PanelGroup({}, [`,
          bs.E({ tag: "br" }),
          `    bs.Panel({}, [`,
          bs.E({ tag: "br" }),
          `        bs.PanelHeading({}, [`,
          bs.E({ tag: "br" }),
          `            bs.PanelTitle4({}, [`,
          bs.E({ tag: "br" }),
          `                bs.A(`,
          bs.E({ tag: "br" }),
          `                    { href: 'javascript:void(0)', onClick: () => toggleExpandItem(1) },`,
          bs.E({ tag: "br" }),
          `                    'Collapsible Group Item #1'`,
          bs.E({ tag: "br" }),
          `                )`,
          bs.E({ tag: "br" }),
          `            ])`,
          bs.E({ tag: "br" }),
          `        ]),`,
          bs.E({ tag: "br" }),
          `        bs.Collapse({ collapsed: expanded !== 1 }, [`,
          bs.E({ tag: "br" }),
          `            bs.PanelCollapse({}, [`,
          bs.E({ tag: "br" }),
          `                bs.PanelBody({}, '...')`,
          bs.E({ tag: "br" }),
          `            ])`,
          bs.E({ tag: "br" }),
          `        ])`,
          bs.E({ tag: "br" }),
          `    ]),`,
          bs.E({ tag: "br" }),
          `    ...`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}
