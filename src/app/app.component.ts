import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  ngOnInit() {
   // registerLocaleData(localeIt, 'it-IT');
  }
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onNameChange(value: string) {
    console.log(value);
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
