import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { List }              from '../../classes/index';
import { ListService }       from '../../services/list.service'; 

@Component({
    selector:'app-detail',
    templateUrl:'./detail.component.html'
})


export class DetailComponent implements OnInit {

    public idx:number;
    public list:List;

    constructor(private _activatedRoute:ActivatedRoute,
                private _listService:ListService){

    }

    ngOnInit(){
        this._activatedRoute.params.subscribe(params => {
            this.idx = params['idx'];
            this.list = this._listService.getList(params['idx']);
        });
    }

}