import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FoodMenuComponent } from './component/food-menu/food-menu.component';
import { ChefsComponent } from './component/chefs/chefs.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { SingUpComponent } from './component/sing-up/sing-up.component';
import { LoginComponent } from './component/login/login.component';
import { AdChefComponent } from './component/ad-chef/ad-chef.component';
import { AddPlatComponent } from './component/add-plat/add-plat.component';
import { TableChefsComponent } from './component/table-chefs/table-chefs.component';
import { TablePlatComponent } from './component/table-plat/table-plat.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'food_menu', component: FoodMenuComponent },
  { path: 'chefs', component: ChefsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'sing-up', component: SingUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ad-chef', component: AdChefComponent },
  { path: 'add-plat', component: AddPlatComponent },
  { path: 'table-chefs', component: TableChefsComponent },
  { path: 'table-plat', component: TablePlatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
