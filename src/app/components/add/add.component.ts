import { Component, OnInit } from '@angular/core';
import { Item, List }        from '../../classes/index';

@Component({
    selector:'app-add',
    templateUrl:'./add.component.html'
})

export class AddComponent implements OnInit{

    public itemName:string="";
    public listName:string="";
    public errorMessage:string = "";

    listOfItems:Item[] = [];


    constructor(){

    }

    ngOnInit() {
    
    }

    addToList(){
        if(this.itemName === ""){
            this.errorMessage = "El campo del item está vacio";
        }else{
            this.errorMessage = "";
            let newItem:Item = new Item();
            newItem.name = this.itemName;
            this.listOfItems.push(newItem);
            this.itemName = "";
        }
    }

    deleteItem(idx:number){
        this.listOfItems.splice(idx,1);
    }
}