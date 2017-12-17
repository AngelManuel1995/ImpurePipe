import { Component, OnInit } from '@angular/core';
import { ListService }       from '../../services/list.service';
import { List }              from '../../classes/index';
import { Router }            from '@angular/router'; 
@Component({
    selector:'app-unfinished',
    templateUrl:'./unfinished.component.html'
})

export class UnfinishedComponent implements OnInit{

    public test:string = "unfinished component works";

    constructor(private _listService:ListService,
                private _router:Router){
        
    }

    ngOnInit() {
        
    }

    listDetail(idx:number){
        this._router.navigate(['/detail', idx]);
    }

}