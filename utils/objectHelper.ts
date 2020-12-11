export function pick<T extends Object, K extends keyof T>(source: T, ...keys: K[]): Pick<T, K> {
    const result: Pick<T, K> = {} as Pick<T, K>;
    for (const key of keys) {
        if (source.hasOwnProperty(key)) {
            result[key] = source[key];
        }
    }
    return result;
}

export function omit<T extends Object, K extends keyof T>(source: T, ...keys: K[]): Omit<T, K> {
    const result: T = {} as T;
    for (const key in source) {
        if ((keys as string[]).indexOf(key) < 0) {
            result[key] = source[key];
        }
    }
    return result;
}
