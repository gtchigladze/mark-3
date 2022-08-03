import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class DistributorService implements OnInit {
  _url = "http://localhost:3000";

  subject = new BehaviorSubject<any>([]);
 
  constructor(private http: HttpClient) {

  }

  create(user: any): void {
    this.http.post(`${this._url}/distributor`,user).subscribe(res => console.log(res))
 }


  get(): Observable<any> {
    return this.http.get(`${this._url}/distributor`)
  }

  search(){
    this.get().subscribe(res => { this.subject.next(res) })
    }


    getDistirbutor(): Observable<any>{
      return this.subject.asObservable()
      }

  ngOnInit(): void {}
 
}