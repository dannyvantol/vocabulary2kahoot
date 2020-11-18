import XLSX from 'xlsx';
import {KahootService} from "./KahootService";
import {KahootQuiz} from "../models/KahootQuiz";

const data: string[][] = [
    ['term1', 'answer1'],
    ['term2', 'answer2'],
    ['term3', 'answer3'],
    ['term4', 'answer4']
]

const timeLimit: number = 20;

describe('Test KahootService createQuiz', function () {
    it('Should return one KahootQuiz instance with four questions and questions per quiz is four', function () {
        const result: KahootQuiz[] = KahootService.createQuiz(data, timeLimit, 4);
        expect(result.length).toBe(1);
    });

    it('Should return two KahootQuiz instances with four questions and questions per quiz is two', function () {
        const result: KahootQuiz[] = KahootService.createQuiz(data, timeLimit, 2);
        expect(result.length).toBe(2);
    });

    it('Should return two KahootQuiz instances with four questions and questions per quiz is three', function () {
        const result: KahootQuiz[] = KahootService.createQuiz(data, timeLimit, 3);
        expect(result.length).toBe(2);
    });
});

describe('Test KahootService exportToXLSX', function () {
    it('Should return XLSX.WorkBook instance', function () {
        const kahootQuiz: KahootQuiz[] = KahootService.createQuiz(data, timeLimit, 4);
        const result: XLSX.WorkBook = KahootService.exportToXLSX(kahootQuiz[0]);

        expect(result).not.toBe(null);
    });
});