import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilModule } from './util/util.module';
import { VisitedPipe } from './pipes/visited.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    VisitedPipe,
    ProfileComponent,
    TableComponent
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
