import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormUnoComponent } from './components/form-uno/form-uno.component';
import { FormDosComponent } from './components/form-dos/form-dos.component';
import { FormTresComponent } from './components/form-tres/form-tres.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    FormUnoComponent,
    FormDosComponent,
    FormTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
