import XLSX from 'xlsx';
import {KahootQuiz} from '../models/KahootQuiz';
import {KahootQuestion} from '../models/KahootQuestion';
import {Random} from '../helpers/Random';
import {Kahoot} from '../helpers/Kahoot';

export class KahootService
{
    public static createQuiz(data: string[][], timeLimit: number): KahootQuiz
    {
        let kahootQuiz: KahootQuiz = new KahootQuiz(timeLimit);
        let availableAnswers: string[] = data.map(function (element: string[]): string {
            return element[1];
        });

        let buffer: string[][] = [];
        let bufferSize: number = Math.floor(data.length / 16);

        data.forEach(function (element: string[]) {
            kahootQuiz.push(KahootService.createSingleQuestion(element, availableAnswers, buffer));
            let toRecover: string[] = KahootService.shiftBuffer(buffer, bufferSize);
            availableAnswers = [...availableAnswers, ...toRecover];
        });

        return kahootQuiz;
    }

    public static exportToXLSX(kahootQuiz: KahootQuiz): XLSX.WorkBook
    {
        return Kahoot.exportToXLSX(kahootQuiz);
    }

    private static createSingleQuestion(data: string[], availableAnswers: string[], buffer: string[][]): KahootQuestion
    {
        const question: string = data[0];

        const answer: string = data[1];
        const answerIndex: number = availableAnswers.indexOf(answer);
        const answerPosition: number = Random.number(0, 3);

        let answers: string[] = [];
        answers[answerPosition] = answer;

        let addToBuffer: string[] = [];

        if (answerIndex !== -1) {
            availableAnswers.splice(answerIndex, 1);
            addToBuffer.push(answer);
        }

        this.pickRandomAnswers(answers, answerPosition, availableAnswers, addToBuffer);

        buffer.push(addToBuffer);

        return new KahootQuestion(question, answers, answerPosition);
    }

    private static pickRandomAnswers(
        answers: string[],
        answerPosition: number,
        availableAnswers: string[],
        buffer: string[]
    ): void
    {
        let position = 0;

        while ((answers.length === 4 && position < 3) || answers.length < 4) {
            if (position === answerPosition) position++;

            let randomIndex = Random.number(0, availableAnswers.length) - 1;
            let randomAnswer: string = availableAnswers[randomIndex];

            answers[position] = randomAnswer;
            buffer.push(randomAnswer);
            availableAnswers.splice(randomIndex, 1);

            position++;
        }
    }

    private static shiftBuffer(buffer: string[][], bufferSize: number): string[]
    {
        let toRecover: string[] = [];

        if (buffer.length >= bufferSize) toRecover = buffer.splice(0, 1)[0];

        return toRecover;
    }
}