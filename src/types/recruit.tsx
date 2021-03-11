export interface Cell {
    value: number | string | string[] | boolean;
    cellState: boolean;
}

export interface UniqueCell {
    cell: Cell;
    duplication: number[];
}

export interface Recruit {
    id: number;
    fullName: string;
    email: UniqueCell;
    phoneNumber: UniqueCell;
    age: Cell;
    expirience: Cell;
    yearlyIncome: Cell;
    hasChildren: Cell;
    licenseStates: Cell;
    expirationDate: Cell;
    licenseNumber: Cell;
    duplication: number[];
}
