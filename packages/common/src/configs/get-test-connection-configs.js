"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestConnectionConfigs = void 0;
const getTestConnectionConfigs = () => {
    return {
        type: 'postgres',
        database: 'gregoris_tests',
        username: 'postgres',
        password: 'password',
        host: 'localhost',
        port: 5432
    };
};
exports.getTestConnectionConfigs = getTestConnectionConfigs;
