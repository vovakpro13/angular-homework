import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components";
import {UsersResolveService} from "../../services";
import {UserPageComponent} from "./components";


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {data: UsersResolveService},
  },
  {
    path: ':id',
    component: UserPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
