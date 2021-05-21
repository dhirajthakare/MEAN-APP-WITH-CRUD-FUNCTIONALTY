import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../model/model';
import { ProjectserviceService } from '../model/projectservice.service';
declare var M;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[ProjectserviceService]

})
export class RegistrationComponent implements OnInit {

  displayUpdate="none";
displaySubmit ="block";
  data:any;
  constructor(
     public projectsevice:ProjectserviceService,
     public router:ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.resetForm();

    this.router.queryParams.subscribe((res)=>{
      // console.log(res);
      if(res.token){
        this.data=JSON.parse(atob(res.token));
      if(this.data._id!==''){
        this.Edit(this.data);
      }
      }
      
    })
   
   
  }

  resetForm(form?:NgForm){
    if(form)
    form.reset();

    this.projectsevice.selectmodel = {
      _id:"",
      Name:"",
      Email:"",
      Mob:"",
      Gender:""
    }

  }
  onSubmit(form : NgForm){
    console.log("done")
    this.projectsevice.postData(form.value)
    .subscribe((responce)=>{
      this.resetForm(form);
      M.toast({ html:'saved successfully' , classes: 'rounded' });
    });
  }

 
 
  Edit(emp : any){
    
    this.projectsevice.selectmodel = emp;
    this.displayUpdate="block";
    this.displaySubmit="none";
  }


  Update(form :NgForm){
    this.projectsevice.UpdateData(form.value).subscribe((res)=>{
      this.resetForm(form);
      M.toast({ html:'Update successfully' , classes: 'rounded' });
      this.displaySubmit="block";
      this.displayUpdate="none";

    })

  }

  
  }
