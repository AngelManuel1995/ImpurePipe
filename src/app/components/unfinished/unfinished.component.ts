import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-unfinished',
    templateUrl:'./unfinished.component.html'
})

export class UnfinishedComponent implements OnInit{

    public test:string = "unfinished component works";

    constructor(){

    }

    ngOnInit() {
        
    }

}