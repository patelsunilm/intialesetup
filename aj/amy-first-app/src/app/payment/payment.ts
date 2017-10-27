export class Payment {
    _id?: string; // ? mark is used to show the field is optional
    card_number?: number;
    exp_month?: number;
    exp_year?: number;
    cvc?: number;
    token_id?: string;
    amount: number;
    email: string;
    description: string
}