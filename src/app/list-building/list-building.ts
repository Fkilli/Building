import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Building } from '../building';
import { BUILDING } from './classBuilding';

@Component({
  selector: 'app-list-building',
  imports: [RouterModule],
  templateUrl: './list-building.html',
  styleUrl: './list-building.css'
})
export class ListBuilding {

  buildingList : BUILDING[] | undefined;
  title: string | undefined;
  city: string | undefined;
  area: number | undefined;
  available: boolean | undefined;
  price: number | undefined;
  maxPrice: number | undefined;
  selectedOrder: string | undefined = "low";

  constructor(private building: Building,private route: ActivatedRoute,private router: Router){}

  ngOnInit(){
    this.buildingList = this.building.getBuilding()
  }

  filtertitle(title : string  | undefined){
    this.title = title;
    this.buildingList = this.building.filterBuilding(title,this.city,this.area,this.available,this.price,this.maxPrice,this.selectedOrder);
  }

  filterSearchCity(city : string | undefined){
    this.city = city;
    this.buildingList = this.building.filterBuilding(this.title,this.city,this.area,this.available,this.price,this.maxPrice,this.selectedOrder);
  }

  filterSearchArea(area : number | undefined){
    this.area = area;
    this.buildingList = this.building.filterBuilding(this.title,this.city,area,this.available,this.price,this.maxPrice,this.selectedOrder);

  }

  filterminPrice(price: number | undefined){
    this.price = price;
    this.buildingList = this.building.filterBuilding(this.title,this.city,this.area,this.available,this.price,this.maxPrice,this.selectedOrder);
  }

  filterMaxPrice(maxPrice: number | undefined){
    this.maxPrice = maxPrice;
    this.buildingList = this.building.filterBuilding(this.title,this.city,this.area,this.available,this.price,this.maxPrice,this.selectedOrder);
  }

  filterAvailable(available : boolean | undefined){
    this.available = available;
    this.buildingList = this.building.filterBuilding(this.title,this.city,this.area,this.available,this.price,this.maxPrice,this.selectedOrder);
  }

  orderBy(order : string){
    if(order == "high"){
      this.buildingList?.sort((a, b) => b.price - a.price);
    } else{
      this.buildingList?.sort((a, b) => a.price - b.price);
    }
    
  }
}
