import { XmlElement } from 'ag-grid-community';
import { ExcelRow, ExcelXMLTemplate } from 'ag-grid-community';
import cell from './cell';

const row: ExcelXMLTemplate = {
    getTemplate(r: ExcelRow): XmlElement {
        const { cells } = r;

        return {
            name: "Row",
            children: cells.map(it => cell.getTemplate(it))
        };
    }
};

export default row;