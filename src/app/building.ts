import { Injectable } from '@angular/core';
import listBuilding  from "../assets/building.json";
import { BUILDING } from './list-building/classBuilding';

@Injectable({
  providedIn: 'root'
})
export class Building {

  getBuilding() : BUILDING[] {
    return listBuilding.filter(BUILDING => BUILDING.available == true ).sort((a, b) => a.price - b.price)
  }

  getBuildingByid(id : number){
     return listBuilding.find(BUILDING => BUILDING.id == id );
  }

  filterBuilding(title : string | undefined,city : string | undefined,area : number | undefined,available: boolean | undefined,price : number | undefined, maxPrice : number | undefined, selectedOrder: string | undefined){
    if(title == undefined){title = ""}
    if(city == undefined){city = ""}
    if(area == undefined || area == 0 ){area = Infinity}
    if(price == undefined){price = 0}
    if(maxPrice == undefined || maxPrice == 0){maxPrice = Infinity}
    if(available == undefined){available = true}
  
    const list =  listBuilding.filter(BUILDING => 
    BUILDING.title.toLowerCase().includes(title!.toLowerCase())
    && BUILDING.location.toLowerCase().includes(city!.toLowerCase())
    && BUILDING.area <= area
    && BUILDING.available == available 
    && price! <= BUILDING.price 
    && maxPrice! >= BUILDING.price
    ).sort((a, b) => a.price - b.price);

    if(selectedOrder == "high"){
      return list.sort((a, b) => b.price - a.price);
    } else{
      return list.sort((b, a) => b.price - a.price);
    }


  }
}

