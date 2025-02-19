import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LucideAngularModule, Gamepad2, User, KeyRound } from 'lucide-angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userName = new FormControl('');
  userPass = new FormControl('');

  GamePad2 = Gamepad2;
  UserIcon = User;
  KeyRound = KeyRound;
}
