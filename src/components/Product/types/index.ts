import { IPrice } from "../../../types";

export interface IBaseProductDescription {
    title: string;
    sku: string;
    description: string;
    onHand: number;
    price: IPrice;
}