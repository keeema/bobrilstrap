function getSection(nodes: IBobrilNode[]): IBobrilNode {
  return getTag('div').withClass('bs-docs-section').withContent(nodes).node();
}
