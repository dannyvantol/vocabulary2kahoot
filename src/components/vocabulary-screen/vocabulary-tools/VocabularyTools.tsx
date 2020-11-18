import React from 'react';
import Button from '../../ui/button/Button';

interface Props {
    timeLimit: number;

    onChangeTimeLimit(value: number): void;

    onInputQuestionsPerQuiz(value: number): void;

    onInputDocumentName(value: string): void;

    onClickClear(): void;

    onClickSwap(): void;

    onClickDownload(): void;
}

class VocabularyTools extends React.PureComponent<Props> {
    /*----------------------------------------
    |   OnEvent methods
    *----------------------------------------*/

    public onChangeSecondsPerQuestion(event: React.FormEvent<HTMLSelectElement>): void {
        const value: number = parseInt(event.currentTarget.value);
        this.props.onChangeTimeLimit(value);
    }

    public onInputQuestionPerQuiz(event: React.FormEvent<HTMLInputElement>): void {
        const value: number = parseInt(event.currentTarget.value);
        this.props.onInputQuestionsPerQuiz(value);
    }

    public onInputDocumentName(event: React.FormEvent<HTMLInputElement>): void {
        const value: string = event.currentTarget.value;
        this.props.onInputDocumentName(value);
    }


    /*----------------------------------------
    |   Render methods
    *----------------------------------------*/

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={"flex justify-between"}>
                    <div className={"flex items-center"}>
                        <select
                            className={"w-12 h-8"} value={this.props.timeLimit}
                            onChange={this.onChangeSecondsPerQuestion.bind(this)}>
                            <option value={"5"}>5</option>
                            <option value={"10"}>10</option>
                            <option value={"20"}>20</option>
                            <option value={"30"}>30</option>
                            <option value={"60"}>60</option>
                            <option value={"90"}>90</option>
                            <option value={"120"}>120</option>
                            <option value={"240"}>240</option>
                        </select>

                        <span className={"text-white ml-2"}>seconds per question</span>
                    </div>

                    <div className={"flex items-center"}>
                        <input
                            type={"text"}
                            className={"w-12 p-2 box-border"}
                            placeholder={"0"}
                            onInput={this.onInputQuestionPerQuiz.bind(this)}
                        />

                        <span className={"text-white ml-2"}>questions per quiz</span>
                    </div>
                </div>
                <div className={"flex justify-between mt-2"}>
                    <input
                        type={"text"}
                        className={"flex-grow p-2 box-border"}
                        placeholder={"Document name"}
                        onInput={this.onInputDocumentName.bind(this)}
                    />

                    <div className={"ml-2"}>
                        <Button
                            className={"w-10 text-white bg-red-300 border-red-400"}
                            onClick={this.props.onClickClear}>
                            &#8634;
                        </Button>

                        <Button
                            className={"w-10 text-white bg-yellow-300 border-yellow-400 ml-2"}
                            onClick={this.props.onClickSwap}>
                            &#8646;
                        </Button>

                        <Button
                            className={"w-24 text-white bg-green-300 border-green-400 ml-2"}
                            onClick={this.props.onClickDownload}>
                            Download
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VocabularyTools;