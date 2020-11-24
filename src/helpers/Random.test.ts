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

describe('Test Random arrayOrder', function () {
    it('Should return array with four elements', function () {
        const array: number[] =  [1, 2, 3, 4];

        const result: number[] = Random.arrayOrder<number>(array);

        expect(result.length).toBe(4);
    });

    it('Should return new array that does not match the given array', function () {
        const array: number[] =  [1, 2, 3, 4];
        let doesNotMatch: boolean = false;

        const result: number[] = Random.arrayOrder<number>(array);


        for (let i = 0; i < array.length; i++) {
            if (result[i] === array[i]) {
                doesNotMatch = true;
                break;
            }
        }

        expect(doesNotMatch).toBeTruthy();
    });
});