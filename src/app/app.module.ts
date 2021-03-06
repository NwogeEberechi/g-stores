import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { UserService } from './service/user.service';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ShoopingCartComponent,
    ProductsComponent,
    AboutComponent,
    CheckOutComponent,
    LoginComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'shopping-cart', component: ShoopingCartComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my-orders', component: MyOrderComponent, canActivate: [AuthGuardService] },

      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
