
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProductInput {
    id: string;
    name?: Nullable<string>;
    price?: Nullable<number>;
    location_id?: Nullable<number>;
}

export interface IQuery {
    getProducts(location_id: string): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

export interface IMutation {
    createProduct(input?: Nullable<CreateProductInput>): Nullable<Product> | Promise<Nullable<Product>>;
}

export interface ISubscription {
    createdProduct(): Nullable<Product> | Promise<Nullable<Product>>;
}

export interface Product {
    id: string;
    location_id?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
}

type Nullable<T> = T | null;
