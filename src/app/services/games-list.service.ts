import { Injectable } from '@angular/core';
import { Game } from './games.-list.types';

@Injectable({
  providedIn: 'root',
})
export class GamesListService {
  // Later we can call an API to get the data
  private games: Game[] = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      imageUrl: 'https://images.dafei.es/breath-of-wild.webp',
      rating: 4.9,
      genre: 'Action-Adventure',
      releaseYear: 2017,
      downloads: 2356000,
      playersOnline: 38900,
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      imageUrl: 'https://images.dafei.es/red-dead-2.avif',
      rating: 4.8,
      genre: 'Action-Adventure',
      releaseYear: 2018,
      downloads: 33506,
      playersOnline: 5809,
    },
    {
      id: 3,
      title: 'The Witcher 3: Wild Hunt',
      imageUrl: 'https://images.dafei.es/witcher.avif',
      rating: 4.7,
      genre: 'RPG',
      releaseYear: 2015,
      downloads: 1356000,
      playersOnline: 235002,
    },
    {
      id: 4,
      title: 'God of War',
      imageUrl: 'https://images.dafei.es/god-of-war.avif',
      rating: 4.8,
      genre: 'Action-Adventure',
      releaseYear: 2018,
      downloads: 156000078,
      playersOnline: 12082054,
    },
    {
      id: 5,
      title: 'Hades',
      imageUrl: 'https://images.dafei.es/hades.avif',
      rating: 4.7,
      genre: 'Roguelike',
      releaseYear: 2020,
      downloads: 852,
      playersOnline: 92,
    },
    {
      id: 6,
      title: 'Cyberpunk 2077',
      imageUrl: 'https://images.dafei.es/cyberpunk.avif',
      rating: 4.0,
      genre: 'RPG',
      releaseYear: 2020,
      downloads: 83920,
      playersOnline: 31970,
    },
  ];

  constructor() {
    this.loadGames();
  }
  private saveGames(): void {
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  private loadGames(): void {
    const savedGames = localStorage.getItem('games');
    if (savedGames) {
      this.games = JSON.parse(savedGames);
    }
  }

  getAllGames(): Game[] {
    return this.games;
  }

  addNewGame(newGame: Game): boolean {
    this.games.push(newGame);
    this.saveGames();
    return true;
  }

  getFilteredGames(filter: string | null): Game[] {
    if (!filter) return this.games;
    return this.games.filter((game) => game.title.toLowerCase().includes(filter.toLowerCase()));
  }
}
