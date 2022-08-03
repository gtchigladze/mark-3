import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";




@Injectable({
  providedIn: "root",
})

export class DistributorSalesService implements OnInit {
  _url = "http://localhost:3000";
 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
 
}