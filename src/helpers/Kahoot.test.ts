import XLSX from 'xlsx';
import {Kahoot} from "./Kahoot";
import {KahootQuiz} from "../models/KahootQuiz";
import {KahootQuestion} from "../models/KahootQuestion";

const kahootSheetName = 'Kahoot quiz';
let kahootQuiz = new KahootQuiz(10);
kahootQuiz.push(
    new KahootQuestion(
        'question', ['answer 1', 'answer 2', 'answer 3', 'answer 4'], 2
    )
);


describe('Test Kahoot quizToXLSXFormat', function () {
    it('Should convert KahootQuiz to a 2d array', function () {
        const expected: string[][] = [
            ['question', 'answer 1', 'answer 2', 'answer 3', 'answer 4', '10', '2']
        ];

        const result: string[][] = Kahoot.quizToXLSXFormat(kahootQuiz);

        for(let i: number = 0; i < expected.length; i++) {
            for (let x = 0; x < expected[i].length; x++) {
                expect(result[i]).toContain(expected[i][x]);
            }
        }
    });
});

describe('Test Kahoot exportToXLSX method', function() {
    it('Should return XLSX workbook with sheet name "Kahoot quiz"', function () {
        const result: XLSX.WorkBook = Kahoot.exportToXLSX(kahootQuiz);

        expect(result.SheetNames).toContain(kahootSheetName);
    });

    it('Should return XLSX workbook with sheet data', function () {
        const expected: string[][] = [
            ['Question', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Time limit', 'Correct answer'],
            ['question', 'answer 1', 'answer 2', 'answer 3', 'answer 4', '10', '2']
        ];
        let rowData: string[][];

        const workbook: XLSX.WorkBook = Kahoot.exportToXLSX(kahootQuiz);
        const worksheet: XLSX.WorkSheet = workbook.Sheets[kahootSheetName];

        for (let row: number = 0; row < expected.length; row++) {
            let rowData: string[] = expected[row];

            for (let column: number = 0; column < rowData.length; column++) {
                let address: string = XLSX.utils.encode_cell({ r: row, c: column });
                expect(worksheet[address].v).toBe(rowData[column]);
            }
        }
    });
});

