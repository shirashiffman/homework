/*global $*/
(function(){
    'use strict';

    class Item{
        constructor(name, price, quantity){
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }
    // class Address{
    //     constructor(street, city, state, zip){
    //         this.street= street;
    //         this.city = city;
    //         this.state= state;
    //         this.zip = zip;
    //     }
       
    //        return `${this.street}<br>${this.city}, ${this.state} ${this.zip}`;
        
    // }

    class Order{
        constructor(customerName, street, city, state, zip, phone, items){
            this.customerName = customerName;
            this.street = street;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.phone = phone;
            this.items = items;
        }

        get total(){
            let total =0;
            this.items.forEach(item => {
                total += (item.price * item.quantity);
            });
            return total;
        }
    }

    let orders = [];
    fetch("orders.json")
        .then((result)=>{
            if(!result.ok){
                throw new Error("File does not exist");
            }
            return result.json();
        })
        .then((ordersArray)=>{
           
            ordersArray.forEach(order=>{
                let {customerName, street, city, state, zip, phone, items} = order;
                let itemArray = [];
                items.forEach(itemObject=>{
                    let {item, quantity, total} = itemObject;
                    itemArray.push(new Item(item, (total/quantity), quantity));
                });
                orders.push(new Order(customerName, street, city, state, zip, phone, itemArray));
            });
            console.log(orders);
            const addressElem = $("#addressTo");
            let orderIndex = 0;
           
           function updateOrderForm(orderIndex){
                addressElem.append(`${orders[orderIndex].customerName}<br>${orders[orderIndex].street}<br>${orders[orderIndex].city}, 
                ${orders[orderIndex].state} ${orders[orderIndex].zip}<br>${orders[orderIndex].phone}`);
                const tableElem = $("#orderTable");
                orders[orderIndex].items.forEach((item)=>{
                    let price = item.price.toFixed(2);
                    let totalPrice = (item.price * item.quantity).toFixed(2);
                    tableElem.append(`<tr>
                        <td>${item.quantity}</td>
                        <td>${item.name}</td>
                        <td class="price">$ ${price}</td>
                        <td class="price">$ ${totalPrice}</td>
                        </tr>`);
                });
                tableElem.append(
                    `<tr>
                        <td colspan="3"></td>
                        <td class="price">$${orders[orderIndex].total.toFixed(2)}</td>
                    </tr>`
                );
            }
            updateOrderForm(0);
            const leftArrow = $("#leftArrow");
            const rightArrow = $("#rightArrow");
            
            function nextPage(right){
                if(right){
                    if(orderIndex >= orders.length-1){
                        orderIndex = 0;
                    }
                    else{orderIndex++;}
                }
                else{
                    if(orderIndex === 0){
                        orderIndex = orders.length-1;
                    }
                    else{orderIndex--;}
                }
                $("tr:not(#head)").remove();
                addressElem.text("");
                updateOrderForm(orderIndex);
                console.log(orderIndex);
                   
            }

            leftArrow.click(()=>{nextPage(false);});
            rightArrow.click(()=>{nextPage(true);});



        })
        .catch(e=> console.error(e));


}());