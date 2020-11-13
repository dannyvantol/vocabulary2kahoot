import {KahootQuestion} from './KahootQuestion';

export class KahootQuiz
{
    private _questions: KahootQuestion[];
    private readonly _timeLimit: number;

    constructor(timeLimit: number)
    {
        this._questions = [];
        this._timeLimit = timeLimit;
    }

    get questions(): KahootQuestion[]
    {
        return this._questions;
    }

    get timeLimit(): number
    {
        return this._timeLimit;
    }

    public push(kahootQuestion: KahootQuestion): void
    {
        this._questions.push(kahootQuestion);
    }
}