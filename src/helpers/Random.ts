export class Random
{
    public static number(minimum: number, maximum: number): number
    {
        return Math.floor(Math.random() * maximum - minimum + 1) + minimum;
    }
}