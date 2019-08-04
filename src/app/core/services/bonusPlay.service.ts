import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class BonusPlayService {
    public bonusPlays = new BehaviorSubject<number>(0);
    // userData
    constructor(){
        
    }
 
    setBonus(bonus: number) {
        // this.userData = message
        this.bonusPlays.next(bonus);
    }
 
    clearBonus(){
        this.bonusPlays.next(0);
    }

    getBonus(): Observable<any> {
        return this.bonusPlays.asObservable();
    }
}
