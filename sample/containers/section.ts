import {IBobrilNode} from '../../node_modules/bobril/index';
import {tag} from '../../utils/tags';

export function getSection(nodes: IBobrilNode[]): IBobrilNode {
  return tag('div', nodes, 'bs-docs-section')
}
