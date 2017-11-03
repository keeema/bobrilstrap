import * as b from "bobril";

export interface IWithChildren {
  children?: b.IBobrilChildren;
}

export function mergeToChildren(
  node: IWithChildren,
  item?: b.IBobrilChildren,
  unshift?: boolean
): b.IBobrilChildren {
  let children: b.IBobrilChildren[] = node.children
    ? node.children instanceof Array
      ? node.children as b.IBobrilNode[]
      : [node.children]
    : [];

  if (item) {
    if (unshift) {
      children.unshift(item);
    } else {
      children.push(item);
    }
  }

  return (node.children = children);
}

export const bobrilHelpers = {
  mergeToChildren,
  toLowerWithDashes,
  createDictionary
};

export default bobrilHelpers;

export type NumberOrString = number | string;

interface INumberData<TValue> {
  [key: number]: TValue;
}

interface IStringData<TValue> {
  [key: string]: TValue;
}

export interface IDictionary<TKey extends NumberOrString, TValue> {
  (key: TKey, value?: TValue): TValue;
}

export function createDictionary<
  TKey extends NumberOrString,
  TValue
>(): IDictionary<TKey, TValue> {
  let data: INumberData<TValue> | IStringData<TValue> = {};
  return (key: TKey, value?: TValue, setEvenUndefined?: boolean) => {
    if (value !== undefined || setEvenUndefined) dataValue(data, key, value);

    return dataValue(data, key);
  };
}

function dataValue<TValue>(
  data: INumberData<TValue> | IStringData<TValue>,
  key: number | string,
  value?: TValue
): TValue {
  if (typeof key === "string") {
    const innerData = data as IStringData<TValue>;
    if (value !== undefined) innerData[key] = value;
    return innerData[key];
  } else {
    const innerData = data as INumberData<TValue>;
    if (value !== undefined) innerData[key] = value;
    return innerData[key];
  }
}

export function toLowerWithDashes(value: string): string {
  if (!value) return value;

  value = value.charAt(0).toLowerCase() + value.slice(1);
  return value.replace(/[A-Z]/g, "-$&").toLowerCase();
}

export function equals<T>(objA: T, objB: T) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}
