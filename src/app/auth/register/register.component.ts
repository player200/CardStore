import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;

  constructor(private authService: AuthService) {
    this.model = new RegisterModel('', '', '');
  }

  ngOnInit() {
  }

  register() {
    this.authService
      .register(this.model)
      .subscribe();
  }
}
