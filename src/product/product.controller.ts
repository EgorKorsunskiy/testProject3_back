import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from 'src/assets/entities/product-entity';
import { DeleteInterface } from 'src/assets/interfaces/deleteInterface';
import { productDTO } from 'src/assets/interfaces/productDTO';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get("/products")
    getProducts(): Promise<Product[]>{
        return this.productService.findAll()
    }

    @Post("create")
    createProduct(@Body() Body: productDTO): void{
        this.productService.createProduct(Body)
    }

    @Delete("delete")
    deleteProducts(@Body() Body: DeleteInterface): void{
        this.productService.deleteProducts(Body)
    }
}
