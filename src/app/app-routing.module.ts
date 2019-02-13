import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieBoardComponent } from './movie-board/movie-board.component';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path:'',
    component: MovieBoardComponent,
  },
  {
    path:'search',
    component: SearchComponent,
  },
  {
    path:'feedback',
    component: FeedbackComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
