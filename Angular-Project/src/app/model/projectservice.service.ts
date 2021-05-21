import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  selectmodel : Model;
  storeData : Model[];
  readonly InsertUrl = 'https://testnodejsapis.herokuapp.com/InsertData';
  readonly FetchUrl = 'https://testnodejsapis.herokuapp.com/FetchData';
  readonly DeleteUrl = 'https://testnodejsapis.herokuapp.com/DeleteData';
  readonly UpdateUrl = 'https://testnodejsapis.herokuapp.com/UpdateData';



  constructor(private http : HttpClient ) { }

  postData(obj:Model){
    
    return this.http.post(this.InsertUrl,obj);
  }
  FetchData(){
    return this.http.get(this.FetchUrl);
  }

  DeleteData(id){
return this.http.delete(this.DeleteUrl+"/"+id)
  }

  UpdateData(obj :Model){
return this.http.put(this.UpdateUrl+`/${obj._id}` , obj);
  
  }

}

