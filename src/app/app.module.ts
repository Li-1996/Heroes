import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

import {AppRoutingModule} from './app-routing.module';
import {DataService} from './services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent
  ],
  providers: [DataService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
