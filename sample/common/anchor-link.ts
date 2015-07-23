import { a }  from '../../utils/tags';
import { IBobrilNode } from '../../node_modules/bobril/index';

export function createAnchorLink(href: string): IBobrilNode {
  //TODO: Not working!!!
  var link = a('', href, 'anchorjs-link');
  link.style = { fontFamily: 'anchorjs-icons', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', position: 'absolute', marginLeft: '-1em', paddingRight: '0.5em' }
  link.attrs['data-anchorjs-icon'] = '';
  return link;
}
