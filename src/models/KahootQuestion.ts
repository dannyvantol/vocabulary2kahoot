export class KahootQuestion
{
    private readonly _question: string;
    private readonly _answers: string[];
    private readonly _answerPosition: number;

    constructor(question: string, answers: string[], answerPosition: number)
    {
        this._question = question;
        this._answers = answers;
        this._answerPosition = answerPosition;
    }

    get question(): string
    {
        return this._question;
    }

    get answers(): string[]
    {
        return this._answers;
    }

    get answerPosition(): number
    {
        return this._answerPosition;
    }
}