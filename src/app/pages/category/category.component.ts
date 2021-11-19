import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products:Array<Product>;
    private sub;
    constructor(
         private productService:ProductService,
         private cartService:CartService,
         private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
    //    this.sub = this.productService.getProducts('http://localhost:5000/api/v1/Furniture/getAll')
    //         .subscribe(res => {
    //             this.products = res.Products;     
    //             console.log(this.products)    
    //         })
    this.sub = this.productService.getProducts('http://localhost:5000/api/v1/Furniture/getAll').subscribe(
        res=>{
          this.products=res.Products;
        })
    };
    addToCart = (product) => {
        this.cartService.addToCart({product,quantity:1})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
