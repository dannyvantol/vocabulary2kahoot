export class Random
{
    public static number(minimum: number, maximum: number): number
    {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    public static arrayOrder<T>(array: T[]): T[] {
        let newArray: T[] = [...array];

        for (let i: number = newArray.length - 1; i >= 0; i--) {
            let randomIndex: number = Random.number(0, i);
            let temporary: T = newArray[i];

            newArray[i] = newArray[randomIndex];
            newArray[randomIndex] = temporary;
        }

        return newArray;
    }
}