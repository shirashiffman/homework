import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { Order } from './shared/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';

  order: Order = {
    orderNum: 123,
    person: {
      firstName: 'Joe',
      lastName: 'Shmo',
      email: 'joe@shmo.com',
      phone: '9991119090'
    },
    item: {
      itemNum: 345,
      item: '400 Cups',
      price: 55
    },
    date: '01-11-2021',
    totalAmount: 55
  }
}
