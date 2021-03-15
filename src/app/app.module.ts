import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routes} from './app.routes';
import {UserService} from './services/user.service';
import {BaseService} from './services/base.service';
import {ProductService} from './services/product.service';
import { UserRegistration} from './components/userRegistration';
import {DashBord} from './components/dashBord';
import {Login} from './components/login';
import {AdminCategory} from './components/adminCategory';
import {AdminProduct} from './components/adminProduct';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent, DashBord, AdminCategory,
    UserRegistration, Login, AdminProduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, NgxPaginationModule, PdfViewerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, BaseService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
