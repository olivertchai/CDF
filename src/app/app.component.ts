import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../app/components/footer/footer.component';
import { SearchBarComponent } from '../app/components/search-bar/search-bar.component';
import { SubscribeComponent } from '../app/components/subscribe/subscribe.component';
import { NavbarComponent } from "../app/components/navbar/navbar.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "../app/pages/home/home.component";

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet,
           FooterComponent, 
           SearchBarComponent, 
           SubscribeComponent, 
           NavbarComponent,
           LoginComponent,
           RegisterComponent, 
           AboutComponent,
           HomeComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'criticas-de-filmes';
}
