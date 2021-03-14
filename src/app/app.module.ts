import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';

import { HighlightColorDirective } from './directives/app-highlight-color.directive';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AlertComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBookComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListItemComponent,
    HighlightColorDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
