import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'name 1', price: 100, photo: 'https://cdn.jsdelivr.net/gh/masterh4cker/project03@master/src/assets/images/shoe1.jpg' },
            { id: 'p02', name: 'name 2', price: 200, photo: 'https://cdn.jsdelivr.net/gh/masterh4cker/project03@master/src/assets/images/shoe2.jpg' },
            { id: 'p03', name: 'name 3', price: 300, photo: 'https://cdn.jsdelivr.net/gh/masterh4cker/project03@master/src/assets/images/shoe3.jpg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}