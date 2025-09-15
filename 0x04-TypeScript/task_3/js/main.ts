/// <reference path="./crud.d.ts" />
/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud'; // CHANGE THIS LINE

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// ADD CRUD. PREFIX TO ALL FUNCTION CALLS
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);