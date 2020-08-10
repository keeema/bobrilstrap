export interface IDictionary<TKey, TValue> {
    (key: TKey, value?: TValue): TValue | undefined;
}

export function createDictionary<TKey, TValue>(entries?: readonly (readonly [TKey, TValue])[]): IDictionary<TKey, TValue> {
    const map = new Map<TKey, TValue>(entries);
    return (key: TKey, value?: TValue) => {
        if (value !== undefined) {
            map.set(key, value);
        }

        return map.get(key);
    };
}

export interface IFilledDictionary<TKey, TValue> {
    (key: TKey, value?: TValue): TValue;
}

export function createFilledDictionary<TKey, TValue>(entries: readonly (readonly [TKey, TValue])[]): IFilledDictionary<TKey, TValue> {
    const map = new Map<TKey, TValue>(entries);
    return (key: TKey, value?: TValue) => {
        if (value !== undefined) {
            map.set(key, value);
        }

        value = map.get(key);
        if (value === undefined && !map.has(key)) {
            throw new Error(`Key ${key} not found in dictionary where it should be.`);
        }

        return value as TValue;
    };
}
