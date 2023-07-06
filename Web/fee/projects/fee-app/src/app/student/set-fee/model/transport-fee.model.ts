export class TransportFeeModel{
    id: number;
    studentId: string;
    transportFee: number;
    discountType: string;
    discountUnit: string;
    discountAmount: number;
    computedTransportFee: number;
    lastModifieddBy: string;
    lastModifiedDate: string;
}