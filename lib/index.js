export const isArray = (value) => {
    return Array.isArray(value);
};
export const toArray = (value) => {
    return Array.isArray(value) ? value : [];
};
export const isObject = (value) => {
    return Object.prototype.toString.call(value) === '[object Object]';
};
export const toObject = (value) => {
    return isObject(value) ? value : {};
};
export const isNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
