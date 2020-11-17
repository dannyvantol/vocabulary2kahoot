import {Random} from './Random';

describe('Test Random number', function () {
    it('Should return zero when minimum is zero and maximum is zero', function () {
        const minimum: number = 0;
        const maximum: number = 0;

        const result: number = Random.number(minimum, maximum);

        expect(result).toBe(0);
    });

    it('Should return ten when minimum is ten and maximum is ten', function () {
        const minimum: number = 10;
        const maximum: number = 10;

        const result: number = Random.number(minimum, maximum);

        expect(result).toBe(10);
    });
});