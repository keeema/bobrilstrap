import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const responsiveEmbed = b.createVirtualComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = section(
      {
        header: "Responsive embed",
        id: "responsive-embed",
        lead: []
      },
      [example()]
    );
  }
});

function example(): b.IBobrilChildren {
  return [
    bs.P({}, [
      `Allow browsers to determine video or slideshow dimensions based on the width of their containing block by 
            creating an intrinsic ratio that will properly scale on any device.`
    ]),
    bs.P({}, [
      `Rules are directly applied to `,
      bs.Code({}, "bs.Iframe"),
      `, `,
      bs.Code({}, "bs.Embed"),
      `, `,
      bs.Code({}, "bs.Video"),
      ` and `,
      bs.Code({}, "bs.Object"),
      ` component nodes; optionally use an explicit descendant style `,
      bs.Code({}, "bs.EmbedResponsiveStyles.embedResponsiveItem"),
      ` (automatically set when `,
      bs.Code({}, "embedResponsive"),
      ` property is set to `,
      bs.Code({}, "true"),
      `) when you want to match the styling for other attributes.`
    ]),
    bs.E({ style: styles.bsExample }, [
      bs.EmbedResponsive({ aspectRatio: bs.EmbedAspectRatio.SixteenByNine }, [
        bs.IFrame({
          embedResponsive: true,
          src: "http://www.youtube.com/embed/zpOULjyy-n8?rel=0",
          attrs: { allowfullscreen: "" }
        })
      ])
    ]),
    bs.Figure(
      { style: styles.highlight },
      pre(
        {},
        bs.Code({ style: langJs }, [
          `bs.EmbedResponsive({ aspectRatio: bs.EmbedAspectRatio.SixteenByNine }, [`,
          bs.E({ tag: "br" }),
          `    bs.Iframe({ embedResponsive: true, src: ...' })`,
          bs.E({ tag: "br" }),
          `])`
        ])
      )
    )
  ];
}
