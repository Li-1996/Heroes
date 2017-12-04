import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroesComponent} from './HeroList/heroes.component';
import {HeroService} from './HeroList/hero.service';

import {AppRoutingModule} from './app-routing.module';
import {DataService} from './services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormBuilder,
    Validators,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  providers: [DataService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
