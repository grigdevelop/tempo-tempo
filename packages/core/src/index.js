"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./exceptions"), exports);
tslib_1.__exportStar(require("./utils"), exports);
function sum(a, b) {
    return a + b + a;
}
exports.sum = sum;
