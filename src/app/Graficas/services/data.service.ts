import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Grafica } from 'src/app/models/dataHttpDona.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private htpClient:HttpClient) { }

  API:string = " http://localhost:3000/graficas"


  getDatas():Observable<Grafica[]>{
    return this.htpClient.get<Grafica[]>(this.API)
  }



  //tengo que buscar esto 
  nombre:string=''
  private sendMessages = new Subject<string>()
  sendMessagesObse = this.sendMessages.asObservable(); 


  

//String es un tipo objecto
  getName(): Observable<string>{
   return this.sendMessagesObse
  }

  //otra opcion 

  // setName(n:string): void{
  //   this.nombre=n;
  //  (method) Observable<string>.subscribe(next: (value: string) => void): Subscription (+2 overloads)
  // }


}


