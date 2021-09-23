import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';  
import { LocaldataComponent } from '../localdata/localdata.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url:any;
  customer:any;
  constructor(private router: Router ,private http:HttpClient,public local:LocaldataComponent) {
    this.url="http://localhost:8081/customer/"+local.customerid;
  }  
  onRecent() {  
    this.router.navigate(['/activity'])  
}
  onTransfer() {
    this.router.navigate(['/transaction'])
  }
  ngOnInit(){
     let response= this.http.get(this.url);
     response.subscribe((data)=>this.customer=data);
  } 

}