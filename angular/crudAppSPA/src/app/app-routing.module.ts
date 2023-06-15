import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

//const routes: Routes = [];
const routes: Routes = [
  {path:'retrieve',component:RetrieveComponent},
  { path: 'update/:productId', component: UpdateComponent },
  {path:'update', component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'create',component:CreateComponent},

 {path:'',component:RetrieveComponent}
];//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
