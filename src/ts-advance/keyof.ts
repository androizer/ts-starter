function pluck<T, K extends keyof T>(payload: T[], key: K): T[K][] {
    return payload.map(item => item[key]);
}

pluck([{name: 'Akshay', age: 28}, {name: 'Akki', age: 27}], 'name');
