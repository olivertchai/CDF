import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [NavbarComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    email: '',
    password: ''
  };

  erroLogin: boolean = false;

  constructor(private router: Router) {}

  onLogin() {

    const cadastros = JSON.parse(localStorage.getItem('cadastros') || '[]');

    const usuarioValido = cadastros.find((usuario: any) => {
      return usuario.email === this.login.email && usuario.password === this.login.password;
    });

    if (usuarioValido) {
      console.log('Login bem-sucedido!');
      this.erroLogin = false;
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
      this.router.navigate(['']); 
    } else {
      this.erroLogin = true;
      console.log('Email ou senha inválidos.');
    }
  }

  isInvalid(control: any): boolean {
    return !!(control?.invalid && control?.touched);
  }


}
