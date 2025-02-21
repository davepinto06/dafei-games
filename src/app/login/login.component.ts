import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LucideAngularModule, Gamepad2, User, KeyRound, Mail } from 'lucide-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userName = new FormControl('');
  userEmail = new FormControl('');
  userPass = new FormControl('');
  isRegistered = true;

  GamePad2 = Gamepad2;
  UserIcon = User;
  KeyRound = KeyRound;
  Mail = Mail;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}
  login(): void {
    if (this.authService.login(this.userEmail.value, this.userPass.value)) {
      this.router.navigate(['/games-list']);
    } else {
      this.snackBar.open('Error while logging in', 'Close', {
        duration: 3000,
      });
    }
  }

  register(): void {
    if (this.authService.register(this.userName.value, this.userEmail.value, this.userPass.value)) {
      this.snackBar.open('User added', 'Close', {
        duration: 3000,
      });
      this.isRegistered = true;
    } else {
      this.snackBar.open('User already exists', 'Close', {
        duration: 3000,
      });
    }
  }
}
