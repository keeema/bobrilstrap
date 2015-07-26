/// <reference path="./tag.ts"/>

interface ITagCtx {
  data: ITagData;
}

declare var getTag: (tagName: any, key?: string) => ITagBuilder;

interface ITagBuilder extends IBuilder<ITagBuilder> {
  node(): IBobrilNode;
}
