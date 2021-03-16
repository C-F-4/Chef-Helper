import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'recipe-book',
    component: RecipeBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
