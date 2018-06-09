import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ClientListComponent } from './client/client-list/client-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { clientReducer } from './reducers/client.reducer';
import { ClientEffects } from './effects/client.effects';
import { ClientServie } from './client/client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot({ clients: clientReducer }),
    EffectsModule.forRoot([ ClientEffects]),
   
  ],
  providers: [ ClientServie ],
  bootstrap: [AppComponent]
})
export class AppModule { }
