import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [NavbarComponent, FooterComponent,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register = {
    name: '',
    surname: '',
    email: '',
    password: '',
    dataCadastro:''
  };

  constructor(private router: Router) {}

    onSubmit(){         // o parse serve para converter o que é string em um object JS
      const cadastros = JSON.parse(localStorage.getItem('cadastros')|| '[]');

      cadastros.push(this.register);
      this.register.dataCadastro = new Date().toISOString(); 


      localStorage.setItem('registers', JSON.stringify(this.register))

      this.router.navigate(['/login']);

    }


}
