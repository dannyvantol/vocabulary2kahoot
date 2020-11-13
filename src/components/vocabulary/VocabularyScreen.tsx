import React, {ReactNode} from 'react';
import VocabularyInput from "./VocabularyInput";
import VocabularyTable from './VocabularyTable';
import VocabularyTools from './VocabularyTools';

interface State
{
    data: string[][];
    timeLimit: number;
}

class VocabularyScreen extends React.Component<{}, State>
{
    constructor(props: {})
    {
        super(props);

        this.state = {
            data: [],
            timeLimit: 20
        }
    }


    /*----------------------------------------
    |   Component event methods
    *----------------------------------------*/

    public onSubmitVocabularyInput(term: string, answer: string): void
    {
        let newState = [...this.state.data];
        newState.push([term, answer]);

        this.setState({data: newState});
    }

    public onRemoveRowVocabularyTable(index: number): void
    {
        let newState: string[][] = [...this.state.data];

        if (newState[index] !== undefined) {
            newState.splice(index, 1);
            this.setState({data: newState})
        }
    }

    public onChangeTimeLimitVocabularyTools(value: number): void
    {
        this.setState({timeLimit: value});
    }

    public onClickClearVocabularyTools(): void
    {
        this.setState({data: []})
    }

    public onClickSwapVocabubaryTools(): void
    {
        let newState: string[][] = [];

        this.state.data.forEach(function (element: string[]) {
            newState.push([element[1], element[0]]);
        });

        this.setState({data: newState});
    }

    public onClickDownloadVocabularyTools(): void
    {

    }


    /*----------------------------------------
    |   Render methods
    *----------------------------------------*/

    public render(): ReactNode
    {
        return (
            <React.Fragment>
                <header className={"mt-10"}>
                    <h1 className={"text-2xl text-white text-center font-bold"}>Vocabulary2Kahoot</h1>
                </header>

                <div className={"min-w-lg max-w-xl mx-auto mt-3"}>
                    <VocabularyInput onSubmit={this.onSubmitVocabularyInput.bind(this)}/>

                    <div className={"mt-3"}>
                        <VocabularyTools
                            timeLimit={this.state.timeLimit}
                            onChangeTimeLimit={this.onChangeTimeLimitVocabularyTools.bind(this)}
                            onClickClear={this.onClickClearVocabularyTools.bind(this)}
                            onClickSwap={this.onClickSwapVocabubaryTools.bind(this)}
                            onClickDownload={this.onClickDownloadVocabularyTools.bind(this)}
                        />
                    </div>

                    <div className={"mt-3"}>
                        <VocabularyTable data={this.state.data} onRemoveRow={this.onRemoveRowVocabularyTable.bind(this)}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VocabularyScreen;