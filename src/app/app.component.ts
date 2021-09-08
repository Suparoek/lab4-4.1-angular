import { Component,OnInit,ViewChild,ViewChildren } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //constructor (private backendService: BackendService) {}
  //@ViewChild('productList',{static:true})
  //productList!: ProductListComponent;
  ngOnInit(): void {
   //   this.productList.products = this.backendService.getProducts();
  }
}
