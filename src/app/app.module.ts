import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {CartService} from "./services/cart.service";
import {CartPopupComponent} from "./pages/cart/cart-popup/cart-popup.component";
import {ProductService} from "./services/products.service";

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        CartPopupComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [CartService,ProductService],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class AppModule { }
