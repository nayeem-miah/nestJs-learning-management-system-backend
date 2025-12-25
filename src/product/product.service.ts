/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getProduct() {
        return { message: 'product get success!' };
    }
}
