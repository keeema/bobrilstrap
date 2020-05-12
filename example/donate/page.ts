import * as b from "bobril";
import * as bs from "../../index";
import { header } from "../common/docsHeader";
import { docsContainer } from "../common/docsContainer";

export const donate = b.createVirtualComponent({
    id: "bobrilstrap-donate",
    init() {
        document.title = "Donate - Bobrilstrap";
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header({
                header: "Donate",
                headerContent: "",
            }),
            docsContainer(
                {
                    id: "donate",
                },
                bs.Row({}, [
                    bs.Col(
                        { span: 7, size: bs.Size.Md },
                        bs.P(
                            {},
                            "Bobrilstrap is developed by volunteer in his spare time. " +
                                "Donations will be used to pay equipment and other costs."
                        )
                    ),
                    bs.Col(
                        { span: 2, size: bs.Size.Md },
                        bs.Button({
                            size: bs.Size.Lg,
                            option: bs.ButtonOption.Primary,
                            label: "Send 1€",
                            onClick: () => {
                                window.open("https://www.paypal.me/keeema/1eur", "_blank");
                            },
                        })
                    ),
                ])
            ),
        ];
    },
});
