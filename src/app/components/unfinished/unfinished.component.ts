import { Component, OnInit } from '@angular/core';
import { ListService }       from '../../services/list.service';

@Component({
    selector:'app-unfinished',
    templateUrl:'./unfinished.component.html'
})

export class UnfinishedComponent implements OnInit{

    public test:string = "unfinished component works";

    constructor(private _listService:ListService){
        
    }

    ngOnInit() {
        
    }

}