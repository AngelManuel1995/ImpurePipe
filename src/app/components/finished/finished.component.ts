import { Component, OnInit } from '@angular/core';
import { ListService }       from '../../services/list.service';
import { List }              from '../../classes/index';
import { Router }            from '@angular/router'; 

@Component({
    selector:'app-finished',
    templateUrl:'./finished.component.html'
})

export class FinishedComponent implements OnInit{

    public test:string = "Finished component works";

    constructor( private _listService:ListService,
                 private _router:Router ){

    }

    ngOnInit() {
            
    }

    listDetail(idx:number){
        console.log(idx);
        this._router.navigate(['/detail', idx]);
    }

}