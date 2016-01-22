import * as b from 'bobril';

export function mergeToChildren(node: b.IBobrilNode, item: b.IBobrilChildren): b.IBobrilChildren {
    let children = node.children
        ? node.children instanceof Array
            ? <b.IBobrilNode[]>node.children
            : [node.children]
        : [];

    if (item)
        children.push(item);

    return node.children = children;
}