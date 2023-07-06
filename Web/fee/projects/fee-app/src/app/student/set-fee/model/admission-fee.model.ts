export class AdmissionFeeModel{
    id: number;
    studentId: string;
    admissionFee: number;
    discountType: string;
    discountUnit: string;
    discountAmount: number;
    computedAdmissionFee: number;
    lastModifieddBy: string;
    lastModifiedDate: string;
}