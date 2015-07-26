function getHighlight(nodes: IBobrilNode[]): IBobrilNode {
  return tag('div', [tag('pre', nodes)], 'highlight');
}
