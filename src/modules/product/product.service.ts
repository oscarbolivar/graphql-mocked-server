import { Injectable } from '@nestjs/common';
import { CreateProductInput, Product } from '../../graphql.schema';

@Injectable()
export class ProductService {
  get(locationId: string): Product[] {
    console.log('locationId', locationId);
    return [
      {
        id: '12345',
        location_id: '9999',
        name: 'Apple Vision Pro',
        price: 3999,
      },
      {
        id: '12346',
        location_id: '9999',
        name: 'Apple Watch',
        price: 799,
      },
    ];
  }

  create(createProduct: CreateProductInput): Product {
    console.log('createProduct', createProduct);
    return {
      id: '12347',
      location_id: '9999',
      name: 'iPhone 15 Pro Max',
      price: 2499,
    };
  }
}
