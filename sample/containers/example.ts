import {IBobrilNode} from '../../node_modules/bobril/index';
import {tag} from '../../utils/tags';

export function getExample(nodes: IBobrilNode[], dataId: string): IBobrilNode {
  return tag('div', nodes, 'bs-example', null, null, null, { 'data-example-id': 'glyphicons-general' })
}
