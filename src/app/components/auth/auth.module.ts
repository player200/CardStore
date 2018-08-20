import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Kinvey } from '../../core/services/remote';

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
        AuthService,
        Kinvey
    ]
})
export class AuthModule { }