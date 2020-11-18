import React from 'react';
import XLSX from 'xlsx';
import './VocabularyDownloadPopup.css';
import Button from "../../ui/button/Button";

interface Props {
    hidden: boolean;
    documentName: string;
    downloadables: XLSX.WorkBook[];

    onClose(): void;
}

class VocabularyDownloadPopup extends React.PureComponent<Props> {
    /*----------------------------------------
    |   OnClick methods
    *----------------------------------------*/

    public onClickDownload(index: number): void {
        const workbook: XLSX.WorkBook = this.props.downloadables[index];
        const documentName: string = this.getDocumentName(index);

        XLSX.writeFile(workbook, documentName);
    }

    /*----------------------------------------
    |   Data methods
    *----------------------------------------*/

    private getDocumentName(index: number): string {
        const documentName = (this.props.documentName.trim().length > 0 ? this.props.documentName : "Vocabulary2Kahoot") + ".xlsx";

        if (this.props.downloadables.length === 1) return documentName;
        else return documentName + " " + (index + 1).toString();
    }


    /*----------------------------------------
    |   Render methods
    *----------------------------------------*/

    public render(): React.ReactNode {
        return (
            <div
                className={
                    "w-full h-full fixed inset-0 download-popup-overlay" +
                    (this.props.hidden ? " download-popup-hidden" : "")
                }
            >
                <div className={"flex justify-center mt-4"}>
                    <div className={"w-full max-w-md bg-white rounded p-2 box-border"}>
                        <div className={"flex justify-between items-center"}>
                            <h2 className={"text-xl font-bold"}>Downloads</h2>
                            <Button className={"w-10 h-10 text-white bg-red-300 border-red-400"} onClick={this.props.onClose}>&#9932;</Button>
                        </div>

                        <div className={"mt-2"}>
                            {this.renderDownloadables()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    public renderDownloadables(): React.ReactNode[] {
        const context = this;
        let nodes: React.ReactNode[] = [];

        this.props.downloadables.forEach(function (workbook: XLSX.WorkBook, index: number) {
            nodes.push(
                <div className={"flex justify-between items-center"}>
                    <span>{context.getDocumentName(index)}</span>
                    <Button className={"h-8 w-24 text-white bg-green-300 border-green-400"} onClick={context.onClickDownload.bind(context, index)}>Download</Button>
                </div>
            )
        });

        return nodes;
    }
}

export default VocabularyDownloadPopup;