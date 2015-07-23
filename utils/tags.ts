import { IBobrilNode }  from '../node_modules/bobril/index';
import { getTag }  from '../components/tag';

export function tag(tagName: string, children?: any[], className?: string, style?: Object, key?: string, id?: string, attrs?: Object): IBobrilNode {
  var tagBuilder = getTag(tagName, key);

  if (children)
    tagBuilder.withContent(children);

  if (className)
    tagBuilder.withClass(className)

  if (id)
    tagBuilder.withAttribute('id', id)

  if (attrs)
    Object.keys(attrs).forEach(key=> tagBuilder.withAttribute(key, attrs[key]));

  return tagBuilder.node();
}

export function a(content: string, href: string, className?: string, target?: string): IBobrilNode {
  var attrs: any = { href: href };
  if (className)
    attrs.className = className;

  if (target)
    attrs.target = target;

  var children = [];
  if (content)
    children.push(content);

  return <IBobrilNode>{
    tag: 'a',
    attrs: attrs,
    children: children
  }
}
