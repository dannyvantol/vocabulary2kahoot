import React from 'react';
import {Keyboard} from "../../helpers/Keyboard";
import {OnInput, OnKeyPress} from "../../interfaces/Events";
import Button from '../ui/Button';

interface Props
{
    onSubmit(term: string, answer: string): void;
}

interface State
{
    term: string;
    answer: string;
}

class VocabularyInput extends React.Component<Props, State>
{
    private readonly termRef: React.RefObject<HTMLInputElement>;
    private readonly answerRef: React.RefObject<HTMLInputElement>;

    public constructor(props: Props)
    {
        super(props);

        this.termRef = React.createRef();
        this.answerRef = React.createRef();

        this.state = {
            term: '',
            answer: ''
        };
    }

    /*----------------------------------------
    |   Component event methods
    *----------------------------------------*/

    public componentDidMount(): void
    {
        this.termRef.current?.focus();
    }


    /*----------------------------------------
    |   OnInput event methods
    *----------------------------------------*/

    public onInputTerm(event: React.FormEvent<HTMLInputElement>): void
    {
        this.setState({term: event.currentTarget.value});
    }

    public onInputAnswer(event: React.FormEvent<HTMLInputElement>): void
    {
        this.setState({answer: event.currentTarget.value});
    }


    /*----------------------------------------
    |   OnKeyPress event methods
    *----------------------------------------*/

    public onKeyPressTerm(event: React.KeyboardEvent<HTMLInputElement>): void
    {
        if (event.key === Keyboard.ENTER) this.answerRef.current?.focus();
    }

    public onKeyPressAnswer(event: React.KeyboardEvent<HTMLInputElement>): void
    {
        if (event.key === Keyboard.ENTER || event.key === Keyboard.TAB) this.onSubmit();
    }


    /*----------------------------------------
    |   OnSubmit methods
    *----------------------------------------*/

    private onSubmit(): void
    {
        if (this.inputValuesAreValid()) {
            this.clearState();

            this.termRef.current?.focus();
            this.props.onSubmit(this.state.term, this.state.answer);
        } else {
            alert('Fill in both fields');
        }
    }

    /*----------------------------------------
    |   Validate methods
    *----------------------------------------*/

    public inputValuesAreValid(): boolean
    {
        let termLength: number = this.state.term.trim().length;
        let answerLength: number = this.state.answer.trim().length;

        return (termLength > 0 && answerLength > 0);
    }


    /*----------------------------------------
    |   Data methods
    *----------------------------------------*/

    public clearState(): void
    {
        this.setState({
            term: '',
            answer: ''
        });
    }


    /*----------------------------------------
    |   Render methods
    *----------------------------------------*/

    public render(): React.ReactNode
    {
        return (
            <div className={"w-full flex items-center border-white border-b-2 pb-1"}>
                {this.renderInput(
                    this.state.term, 'Term', 120,
                    this.onInputTerm, this.onKeyPressTerm,
                    this.termRef
                )}

                <span className={"text-lg text-white"}>&rarr;</span>

                {this.renderInput(
                    this.state.answer, 'Answer', 75,
                    this.onInputAnswer, this.onKeyPressAnswer,
                    this.answerRef
                )}

                <Button
                    className={"w-10 text-white font-bold bg-blue-300 border-blue-400"}
                    onClick={this.onSubmit.bind(this)}>
                    +
                </Button>
            </div>
        );
    }

    public renderInput
    (
        value: string, placeholder: string, maxLength: number,
        onInput: OnInput<HTMLInputElement>, onKeyPress: OnKeyPress<HTMLInputElement>,
        ref: React.RefObject<HTMLInputElement>
    ): React.ReactNode
    {
        return (
            <input type={"text"}
                   value={value}
                   placeholder={placeholder}
                   maxLength={maxLength}
                   onInput={onInput.bind(this)} ref={ref}
                   onKeyPress={onKeyPress.bind(this)}
                   className={"flex-grow text-white bg-transparent p-1 box-border focus:outline-none"}
            />
        );
    }
}

export default VocabularyInput;