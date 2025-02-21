import { Component, Input } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'app-game-card',
  imports: [LucideAngularModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() genre!: string;
  @Input() releaseYear!: number;
  Star = Star;
}
