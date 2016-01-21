import * as b from 'bobril';

export function wrapMe(me: b.IBobrilNode, style: b.IBobrilStyle) {
    me.children = { tag: me.tag, className: me.className, style: me.style, id: me['id'], attrs: me.attrs, children: me.children };
    me.tag = 'div';
    me.className = undefined;
    me.style = undefined;
    me['id'] = undefined;
    me.attrs = undefined;
    b.style(me, style);
}

export function mergeChildren(children: b.IBobrilChildren, item: b.IBobrilChildren): b.IBobrilChildren {
    let resultChildren: b.IBobrilChildren[] = children
        ? children instanceof Array
            ? children
            : [children]
        : [];

    if(item)
      resultChildren.push(item);

    return resultChildren;
}