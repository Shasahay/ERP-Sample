export interface IStudentTransportFee{
    Id: number;
    StudentId: string;
    Month: string;
    TransportFee: number;
    ComputedTransportFee: number;
    AmountPaid: number;
    PaidDateTime: string;
    DuesAmount: number;
}