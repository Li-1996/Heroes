import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
     <a routerLink="/dashboard" routerLinkActivi="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <button nz-button nzType="primary">测试按钮</button>
    <i class="anticon anticon-smile"></i>
    <input onkeyup="value"/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
