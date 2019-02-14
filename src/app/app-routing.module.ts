import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieBoardComponent } from './movie-board/movie-board.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component: MovieBoardComponent,
  },
  {
    path:'my-tickets',
    component: TicketsComponent,
  },
  {
    path:'about-moviebook',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
