/** 判断是否数组 */
export declare const isArray: (value: any) => boolean;
/** 转成数组 */
export declare const toArray: (value: any) => any[];
/** 判断是否对象 */
export declare const isObject: (value: any) => boolean;
/** 转成对象 */
export declare const toObject: (value: any) => object;
/** 判断是否数字 */
export declare const isNumber: (value: any) => boolean;
/** 转成数字 */
export declare const toNumber: (str: any) => number;
/** 转成字符串并去除前后空格 */
export declare const toStringAndTrim: (value: any, trim?: boolean) => string;
/** 只保留数字 */
export declare const preserveNumbers: (val: any) => string;
/** 判断是json数据 */
export declare const isJson: (str: any) => boolean;
/**
 * 解码json数据
 * @param data 数据
 * @returns array | object | null
 */
export declare const jsonParse: (data: any) => any[] | object | null;
/** 转换文件大小 */
export declare const formatFileSize: (fileSize: any) => string;
/** 文本脱敏 */
export declare const desensitizedCommon: (str: string, begin?: number, end?: number) => string;
/**
 * sleep
 * @param callback 回调函数
 * @param ms 毫秒, 默认1000ms
 * @returns
 */
export declare const sleep: (callback?: () => void, ms?: number) => Promise<boolean>;
