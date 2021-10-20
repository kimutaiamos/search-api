import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  users:User[] = [];

  constructor(private http:HttpClient) { 
    
  }

  findUser(username: any){
    interface ApiResponse{
      login:string;
      html_url:string; 
      avatar_url:string;
      bio:any;
      name:any;
      location:any;
      followers: any;
      following: any;
      created_at : Date;
      public_repos: any
    }
    
    // let searchEndpoint = "https://api.github.com/users/"+username+"?access_token="+environment.api_key;
    let searchEndpoint = "https://api.github.com/users/"+username;
    let promise = new Promise<void>((resolve,reject)=>{
      this.users = [];
      this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
        (results: any)=>{
          console.log(results)
        this.users.push(results);
        console.log(results)
        resolve();
      },(error: any)=>{
        
        reject(error);
      }
      )
    })
    return promise;
  }
}