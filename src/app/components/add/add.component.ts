import { Component, OnInit } from '@angular/core';
import { Item, List }        from '../../classes/index';
import { ListService }       from '../../services/list.service'; 

@Component({
    selector:'app-add',
    templateUrl:'./add.component.html'
})

export class AddComponent implements OnInit{

    public itemName:string="";
    public listName:string="";
    public errorMessageItem:string = "";
    public errorMessageList:string = "";
    public listOfItems:Item[] = [];


    constructor( private _listService:ListService ){

    }

    ngOnInit() {
    
    }

    addToList(){
        if(this.itemName === ""){
            this.errorMessageItem = "El campo del item está vacio";
        }else{
            this.errorMessageItem = "";
            let newItem:Item = new Item();
            newItem.name = this.itemName;
            this.listOfItems.push(newItem);
            this.itemName = "";
        }
    }

    deleteItem(idx:number){
        this.listOfItems.splice(idx,1);
    }


    saveList(){
        if(this.listName === ""){
            this.errorMessageList = "El nombre de la lista vacio";
        }else{
            this.errorMessageList = "";
            let newList = new List(this.listName);
            newList.items = this.listOfItems;
            this._listService.addList(newList);
            this.listName = "";
            this.listOfItems = [];

        }
    }
}