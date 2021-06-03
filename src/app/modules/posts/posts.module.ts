import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components';
import { HttpClientModule } from "@angular/common/http";
import {PostsService, UsersService} from "../../services";
import {CommentsService} from "../../services";
import { PostComponent } from './components';
import { FullPostComponent } from './components/full-post/full-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    FullPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
