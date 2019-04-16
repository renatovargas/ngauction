import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Product {
  constructor(
   public id: number,
   public title: string,
   public price: number,
   public rating: number,
   public description: string,
   public categories: string[]) {
 }
}

export class ProductService {

 getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title,
     p.price, p.rating, p.description, p.categories));
 }

 getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
 }
}

const products = [
  {
   'id': 0,
   'title': 'First Product',
   'price': 24.99,
   'rating': 4.3,
   'description': 'This is a short description. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'categories': ['electronics', 'hardware']
 },
 {
   'id': 1,
   'title': 'Second Product',
   'price': 64.99,
   'rating': 4.0,
   'description': 'This is a short description. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'categories': ['books']
 },
 {
   'id': 2,
   'title': 'Third Product',
   'price': 64.99,
   'rating': 3.5,
   'description': 'This is a short description. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'categories': ['books']
 },
 {
   'id': 3,
   'title': 'Fourth Product',
   'price': 22.99,
   'rating': 2.9,
   'description': 'This is a short description. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'categories': ['books']
 },
 {
   'id': 4,
   'title': 'Fifth Product',
   'price': 35.99,
   'rating': 3.5,
   'description': 'This is a short description. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'categories': ['books']
 },
 {
   'id': 5,
   'title': 'Sixth Product',
   'price': 44.99,
   'rating': 5.0,
   'description': 'This is a short description. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'categories': ['books']
 }];




