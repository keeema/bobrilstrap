module Containers {
  export function getCallout(content: IBobrilNode[], id?:string, type?:Components.Type):IBobrilNode{
    var className = 'bs-callout';
    if(type)
     className += ' bs-callout-'+type;

    return Utils.tag('div', content, className, null, null, id)
  }
}
