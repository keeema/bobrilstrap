import {IBobrilNode} from '../../node_modules/bobril/index';
import {tag} from '../../utils/tags';
import { Type } from '../../components/type';

export function getCallout(content: IBobrilNode[], id?: string, type?: Type): IBobrilNode {
  var className = 'bs-callout';
  if (type)
    className += ' bs-callout-' + type;

  return tag('div', content, className, null, null, id)
}
