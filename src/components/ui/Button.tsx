import React from 'react';

interface Props
{
    className?: string;
    onClick(): void;
}

class Button extends React.PureComponent<Props>
{
    private static readonly DEFAULT_CLASS_NAME: string = "h-10 text-lg border-b-2"

    public getClassName(): string
    {
        let className: string = Button.DEFAULT_CLASS_NAME;
        if (this.props.className !== undefined) className+= ' ' + this.props.className;

        return className;
    }

    public render(): React.ReactNode
    {
        return (
            <button className={this.getClassName()} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

export default Button;