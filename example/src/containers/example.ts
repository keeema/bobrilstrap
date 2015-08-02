function getExample(nodes: IBobrilNode[], dataId: string): IBobrilNode {
  return getTag('div')
    .withClass('bs-example')
    .withContent(nodes)
    .withAttribute('data-example-id',dataId)
    .node();
}
