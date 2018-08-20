import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./components/auth/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { CategoryModule } from "./components/category/category.module";
import { CardModule } from "./components/card/card.module";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'category', loadChildren: () => CategoryModule },
    { path: 'card', loadChildren: () => CardModule }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }