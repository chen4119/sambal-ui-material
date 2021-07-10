
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

export function isAbsUrl(src) {
    return typeof(src) === "string" && (src.startsWith("http://") || src.startsWith("https://"));
}