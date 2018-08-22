import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

import { RegisterModel } from '../../../core/models/auth/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;

  constructor(private authService: AuthService) {
    this.model = new RegisterModel('', '', '')
  }

  ngOnInit() {
  }

  register() {
    this.authService
      .register(this.model)
      .subscribe()
  }
}
