import React from 'react';
import './VocabularyTable.css';

interface Props
{
    data: string[][];

    onRemoveRow(index: number): void
}

class VocabularyTable extends React.PureComponent<Props>
{
    /*----------------------------------------
    |   OnClick event methods
    *----------------------------------------*/

    public onClick(index: number): void
    {
        this.props.onRemoveRow(index);
    }


    /*----------------------------------------
    |   Render methods
    *----------------------------------------*/

    public render(): React.ReactNode
    {
        return (
            <div className={"p-2 box-border bg-white rounded"}>
                <table className={"w-full"}>
                    <thead>
                        <tr>
                            <th className={"text-sm pl-1"}>#</th>
                            <th className={"w-5/12 text-sm"}>Term</th>
                            <th className={"w-5/12 text-sm"}>Answer</th>
                            <th className={"w-1/12 text-sm"}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody(this.props.data)}
                        {this.renderNoDataMessage()}
                    </tbody>
                </table>


            </div>
        )
    }

    public renderTableBody(data: string[][]): React.ReactNode[]
    {
        const scope = this;
        let nodes: React.ReactNode[] = [];

        data.forEach(function (element: string[], index: number) {
            nodes.push((
                <tr key={index} className={"odd:bg-gray-200"}>
                    <td className={"w-1/12 text-sm pl-1"}>{index + 1}</td>
                    <td className={"w-5/12 text-sm"}>{element[0]}</td>
                    <td className={"w-5/12 text-sm"}>{element[1]}</td>
                    <td className={"w-1/12 text-sm text-right pr-1"}>
                        <button className={"focus:outline-none"} onClick={scope.onClick.bind(scope, index)}>
                            <span className={"text-red-300"}>&#10006;</span>
                        </button>
                    </td>
                </tr>
            ));
        });

        return nodes;
    }

    public renderNoDataMessage(): React.ReactNode | void
    {

        if (this.props.data.length === 0)
            return (
                <tr className={"mt-1 text-sm text-gray-500"}>
                    <td className={"pl-1"}>1</td>
                    <td>Lorem ipsum dolor sit amet</td>
                    <td>consectetur adipiscing elit</td>
                </tr>
            );
    }
}

export default VocabularyTable;