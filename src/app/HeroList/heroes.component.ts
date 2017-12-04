import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  form: Hero = new Hero();
  validateForm: FormGroup;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroesByMock().subscribe(data => {
      this.heroes = data;
    });
  }
  /*
  * 创建
   */
  add(): void {
    this.heroService.create(this.form).subscribe(form => {
      this.heroes.push(this.form);
    });
  }
/*
* 删除
*/
  Delete(hero: Hero): void {
    this.heroService.Delete(hero.id).subscribe(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
      });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
