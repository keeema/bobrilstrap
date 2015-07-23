module Utils {
  export function tag(tagName: string, children?: any[], className?: string, style?: Object, key?: string, id?: string, attrs?: Object): IBobrilNode {
    var tagBuilder = Components.getTag(tagName, key);

    if(children)
      tagBuilder.withContent(children);

    if(className)
      tagBuilder.withClass(className)

    if(id)
      tagBuilder.withAttribute('id', id)

    if(attrs)
    Object.keys(attrs).forEach(key=> tagBuilder.withAttribute(key,attrs[key]));

    return tagBuilder.node();
    /*
    var tag = <IBobrilNode>{
      tag: tagName,
      attrs: { className: className },
      children: children || []
    }

    if (key)
      tag.key = key;

    if (id)
      tag.attrs.id = id;

    if (style)
      tag.style = style;

    if (attrs)
      Object.keys(attrs).forEach(key=> tag.attrs[key] = attrs[key]);

    return tag;*/
  }

  export function a(content: string, href: string, className?: string, target?: string): IBobrilNode {
    /*var tagBuilder = Components.getTag('a');

    if(content)
      tagBuilder.withContent([content]);

    if(className)
      tagBuilder.withClass(className);

    if(href)
      tagBuilder.withAttribute('href', href);

    if(target)
      tagBuilder.withAttribute('target', target);

    return tagBuilder.node();*/

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
}
