import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  phrase: string = '';
  sorterColumn: string = '';

  constructor(private heroService: HeroService) { }

  heroList: Hero[] = this.heroService.getAll();

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onClickHeader(columnName: string): void {
    this.sorterColumn = columnName;
  }
}
