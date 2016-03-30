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

export let bobrilHelpers = {
    mergeToChildren
};

export default bobrilHelpers;

type NumberOrString = number | string;

interface INumberData<TValue> {
    [key: number]: TValue;
}

interface IStringData<TValue> {
    [key: number]: TValue;
}

export interface IDictionary<TKey extends NumberOrString, TValue> {
    (key: TKey, value?: TValue): TValue;
}

export function createDictionary<TKey extends NumberOrString, TValue>(): IDictionary<TKey, TValue> {
    let data: INumberData<TValue> | IStringData<TValue> = {};
    return (key: TKey, value?: TValue, setEvenUndefined?: boolean) => {
        if (value !== undefined || setEvenUndefined)
            data[<NumberOrString>key] = value;

        return data[<NumberOrString>key];
    };
}

export function toLowerWithDashes(value: string): string {
    return value ? value.replace(/[A-Z]/g, '-$&').toLowerCase() : value;
}