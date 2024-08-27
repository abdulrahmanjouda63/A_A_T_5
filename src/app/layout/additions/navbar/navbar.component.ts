import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { MyTranslateService } from '../../../shared/services/myTranslate/my-translate.service';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin : boolean = false;

  constructor(private _MyTranslateService:MyTranslateService , private _AuthService:AuthService , private _Router:Router ){}


  // 1
  ngOnInit(): void {
    
  
    this._AuthService.userData.subscribe(()=>{

      if(  this._AuthService.userData.getValue() == null )
      {
        this.isLogin = false
      }
      else
      {
        this.isLogin = true
      }

    })

    
  }

  logout()
  {
    localStorage.removeItem("userToken");
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login'])

  }


  // ar
  changeLang(lang:string)
  {
    this._MyTranslateService.changeLang(lang)

  }

}
