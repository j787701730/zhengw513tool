/** 判断是否数组 */
export const isArray = (value: any): boolean => {
  return Array.isArray(value);
};

/** 转成数组 */
export const toArray = (value: any): any[] => {
  return Array.isArray(value) ? value : [];
};

/** 判断是否对象 */
export const isObject = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

/** 转成对象 */
export const toObject = (value: any): object => {
  return isObject(value) ? value : {};
};

/** 判断是否数字 */
export const isNumber = (value: any): boolean => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/** 转成数字 */
export const toNumber = (str: any): number => {
  return isNumber(str) ? Number(str) : 0;
};

/** 转成字符串并去除前后空格 */
export const toStringAndTrim = (value: any, trim = false): string => {
  const str = typeof value == "string" ? value : "";
  return trim ? str.trim() : str;
};

/** 只保留数字 */
export const preserveNumbers = (val: any): string => {
  return `${val}`.replace(/[^0-9]/gi, "");
};

/** 判断是json数据 */
export const isJson = (str: any): boolean => {
  if (str && typeof str == "string") {
    try {
      const obj = JSON.parse(str);
      return obj && typeof obj == "object";
    } catch (_e) {
      //
    }
  }
  return false;
};

/**
 * 解码json数据
 * @param data 数据
 * @returns array | object | null
 */
export const jsonParse = (data: any): any[] | object | null => {
  if (data) {
    if (typeof data == "string") {
      try {
        const obj = JSON.parse(data);
        if (["Array", "Object"].includes(Object.prototype.toString.call(obj).slice(8, -1))) {
          return obj;
        }
      } catch (e) {
        //
      }
    } else if (["Array", "Object"].includes(Object.prototype.toString.call(data).slice(8, -1))) {
      return data;
    }
  }
  return null;
};

/** 转换文件大小 */
export const formatFileSize = (fileSize: any): string => {
  fileSize = toNumber(fileSize);
  if (fileSize == 0) {
    return "0B";
  }
  const unitArr = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let index = 0;
  index = Math.floor(Math.log(fileSize) / Math.log(1024));
  const size = fileSize / 1024 ** index;
  return size.toFixed(0) + unitArr[index];
};

/** 文本脱敏 */
export const desensitizedCommon = (str: string, begin: number = 1, end: number = 1) => {
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

/**
 * sleep
 * @param callback 回调函数
 * @param ms 毫秒, 默认1000ms
 * @returns
 */
export const sleep = (callback?: () => void, ms: number = 1000): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback?.();
      resolve(true);
    }, ms);
  });
};
