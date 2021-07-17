
export function toArrayOfUrls(list) {
    if (Array.isArray(list)) {
        return list.filter(d => isAbsUrl(d));
    } else if (isAbsUrl(list)) {
        return [list];
    }
    return [];
}

export function toArrayOfString(list) {
    if (Array.isArray(list)) {
        return list.map(d => String(d));
    } else if (typeof(list) === "string") {
        return [list];
    }
    return [];
}

export function toArrayOfObject(list) {
    if (Array.isArray(list)) {
        return list.filter(d => isObjectLiteral(d));
    } else if (isObjectLiteral(list)) {
        return [list];
    }
    return [];
}

export function isObjectLiteral(obj) {
    return obj !== null && typeof(obj) === "object" && Object.getPrototypeOf(obj) === Object.prototype;
}

export function isAbsUrl(src) {
    return typeof(src) === "string" && (src.startsWith("http://") || src.startsWith("https://"));
}