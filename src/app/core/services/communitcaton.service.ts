import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class CommunicationService {
    public user = new BehaviorSubject<object>({});
    userData
    constructor(){
        
    }
 
    setUser(message: object) {
        this.userData = message
        this.user.next(message);
    }
 
    clearUser(){
        this.user.next({});
    }

    getUserData(){
        return this.userData
    }

    getUser(): Observable<any> {
        return this.user.asObservable();
    }
}
