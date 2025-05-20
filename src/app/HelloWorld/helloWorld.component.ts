import { Component } from "@angular/core";

@Component({
  selector: 'hello-world', // selector é o nome do componente, que será usado no html para chamar o componente como uma tag html
  templateUrl: './helloWorld.component.html', // templateUrl é o arquivo html que será usado para exibir o componente.
  // template: '<h1>Hello World</h1>'  Podemos passar a tag template e digitar o html que desejamos usar diretamente dentro das plicas
})
export class HelloWorldComponent {
  title = 'Hello World'; // title é uma propriedade que será usada no html para exibir o título
  description = 'Este é um componente de exemplo'; // description é uma propriedade que será usada no html para exibir a descrição
}

