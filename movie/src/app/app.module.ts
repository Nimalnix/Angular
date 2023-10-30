import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewComponent } from './details-review/details-review.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { ModelComponent } from './model/model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModelComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
