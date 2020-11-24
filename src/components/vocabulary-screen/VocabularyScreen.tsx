import React, {ReactNode} from 'react';
import XLSX from 'xlsx';

import VocabularyInput from "./vocabulary-input/VocabularyInput";
import VocabularyTable from './vocbulary-table/VocabularyTable';
import VocabularyTools from './vocabulary-tools/VocabularyTools';

import {KahootService} from '../../services/KahootService';
import {KahootQuiz} from '../../models/KahootQuiz';
import VocabularyDownloadPopup from "./vocabulary-download-popup/VocabularyDownloadPopup";
import {Random} from "../../helpers/Random";

interface State {
    data: string[][];
    timeLimit: number;
    randomOrder: boolean;
    questionPerQuiz: number;
    documentName: string;
    downloadables: XLSX.WorkBook[];
    downloadPopupHidden: boolean;
}

class VocabularyScreen extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: [],
            timeLimit: 20,
            randomOrder: false,
            questionPerQuiz: 0,
            documentName: '',
            downloadables: [],
            downloadPopupHidden: true
        }
    }


    /*----------------------------------------
    |   Component event methods
    *----------------------------------------*/

    public onSubmitVocabularyInput(term: string, answer: string): void {
        let newState = [...this.state.data];
        newState.push([term, answer]);

        this.setState({data: newState});
    }

    public onRemoveRowVocabularyTable(index: number): void {
        let newState: string[][] = [...this.state.data];

        if (newState[index] !== undefined) {
            newState.splice(index, 1);
            this.setState({data: newState})
        }
    }

    public onChangeTimeLimitVocabularyTools(value: number): void {
        this.setState({timeLimit: value});
    }

    public onChangeRandomOrderVocabularyTools(value: boolean): void {
        this.setState({randomOrder: value});
    }

    public onInputQuestionPerQuizVocabularyTools(value: number): void {
        this.setState({questionPerQuiz: value});
    }

    public onInputDocumentNameVocabularyTools(value: string): void {
        this.setState({documentName: value});
    }

    public onClickClearVocabularyTools(): void {
        this.setState({data: []})
    }

    public onClickSwapVocabubaryTools(): void {
        let newState: string[][] = [];

        this.state.data.forEach(function (element: string[]) {
            newState.push([element[1], element[0]]);
        });

        this.setState({data: newState});
    }

    public onClickDownloadVocabularyTools(): void {
        const data: string[][] = this.state.randomOrder ? Random.arrayOrder<string[]>(this.state.data) : this.state.data;

        if (this.dataHasFourOrMoreEntries()) {
            const kahootQuizSize = (this.state.questionPerQuiz <= 0) ? this.state.data.length : this.state.questionPerQuiz;
            const kahootQuizzes: KahootQuiz[] = KahootService.createQuiz(data, this.state.timeLimit, kahootQuizSize);

            let downloadables: XLSX.WorkBook[] = [];

            kahootQuizzes.forEach(function (kahootQuiz: KahootQuiz) {
                downloadables.push(
                    KahootService.exportToXLSX(kahootQuiz)
                );
            });

            this.setState({
                downloadables: downloadables,
                downloadPopupHidden: false
            });
        } else {
            alert('At least four terms are required to create a Kahoot quiz');
        }
    }

    public onClickCloseVocabularyDownloadPopup(): void {
        this.setState({downloadPopupHidden: true});
    }


    /*----------------------------------------
    |   Validate methods
    *----------------------------------------*/

    public dataHasFourOrMoreEntries(): boolean {
        return this.state.data.length >= 4;
    }

    /*----------------------------------------
    |   Render methods
    *----------------------------------------*/

    public render(): ReactNode {
        return (
            <React.Fragment>
                <header className={"mt-10"}>
                    <h1 className={"text-2xl text-white text-center font-bold"}>Vocabulary2Kahoot</h1>
                </header>

                <div className={"max-w-xl mx-auto mt-3"}>
                    <VocabularyInput onSubmit={this.onSubmitVocabularyInput.bind(this)}/>

                    <div className={"mt-3"}>
                        <VocabularyTools
                            timeLimit={this.state.timeLimit}
                            randomOrder={this.state.randomOrder}
                            onChangeTimeLimit={this.onChangeTimeLimitVocabularyTools.bind(this)}
                            onChangeRandomOrder={this.onChangeRandomOrderVocabularyTools.bind(this)}
                            onInputQuestionsPerQuiz={this.onInputQuestionPerQuizVocabularyTools.bind(this)}
                            onInputDocumentName={this.onInputDocumentNameVocabularyTools.bind(this)}
                            onClickClear={this.onClickClearVocabularyTools.bind(this)}
                            onClickSwap={this.onClickSwapVocabubaryTools.bind(this)}
                            onClickDownload={this.onClickDownloadVocabularyTools.bind(this)}
                        />
                    </div>

                    <div className={"mt-3"}>
                        <VocabularyTable
                            data={this.state.data}
                            onRemoveRow={this.onRemoveRowVocabularyTable.bind(this)}
                        />
                    </div>
                </div>

                <VocabularyDownloadPopup
                    hidden={this.state.downloadPopupHidden}
                    documentName={this.state.documentName}
                    downloadables={this.state.downloadables}
                    onClose={this.onClickCloseVocabularyDownloadPopup.bind(this)}
                />
            </React.Fragment>
        );
    }
}

export default VocabularyScreen;