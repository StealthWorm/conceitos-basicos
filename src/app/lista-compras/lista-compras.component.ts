import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  items: { id: number, name: string, quantity: number, isChecked: boolean }[] = [];
  newItem: string = '';

  addItem() {
    const item = this.items.find(item => item.name === this.newItem);

    if (item) {
      this.items.splice(this.items.indexOf(item), 1, { ...item, quantity: item.quantity + 1 });
    } else {
      this.items.push({ id: this.items.length + 1, name: this.newItem, quantity: 1, isChecked: false });
    }

    this.newItem = '';
  }

  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
