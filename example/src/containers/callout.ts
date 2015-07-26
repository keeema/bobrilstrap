function getCallout(content: IBobrilNode[], id?: string, type?: IType): IBobrilNode {
  var className = 'bs-callout';
  if (type)
    className += ' bs-callout-' + type;

  return tag('div', content, className, null, null, id)
}
