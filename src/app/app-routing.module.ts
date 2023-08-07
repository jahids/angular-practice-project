import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './Component/child/child.component';
import { NewoneComponent } from './Component/newone/newone.component';

const routes: Routes = [

  {
    path : "child",
    component : ChildComponent,
  },
  {
    path : "new",
    component : NewoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
