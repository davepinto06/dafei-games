import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { GamesListService } from '../services/games-list.service';
import { GameCardComponent } from './game-card/game-card.component';
import { Game } from '../services/games.-list.types';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-games-list',
  imports: [LucideAngularModule, ReactiveFormsModule, GameCardComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css',
})
export class GamesListComponent {
  searchGame = new FormControl('');
  Search = Search;
  Games: Game[] = [];

  constructor(private gamesListService: GamesListService) {}

  ngOnInit(): void {
    this.Games = this.gamesListService.getAllGames();
  }
}
