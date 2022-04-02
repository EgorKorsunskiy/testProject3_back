import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ProductType } from "./ProductEntityInterface";

export class productDTO{
    @IsNotEmpty()
    @IsString()
    SKU: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: string;

    @IsNotEmpty()
    type: ProductType

    @IsNotEmpty()
    additionalInfo: string;
}