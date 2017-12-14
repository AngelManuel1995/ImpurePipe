import { Injectable } from '@angular/core';
import { Item, List } from '../classes/index';

@Injectable()

export class ListService{

	lists:List[]=[];
	itemList1:Item[] = [];

	constructor(){
		let list1:List = new List("Cosas para la Universidad");
		let item1List1 = new Item();
		let item1List2 = new Item();
		item1List1.name = "Lapiz";
		item1List1.finished = false;
		item1List2.name = "Cuaderno";
		item1List2.finished = false;
		this.itemList1.push(item1List1);
		this.itemList1.push(item1List2);
		list1.items = this.itemList1;
		let list2:List = new List("Cosas para la Casa");
		let list3:List = new List("Cosas para la Navidad");
		let list4:List = new List("Cosas para la Moto");

		this.lists.push(list1);
		this.lists.push(list2);
		this.lists.push(list3);
		this.lists.push(list4);
	}



}