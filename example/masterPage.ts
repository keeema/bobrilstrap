import * as b from "bobril";
import * as bs from "../index";
import { styles } from "./bsexample/css";
import { prettify } from "./prettify/prettify";
import { InstallButton } from "./common/installButton";

const noMargin = b.styleDef({ margin: 0 });

export const masterPage = b.createVirtualComponent({
  render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = [getNavigation(), ctx.data.activeRouteHandler(), getFooter()];
  },
  postUpdateDom() {
    prettify.prettyPrint();
  }
});

const collapsedMenu = b.propim(true);
export function handleMenuItemClick() {
  collapsedMenu(true);
  return false;
}

function getNavigation(): b.IBobrilNode {
  return bs.Navbar(
    {
      static: bs.NavbarStatic.Top,
      header: true,
      style: [styles.bsDocsNav, noMargin]
    },
    [
      bs.Container({}, [
        bs.NavbarHeader({}, [
          bs.Button(
            {
              variant: bs.ButtonVariant.NavbarToggle,
              onClick: () => collapsedMenu(!collapsedMenu())
            },
            [
              bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
              bs.Span({ style: bs.navStyles.iconBar }),
              bs.Span({ style: bs.navStyles.iconBar }),
              bs.Span({ style: bs.navStyles.iconBar })
            ]
          ),
          b.link(
            bs.NavbarBrand({ href: "javascript:void(0)" }, "Bobrilstrap"),
            "bobrilstrap"
          )
        ]),
        bs.Collapse(
          { collapsed: collapsedMenu() },
          bs.NavbarCollapse({ id: "bs-navbar" }, [
            bs.NavbarNav({}, [
              bs.NavbarNavItem(
                { active: b.isActive("css") },
                b.link(
                  bs.A(
                    {
                      href: "javascript:void(0)",
                      onClick: handleMenuItemClick
                    },
                    "CSS"
                  ),
                  "css"
                )
              ),
              bs.NavbarNavItem(
                { active: b.isActive("components") },
                b.link(
                  bs.A(
                    {
                      href: "javascript:void(0)",
                      onClick: handleMenuItemClick
                    },
                    "Components"
                  ),
                  "components"
                )
              ),
              bs.NavbarNavItem(
                { active: b.isActive("live-components") },
                b.link(
                  bs.A(
                    {
                      href: "javascript:void(0)",
                      onClick: handleMenuItemClick
                    },
                    "Live components"
                  ),
                  "live-components"
                )
              )
            ]),
            bs.NavbarNav({ style: bs.navStyles.navbarRight }, [
              bs.NavbarNavItem(
                {},
                bs.A(
                  {
                    href: texts.githubLink,
                    target: bs.Target.Blank,
                    onClick: handleMenuItemClick
                  },
                  texts.gitHub
                )
              ),
              bs.NavbarNavItem(
                {},
                bs.A(
                  {
                    href: texts.bobrilLink,
                    target: bs.Target.Blank,
                    onClick: handleMenuItemClick
                  },
                  texts.bobril
                )
              ),
              bs.NavbarNavItem(
                {},
                bs.A(
                  {
                    href: texts.bootsrapLink,
                    target: bs.Target.Blank,
                    onClick: handleMenuItemClick
                  },
                  texts.bootstrap
                )
              ),
              bs.NavbarNavItem(
                { active: b.isActive("donate") },
                b.link(
                  bs.A({ onClick: handleMenuItemClick }, texts.donate),
                  "donate"
                )
              ),
              bs.NavbarNavItem({}, InstallButton())
            ])
          ])
        )
      ])
    ]
  );
}

function getFooter(): b.IBobrilChildren {
  return [
    bs.E({ tag: "footer", style: styles.bsDocsFooter }, [
      bs.Container({}, [
        bs.Ul({ style: styles.bsDocsFooterLinks }, [
          bs.Li(
            {},
            bs.A(
              { href: texts.githubLink, target: bs.Target.Blank },
              texts.gitHub
            )
          ),
          bs.Li(
            {},
            bs.A(
              { href: texts.bobrilLink, target: bs.Target.Blank },
              texts.bobril
            )
          ),
          bs.Li(
            {},
            bs.A(
              { href: texts.bootsrapLink, target: bs.Target.Blank },
              texts.bootstrap
            )
          ),
          bs.Li(
            { active: b.isActive("donate") },
            b.link(
              bs.A({ onClick: handleMenuItemClick }, texts.donate),
              "donate"
            )
          )
        ]),
        bs.P({}, [
          `Written by `,
          bs.A(
            { href: texts.twitterLink, target: bs.Target.Blank },
            texts.twitter
          ),
          ` .
                    Code licensed `,
          bs.A({ href: texts.mitLink, target: bs.Target.Blank }, texts.mit),
          `.`
        ])
      ])
    ])
  ];
}

export const texts = {
  bobrilstrap: "Bobrilstrap",
  bootstrap: "Bootstrap",
  bootsrapLink: "https://getbootstrap.com/docs/3.3/",
  bobril: "Bobril",
  bobrilLink: "https://bobril.com",
  css: "CSS",
  components: "Components",
  javaScript: "JavaScript",
  gitHub: "GitHub",
  githubLink: "https://github.com/keeema/bobrilstrap",
  twitter: "keeema_",
  twitterLink: "https://twitter.com/keeema_",
  mit: "MIT",
  mitLink: "https://github.com/keeema/bobrilstrap/blob/master/LICENSE",
  donate: "Donate",
  install: "Install Documentation"
};
