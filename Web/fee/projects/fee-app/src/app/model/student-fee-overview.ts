export interface IStudentFeeOverview{
    Id: number
    studentId: string;
    firstName: string;
    lastName:string;
    fatherName: string;
    class: string;
    tutionFee: number;
    computedTutionFee: number
    totalFee: number;
    totalComputedFee: number;
    lastPaidFee: number;
    lastFeePaidDatatime: string;
    totalpaidFee: number;
    totalDues: number;
}


