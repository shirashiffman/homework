

import { Item } from './item';
import { Person } from './person';

export interface Order {
    orderNum: number,
    person: Person,
    item: Item,
    date: string,
    totalAmount: number

}
