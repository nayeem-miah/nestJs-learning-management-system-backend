/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product') /// * /product/get-product
export class ProductController {
    constructor(private readonly ProductService: ProductService) { }
    @Get('/get-product')

    getAll() {
        return this.ProductService.getProduct()
    }


}
