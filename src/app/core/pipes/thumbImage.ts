// import { Pipe, PipeTransform} from '@angular/core'
// import { environment } from '../../../environments/environment'

// @Pipe({name: 'userImage'})
// export class SetImagePath implements PipeTransform {
//   transform(image: string, type: string): string {
//     let bucket = "https://s3.amazonaws.com/"+environment.s3_bucket+"/userprofiles/"
//     if(image == undefined || image.length == 0){
//       return ''
//     }else if(image.includes('https') || image.includes('http')){
//       return image
//     }else{
//       if(type == 'thumb'){
//         let arr = image.split('.')
//         return bucket+'thumbs/'+arr[0]+'_thumb.'+arr[1]
//       }else{
//         return bucket+image
//       }
//     }
    
//   }
// }