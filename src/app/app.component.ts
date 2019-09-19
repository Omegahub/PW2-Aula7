import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
  foto = 'favicon.ico';
  peso = 78;
  altura = 1.6;
  Imc()
  {
    alert(this.peso / (this.altura * this.altura));
  }
  exibir()
  {
    alert(this.title);
  }
}

