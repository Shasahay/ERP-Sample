export interface StudentSetFeeView{
    id: number;
    studentId: string;
    firstName: string;
    lastName:string;
    fatherName: string;
    class: string;
    tutionFee: number;
    tutionFeeDiscountType: string;
    tutionFeeDiscount:string; //Rs or percentage
    computedTutionFee: number
    transportFee: number;
    transportFeeDiscountType: string;
    transportFeeDiscount:string; //Rs or percentage
    computedTransportFee: number
    sessionFee: number;
    sessionFeeDiscountType: string;
    sessionFeeDiscount:string;  //Rs or percentage
    computedSessionFee: number
    admissionFee: number;
    admissionFeeDiscountType: string;
    admissionFeeDiscount:string; //Rs or percentage
    computedAdmissionFee: number
    attirefee: number;
    attireFeeDiscountType: string;
    attireFeeDiscount:string; //Rs or percentage
    computedAttireFee: number
    studyMaterialFee: number;
    studyMaterialFeeDiscountType: string;
    studyMaterialFeeDiscount:string; //Rs or percentage
    computedStudyMaterialFee: number
    miscellaneousFee: number;
    miscellaneousFeeDiscountType: string;
    miscellaneousFeeDiscount:string; //Rs or percentage
    computedMiscellaneousFee: number
}