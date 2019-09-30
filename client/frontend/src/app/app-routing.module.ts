import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

const routes: Routes = [
  { path:  '', redirectTo:  'contacts', pathMatch:  'full' }, // This is the Home Page for Now
  { path: 'contacts', component: ContactListComponent },
  { path: 'create-contact', component: ContactCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
