import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  item: string = "";
  pDate: string;
  bType: string = "";
  summary: string = "";
  cH: number = 0;


  addItem(): void {
    this.data.push({
      item: this.item,
      pDate: this.pDate,
      bType: this.bType,
      summary: this.summary
    });
    if (this.bType == "Hard Cover") {
      this.cH++;
    }
  }

  clearItems(): void {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].bType == "Hard Cover") {
        this.data.splice(i, 1);
        this.cH--;
      }
    }
  }

  deleteItem(i): void {
    if (this.data[i].bType == "Hard Cover")
      this.cH--;
    this.data.splice(i, 1);
  }
}
