import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDosComponent } from './components/form-dos/form-dos.component';
import { FormTresComponent } from './components/form-tres/form-tres.component';
import { FormUnoComponent } from './components/form-uno/form-uno.component';

const routes: Routes = [
  {
    path: 'form-uno', component: FormUnoComponent
  },
  {
    path: 'form-dos', component: FormDosComponent
  },
  {
    path: 'form-tres', component: FormTresComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
