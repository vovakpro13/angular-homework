import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components";
import {FullPostComponent} from "./components/full-post/full-post.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: ':postId',
        component: FullPostComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
