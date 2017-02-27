import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { titleReducer } from './stores/title.store';
import { TitleService } from './services/title.service';
import { TitleAuChocolatService } from './services/titleauchocolat.service';
import { InterfaceTitleService } from './services/interfacetitle.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({title: titleReducer})
  ],
  providers: [
    InterfaceTitleService,
    TitleService,
    TitleAuChocolatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
