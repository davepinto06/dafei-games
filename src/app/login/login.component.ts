import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  ) {}
  login(): void {
    if (this.authService.login(this.userEmail.value, this.userPass.value)) {
      alert('login');
      this.router.navigate(['/games-list']);
    } else {
      alert('error while logging');
    }
  }

  register(): void {
    if (this.authService.register(this.userName.value, this.userEmail.value, this.userPass.value)) {
      alert('user added');
      this.isRegistered = true;
    } else {
      alert('user already exixts');
    }
  }
}
