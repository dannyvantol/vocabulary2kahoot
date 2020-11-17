import XLSX from 'xlsx';
import {KahootService} from "./KahootService";
import {KahootQuiz} from "../models/KahootQuiz";

const data: string[][] = [
    ['term1', 'answer1'],
    ['term2', 'answer2'],
    ['term3', 'answer3']
]

const timeLimit: number = 20;

describe('Test KahootService createQuiz', function () {
    it('Should return KahootQuiz instance', function () {
        const result: KahootQuiz = KahootService.createQuiz(data, timeLimit);
        expect(result).toBeInstanceOf(KahootQuiz);
    });
});

describe('Test KahootService exportToXLSX', function () {
    it('Should return XLSX.WorkBook instance', function () {
        const kahootQuiz: KahootQuiz = KahootService.createQuiz(data, timeLimit);

        const result: XLSX.WorkBook = KahootService.exportToXLSX(kahootQuiz);

        expect(result).not.toBe(null);
    });
});