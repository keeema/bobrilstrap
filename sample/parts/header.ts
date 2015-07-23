import {IBobrilNode} from '../../node_modules/bobril/index';
import {tag} from '../../utils/tags';

export function getHeader(): IBobrilNode {
  return tag('div', [
    tag('div', [
      tag('h1', ['Bobrilstrap components']),
      tag('p', ['Bobril wrappers for Bootstrap components.'])
    ], 'container')
  ], 'bs-docs-header');
}
