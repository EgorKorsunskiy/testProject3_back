import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/assets/entities/product-entity';
import { DeleteInterface } from 'src/assets/interfaces/deleteInterface';
import { productDTO } from 'src/assets/interfaces/productDTO';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private connection: Connection
    ){}

    async findAll(): Promise<Product[]>{
        return await this.productRepository.find()
    }

    createProduct(Body: productDTO): void{
        const product = new Product()
    
        product.SKU = Body.SKU
        product.name = Body.name
        product.price = parseInt(Body.price, 10)
        product.type = Body.type
        product.additionalInfo = Body.additionalInfo
        
        this.productRepository.save(product)
    }

    deleteProducts(Body: DeleteInterface): void{
        this.productRepository.delete(Body.ids)
    }
}
