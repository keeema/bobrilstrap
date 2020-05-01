import * as b from "bobril";
import * as bs from "../../index";
import pwaInstallHandler from "pwa-install-handler";
import { handleMenuItemClick, texts } from "../masterPage";

interface IInstallButtonCtx extends b.IBobrilCtx<never> {
    canInstall: boolean;
}

export const InstallButton = b.createVirtualComponent<never>({
    id: "install-button",
    init(ctx: IInstallButtonCtx): void {
        ctx.canInstall = false;
        pwaInstallHandler.addListener(canInstall => {
            ctx.canInstall = canInstall;
            b.invalidate(ctx);
        });
    },
    render(ctx: IInstallButtonCtx, me: b.IBobrilNode): void {
        me.children =
            ctx.canInstall &&
            bs.A(
                {
                    id: "installButton",
                    onClick: handleMenuItemClick,
                    href: "javascript:void(0)"
                },
                texts.install
            );
    },
    onClick(): boolean {
        pwaInstallHandler.install().then(isInstalled => {
            console.log(isInstalled ? "User accepted installation prompt" : "User rejected installation prompt");
        });
        return handleMenuItemClick();
    }
});
