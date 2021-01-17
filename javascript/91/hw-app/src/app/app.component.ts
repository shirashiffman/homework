import { Component, ɵisBoundToModule__POST_R3__ } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-app';

  selectedCat = null

  categories= [
    {
      name: 'Snacks',
      items: [
        {
          name: 'Pretzels',
          price: 1.75
        },
        {
          name: 'Popcorm',
          price: 2.5
        },
        {
          name: 'Chocolate',
          price: 3.75
        }
      ]
    },
    {
      name: 'Drinks',
      items: [
        {
          name: 'Water',
          price: 1.75
        },
        {
          name: 'Coke',
          price: 2.5
        },
        {
          name: 'Chocolate Milk',
          price: 3.75
        }
      ]
    },
    {
      name: 'Pastries',
      items: [
        {
          name: 'Cinnamon Bun',
          price: 4.50
        },
        {
          name: 'Cheesecake',
          price: 5
        },
        {
          name: 'Croissant',
          price: 3.75
        }
      ]
    }
  ]
  
 findSelected(selected: string){
   return this.categories.filter(c => c.name === selected)
}
  
  }
