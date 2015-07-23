module Containers {
  export function getSection(nodes: IBobrilNode[]): IBobrilNode {
    return tag('div', nodes, 'bs-docs-section')
  }
}
