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
