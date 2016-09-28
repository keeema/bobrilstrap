import * as b from 'bobril';

export interface IWithChildren  {
    children?: b.IBobrilChildren;
}

export function mergeToChildren(node: IWithChildren, item: b.IBobrilChildren, unshift?: boolean): b.IBobrilChildren {
    let children : b.IBobrilChildren = node.children
        ? node.children instanceof Array
            ? <b.IBobrilNode[]>node.children
            : [node.children]
        : [];

    if (item) {
        if (unshift) {
            children.unshift(item);
        } else {
            children.push(item);
        }
    }

    return node.children = children;
}

export const bobrilHelpers = {
    mergeToChildren,
    toLowerWithDashes,
    createDictionary
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
    if (!value)
        return value;

    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/[A-Z]/g, '-$&').toLowerCase();
}