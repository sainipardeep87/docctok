import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(keyString:string, data : object){
    localStorage.setItem(keyString, JSON.stringify(data));
  }

  getItem(keyString:string){
    return JSON.parse(localStorage.getItem(keyString));
  }

  removeItem(keyString:string){
    localStorage.removeItem(keyString);
  }
}
