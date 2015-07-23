import {IBobrilNode} from '../../node_modules/bobril/index';
import {tag} from '../../utils/tags';

export function getHighlight(nodes: IBobrilNode[]): IBobrilNode {
  return tag('div', [tag('pre', nodes)], 'highlight');
}
