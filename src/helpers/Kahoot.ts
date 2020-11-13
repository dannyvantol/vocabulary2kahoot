import XLSX from 'xlsx';
import {KahootQuiz} from '../models/KahootQuiz';
import {KahootQuestion} from '../models/KahootQuestion';

export class Kahoot
{
    public static exportToXLSX(kahootQuiz: KahootQuiz): XLSX.WorkBook
    {
        let data = Kahoot.quizToXLSXFormat(kahootQuiz);
        data.unshift(['Question', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Time limit', 'Correct answer']);

        const workbook: XLSX.WorkBook = XLSX.utils.book_new();

        workbook.SheetNames.push('Kahoot quiz');
        workbook.Sheets['Kahoot quiz'] = XLSX.utils.aoa_to_sheet(data);

        return workbook;
    }

    public static quizToXLSXFormat(kahootQuiz: KahootQuiz): string[][]
    {
        let result: string[][] = [];

        kahootQuiz.questions.forEach(function (question: KahootQuestion) {
            let data: string[] = [];

            data.push(question.question)
            data = data.concat(question.answers);

            data.push(kahootQuiz.timeLimit.toString());
            data.push(question.answerPosition.toString());

            result.push(data);
        });

        return result;
    }
}