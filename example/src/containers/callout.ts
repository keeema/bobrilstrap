function getCallout(content: IBobrilNode[], id?: string, type?: IType): IBobrilNode {
  var className = 'bs-callout';
  if (type)
    className += ' bs-callout-' + type;

  return getTag('div')
    .withContent(content)
    .withClass(className)
    .withAttribute('id',id).node();
}
