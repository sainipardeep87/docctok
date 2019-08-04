// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private router: Router) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//       if (localStorage.getItem('user_token')){
//         return true
//       }else{
//         try{
//           let loc = this.router.parseUrl(state.url)
//           let url = loc.root.children['primary'].segments.map(it => it.path).join('/');
//           if(url == 'users/register'){
//             return false
//           }else{
//             this.router.navigate(['users/register'])
//             return false
//           }
//         }
//         catch(err){
//           this.router.navigate(['users/register'])
//           return false
//         }
//       }  
//     }
// }