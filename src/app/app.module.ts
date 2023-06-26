import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { AboutComponent } from './component/about/about.component';
import { MenuComponent } from './component/menu/menu.component';
import { ChefsComponent } from './component/chefs/chefs.component';
import { AdChefComponent } from './component/ad-chef/ad-chef.component';
import { TableChefsComponent } from './component/table-chefs/table-chefs.component';
import { PlatComponent } from './component/plat/plat.component';
import { AddPlatComponent } from './component/add-plat/add-plat.component';
import { TablePlatComponent } from './component/table-plat/table-plat.component';
import { LoginComponent } from './component/login/login.component';
import { SingUpComponent } from './component/sing-up/sing-up.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactComponent } from './component/contact/contact.component';
import { FoodMenuComponent } from './component/food-menu/food-menu.component';
import { FoodMComponent } from './component/food-m/food-m.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    MenuComponent,
    ChefsComponent,
    AdChefComponent,
    TableChefsComponent,
    PlatComponent,
    AddPlatComponent,
    TablePlatComponent,
    LoginComponent,
    SingUpComponent,
    BlogsComponent,
    ContactComponent,
    FoodMenuComponent,
    FoodMComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
