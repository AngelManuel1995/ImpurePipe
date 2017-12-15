import { Injectable } from '@angular/core';
import { Item, List } from '../classes/index';

@Injectable()

export class ListService{

	lists:List[]=[];

	constructor(){

		console.log("Servicio inicializado");

		this.loadData();

	}

	updateInfo(){
		localStorage.setItem("data", JSON.stringify(this.lists));
	}

	loadData(){
		if(localStorage.getItem("data")){
			this.lists = JSON.parse(localStorage.getItem("data"));
		}
	}

	addList(list:List){
		this.lists.push(list);
		this.updateInfo();
	}
	
	removeList(idx:number){
		this.lists.splice(idx,1);
		this.updateInfo();
	}



}