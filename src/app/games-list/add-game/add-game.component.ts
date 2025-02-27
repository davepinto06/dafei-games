import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { GamesListService } from '../../services/games-list.service';
import { Game } from '../../services/games.-list.types';

@Component({
  selector: 'app-add-game',
  imports: [ReactiveFormsModule],
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.css',
})
export class AddGameComponent {
  idInput = new FormControl();
  titleInput = new FormControl();
  ratingInput = new FormControl();
  genreInput = new FormControl();
  releaseInput = new FormControl();
  imageInput = new FormControl();

  constructor(
    private gamesListService: GamesListService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddGameComponent>,
  ) {}

  addGame(): void {
    const newGame: Game = {
      id: this.idInput.value,
      title: this.titleInput.value,
      imageUrl: this.imageInput.value,
      rating: this.ratingInput.value,
      genre: this.genreInput.value,
      releaseYear: this.releaseInput.value,
      downloads: 1,
      playersOnline: 2,
      //TODO
    };

    if (this.gamesListService.addNewGame(newGame)) {
      this.dialogRef.close();
      this.snackBar.open('Game added succesfully', 'Close', {
        duration: 3000,
      });
    } else {
      this.snackBar.open('Error while adding the game', 'Close', {
        duration: 3000,
      });
    }
  }
}
