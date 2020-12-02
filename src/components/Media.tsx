import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const mediaStyles = {
    media: b.styleDef("media"),
};

export interface IMediaData extends IBaseElementDataWithChildren {}

export class Media extends BaseElement<IMediaData> {
    static id: string = "bobrilstrap-media";

    componentProperties(): (keyof IMediaData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [mediaStyles.media];
    }
}
