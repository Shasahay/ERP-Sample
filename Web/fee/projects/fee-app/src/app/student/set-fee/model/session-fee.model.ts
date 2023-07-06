export class SeesionFeeModel{
    id: number;
    studentId: string;
    SessionFee: number;
    discountType: string;
    discountUnit: string;
    discountAmount: number;
    computedSessionFee: number;
    lastModifieddBy: string;
    lastModifiedDate: string;
}