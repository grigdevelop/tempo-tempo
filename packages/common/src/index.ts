import { sum } from '@gregoris/core';
export * from './configs';
export const calcSum = () => {
    console.log('10 + 15 = ', sum(10, 15));
};
