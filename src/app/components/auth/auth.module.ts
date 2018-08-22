import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../../core/services/auth.service';
import { Kinvey } from '../../core/services/remote';

import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
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
        AuthService,
        Kinvey
    ]
})
export class AuthModule { }