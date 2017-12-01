import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroesByMock().subscribe(data => {
      this.heroes = data;
      console.log(this.heroes);
      console.log('****');
      console.log(this.heroes[0]);
    });
    // this.heroService.getHeroes().then((heroes) => {
    //   console.log(heroes);
    //   this.heroes = heroes;
    //   console.log('*****');
    //   console.log(this.heroes);
    // });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
