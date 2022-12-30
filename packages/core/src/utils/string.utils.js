"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
    static isNullOrEmpty(str) {
        return str === undefined || str === null || str === '';
    }
}
exports.StringUtils = StringUtils;
