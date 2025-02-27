import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GamesListService } from '../services/games-list.service';
import { GameCardComponent } from './game-card/game-card.component';
import { AddGameComponent } from './add-game/add-game.component';
import { Game } from '../services/games.-list.types';
import { LucideAngularModule, Search, PlusCircle, LogOut } from 'lucide-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-games-list',
  imports: [LucideAngularModule, ReactiveFormsModule, GameCardComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css',
})
export class GamesListComponent {
  searchGame = new FormControl('');
  Search = Search;
  PlusCircle = PlusCircle;
  LogOut = LogOut;
  Games: Game[] = [];

  constructor(
    private gamesListService: GamesListService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.Games = this.gamesListService.getAllGames();
  }

  logOut(): void {
    this.authService.logout();
    window.location.reload();
  }

  onSearchGame(): void {
    console.log('search');
    this.Games = this.gamesListService.getFilteredGames(this.searchGame.value);
  }

  onAddGame(): void {
    this.dialog.open(AddGameComponent);
  }

  formatLargeNumbers(value: number): string {
    const numberUnit = { thousandUnit: 'K', millionUnit: 'M', billionUnit: 'B' };

    if (value < 1) return '0';

    if (value < 1000) return `+${value}`;

    if (value < 1000000) {
      const thousands = (value / 1000).toFixed(1).replace(/\.0$/, '');
      return `+${thousands}${numberUnit.thousandUnit}`;
    }

    if (value < 1000000000) {
      const millions = (value / 1000000).toFixed(1).replace(/\.0$/, '');
      return `+${millions}${numberUnit.millionUnit}`;
    }

    const billions = (value / 1000000000).toFixed(1).replace(/\.0$/, '');
    return `+${billions}${numberUnit.billionUnit}`;
  }
}
