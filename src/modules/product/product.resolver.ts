import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateProductInput, Product } from '../../graphql.schema';
import { ProductService } from './product.service';

const pubSub = new PubSub();

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly _productService: ProductService) {}

  @Query('getProducts')
  async get(@Args('location_id') locationId: string): Promise<Product[]> {
    return this._productService.get(locationId);
  }

  @Mutation('createProduct')
  async create(
    @Args('input') createProductInput: CreateProductInput,
  ): Promise<Product> {
    const createdProduct = this._productService.create(createProductInput);

    await pubSub.publish('createdProduct', {
      createdProduct,
    });

    return createdProduct;
  }

  @Subscription('createdProduct')
  createdProduct() {
    return pubSub.asyncIterator('createdProduct');
  }
}
