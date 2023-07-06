export class StudymaterialFeeModel{
    id: number;
    studentId: string;
    studymaterialFee: number;
    discountType: string;
    discountUnit: string;
    discountAmount: number;
    computedStudymaterialFee: number;
    lastModifieddBy: string;
    lastModifiedDate: string;
}