import { Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from '../app.config';


@Pipe({ name: 'genderPipe' })
export class GenderPipe implements PipeTransform {

    transform(value: number): string {
        if (value === 1) {
            return 'Male';
        } else {
            return 'Female';
        }
    }
}

// @Pipe({ name: 'currencyPipe' })
// export class CurrenyPipe implements PipeTransform {

//     constructor(private config: AppConfig) {
//     }

//     transform(value) {
//         value = parseInt(value)
//         // const currencies = this.config.getConfig('currencies');
//         let currency_sort_description = '--';
//         currencies.forEach(currency => {
//             if (currency.id === value) {
//                 currency_sort_description = currency.sort_description;
//                 return currency.sort_description;
//             }
//         });

//         return currency_sort_description;
//     }
// }

@Pipe({ name: 'dateToDaysPipe' })
export class DateToDaysPipe implements PipeTransform {

    constructor(private config: AppConfig) {
    }

    transform(value: string) {
        const date1 = value;
        const date2 = new Date();
        const diff = Date.parse('"' + date2 + '"') - Date.parse(date1);
        const dateIndays = Math.floor(diff / 1000 / 60 / 60 / 24);
        if (dateIndays >= 1) {
            return dateIndays + ' days';
        } else {
            const dateInHr = Math.floor(diff / 1000 / 60 / 60);
            if (dateInHr >= 1) {
                return dateInHr + ' Hours';
            } else {
                return 'Less than 1 hour';
            }
        }
    }
}

@Pipe({ name: 'orderBy'})

export class OrderBy{

 transform(array, orderBy, asc = true){
 
     if (!orderBy || orderBy.trim() == ""){
       return array;
     } 
 
     //ascending
     if (asc){
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item1[orderBy], item2[orderBy]);
       });
     }
     else{
       //not asc
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item2[orderBy], item1[orderBy]);
       });
     }
 
 }
 
 orderByComparator(a:any, b:any):number{
 
     if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
       //Isn't a number so lowercase the string to properly compare
       if(a.toLowerCase() < b.toLowerCase()) return -1;
       if(a.toLowerCase() > b.toLowerCase()) return 1;
     }
     else{
       //Parse strings as numbers to compare properly
       if(parseFloat(a) < parseFloat(b)) return -1;
       if(parseFloat(a) > parseFloat(b)) return 1;
      }
 
     return 0; //equal each other
 }
}
