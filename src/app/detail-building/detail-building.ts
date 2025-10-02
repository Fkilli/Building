import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Building } from '../building';
import { BUILDING } from '../list-building/classBuilding';

@Component({
  selector: 'app-detail-building',
  imports: [RouterModule],
  templateUrl: './detail-building.html',
  styleUrl: './detail-building.css'
})
export class DetailBuilding {

  buildingId : BUILDING | undefined;

  constructor(private building: Building,private route: ActivatedRoute,private router: Router){}

    ngOnInit(){
    const id : string | null = this.route.snapshot.paramMap.get('id');
    if(id){
      this.buildingId = this.building.getBuildingByid(+id);
    }
  }
}
