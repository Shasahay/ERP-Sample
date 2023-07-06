export interface IStudentTutionFee{
    Id: number;
    StudentId: string;
    Month: string;
    TutionFee: number;
    ComputedTutionFee: number;
    AmountPaid: number;
    PaidDateTime: string;
    DuesAmount: number;
}