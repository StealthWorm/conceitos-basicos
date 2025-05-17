import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './HelloWorld/helloWorld.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent], // imports é um array de módulos que serão usados no componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
