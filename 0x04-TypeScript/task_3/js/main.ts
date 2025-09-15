/// <reference path="./crud.d.ts" />
/// <reference path="./interface.ts" />
import { RowID, RowElement } from './interface';
import { insertRow, deleteRow, updateRow } from './crud';
// Use global functions directly (no import needed)
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
updateRow(newRowID, updatedRow);
deleteRow(newRowID);