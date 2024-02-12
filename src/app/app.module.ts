import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilModule } from './util/util.module';
import { VisitedPipe } from './pipes/visited.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    VisitedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
