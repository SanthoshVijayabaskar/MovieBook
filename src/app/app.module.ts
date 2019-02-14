import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieBoardComponent } from './movie-board/movie-board.component';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieBoardComponent,
    SearchComponent,
    FeedbackComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
