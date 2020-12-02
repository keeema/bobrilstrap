import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const mediaBodyStyles = {
    mediaBody: b.styleDef("media-body"),
};

export interface IMediaBodyData extends IBaseElementDataWithChildren {}

export class MediaBody extends BaseElement<IMediaBodyData> {
    static id: string = "bobrilstrap-media-body";

    componentProperties(): (keyof IMediaBodyData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [mediaBodyStyles.mediaBody];
    }
}
