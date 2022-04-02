import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductType } from "../interfaces/ProductEntityInterface";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    SKU: string

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    type: ProductType

    @Column()
    additionalInfo: string

}
