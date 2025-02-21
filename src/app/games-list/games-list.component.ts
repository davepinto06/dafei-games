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

  onAddGame(): void {
    this.dialog.open(AddGameComponent);
  }
}
