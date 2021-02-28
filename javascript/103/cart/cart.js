
class Cart {
  // 2 - added param items to allow us to recreate cart from items stored in session
  constructor(items) {
    this.items = items || {};
  }

  addItem(id, count) {
    const c = this.items[id] || 0;
    this.items[id] = count + c;
  }

  getItems() {
    return this.items;
  }

  displayItems(){
    const array = [];
    Object.entries(this.items).map(item => {
      const globalItem = global.items.filter(i => {return i.id === +item[0]});
      const object = {
        id : item[0],
        description: globalItem[0].description,
        price: globalItem[0].price,
        count: item[1]
      }
      const totalPrice = +object.price * +object.count;
      object.totalPrice = totalPrice;
      console.log(object);
      console.log(globalItem);
     array.push(object);
    })
    // console.log(global.items);
    return array;
  }

  getTotal(){
    let total = 0
    const array = this.displayItems()
    array.forEach(item => total += item.totalPrice);
    return total;
  }
}

module.exports = Cart;