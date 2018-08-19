import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }