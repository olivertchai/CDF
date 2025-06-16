import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { SubscribeComponent } from "../../components/subscribe/subscribe.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent ,SearchBarComponent ,SubscribeComponent ,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
