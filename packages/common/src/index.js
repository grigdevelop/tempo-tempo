"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSum = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@gregoris/core");
tslib_1.__exportStar(require("./configs"), exports);
const calcSum = () => {
    console.log('10 + 15 = ', (0, core_1.sum)(10, 15));
};
exports.calcSum = calcSum;
