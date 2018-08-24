import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryModule } from "./components/category/category.module";
import { CardModule } from "./components/card/card.module";
import { AdminGuard } from "./core/guards/admin.guard";
import { GuestGuard } from "./core/guards/guest.guard";
import { AuthenticationGuard } from "./core/guards/authentication.guard";

import { RegisterComponent } from "./components/auth/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/auth/login/login.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'register', canActivate: [GuestGuard], component: RegisterComponent },
    { path: 'login', canActivate: [GuestGuard], component: LoginComponent },
    { path: 'category', canActivate: [AdminGuard], loadChildren: () => CategoryModule },
    { path: 'card', canActivate: [AuthenticationGuard], loadChildren: () => CardModule }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }