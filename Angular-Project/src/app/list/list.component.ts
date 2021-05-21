import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from '../model/model';
import { Router } from '@angular/router';
import { ProjectserviceService } from '../model/projectservice.service';
declare var M;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  

  constructor( public projectService : ProjectserviceService,private router: Router ) { }

  ngOnInit(): void {
    this.listData();
  }

  listData(){

    this.projectService.FetchData().subscribe((Response)=>{
      this.projectService.storeData = Response as Model[];
    })
  }

  Delete(_id){
    if(confirm('Are You sure To delete That Data')){
this.projectService.DeleteData(_id).subscribe((res)=>{
M.toast({html:'Delete the Data' , class:'rounde'})
this,this.listData();

})
    }

  }

 
  Edit(list){
   
    this.router.navigate(['registration'],{
      queryParams:{
        token:(btoa(JSON.stringify(list)))
      }
    });
  }

}
