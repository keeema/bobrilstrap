function getHighlight(nodes: IBobrilNode[]): IBobrilNode {
    return getTag('div')
        .withClass('highlight')
        .withContent([getTag('pre').withContent(nodes).node()])
        .node();
}
