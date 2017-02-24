import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { titleReducer } from './stores/title.store';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({title: titleReducer})
  ],
  providers: [
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
