import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent {
    companyDetails:any
    constructor(){
        this.companyDetails={
            name:'HDFC',
            logo:"https://hdfcbankcareers.hirealchemy.com/img/HDFC-Bank-Logo.a05df558.jpg"
        }
    }
}