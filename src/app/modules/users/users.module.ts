import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from "./components";
import { UserComponent } from './components';
import {HttpClientModule} from "@angular/common/http";
import {UsersResolveService} from "../../services";
import { UserPageComponent } from './components';
import {UsersService} from "../../services";



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersResolveService, UsersService]
})
export class UsersModule { }
