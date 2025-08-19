"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.desensitizedCommon = exports.formatFileSize = exports.jsonParse = exports.isJson = exports.preserveNumbers = exports.toStringAndTrim = exports.toNumber = exports.isNumber = exports.toObject = exports.isObject = exports.toArray = exports.isArray = void 0;
/** 判断是否数组 */
const isArray = (value) => {
    return Array.isArray(value);
};
exports.isArray = isArray;
/** 转成数组 */
const toArray = (value) => {
    return Array.isArray(value) ? value : [];
};
exports.toArray = toArray;
/** 判断是否对象 */
const isObject = (value) => {
    return Object.prototype.toString.call(value) === "[object Object]";
};
exports.isObject = isObject;
/** 转成对象 */
const toObject = (value) => {
    return (0, exports.isObject)(value) ? value : {};
};
exports.toObject = toObject;
/** 判断是否数字 */
const isNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
exports.isNumber = isNumber;
/** 转成数字 */
const toNumber = (str) => {
    return (0, exports.isNumber)(str) ? Number(str) : 0;
};
exports.toNumber = toNumber;
/** 转成字符串并去除前后空格 */
const toStringAndTrim = (value, trim = false) => {
    const str = typeof value == "string" ? value : "";
    return trim ? str.trim() : str;
};
exports.toStringAndTrim = toStringAndTrim;
/** 只保留数字 */
const preserveNumbers = (val) => {
    return `${val}`.replace(/[^0-9]/gi, "");
};
exports.preserveNumbers = preserveNumbers;
/** 判断是json数据 */
const isJson = (str) => {
    if (str && typeof str == "string") {
        try {
            const obj = JSON.parse(str);
            return obj && typeof obj == "object";
        }
        catch (_e) {
            //
        }
    }
    return false;
};
exports.isJson = isJson;
/**
 * 解码json数据
 * @param data 数据
 * @returns array | object | null
 */
const jsonParse = (data) => {
    if (data) {
        if (typeof data == "string") {
            try {
                const obj = JSON.parse(data);
                if (["Array", "Object"].includes(Object.prototype.toString.call(obj).slice(8, -1))) {
                    return obj;
                }
            }
            catch (e) {
                //
            }
        }
        else if (["Array", "Object"].includes(Object.prototype.toString.call(data).slice(8, -1))) {
            return data;
        }
    }
    return null;
};
exports.jsonParse = jsonParse;
/** 转换文件大小 */
const formatFileSize = (fileSize) => {
    fileSize = (0, exports.toNumber)(fileSize);
    if (fileSize == 0) {
        return "0B";
    }
    const unitArr = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let index = 0;
    index = Math.floor(Math.log(fileSize) / Math.log(1024));
    const size = fileSize / 1024 ** index;
    return size.toFixed(0) + unitArr[index];
};
exports.formatFileSize = formatFileSize;
/** 文本脱敏 */
const desensitizedCommon = (str, begin = 1, end = 1) => {
    if (!str && begin + end >= str.length) {
        return "";
    }
    const leftStr = str.substring(0, begin);
    const rightStr = str.substring(str.length - end, str.length);
    let strCon = "";
    for (let i = 0; i < str.length - end - begin; i++) {
        strCon += "*";
    }
    return leftStr + strCon + rightStr;
};
exports.desensitizedCommon = desensitizedCommon;
/**
 * sleep
 * @param callback 回调函数
 * @param ms 毫秒, 默认1000ms
 * @returns
 */
const sleep = (callback, ms = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback === null || callback === void 0 ? void 0 : callback();
            resolve(true);
        }, ms);
    });
};
exports.sleep = sleep;
