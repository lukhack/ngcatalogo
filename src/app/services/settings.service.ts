import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme =  document.querySelector("#theme");
  constructor() {
    console.log('setting services init');
  }


  getLinkTheme(){
    const url = localStorage.getItem("theme") || "./assets/css/colors/default-dark.css" ;
    this.linkTheme.setAttribute('href', url);
  }


  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }


  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    console.log(links);
    const themeselect = localStorage.getItem('theme');
    links.forEach(elem=>{
        elem.classList.remove('working');
        const btnTheme = elem.getAttribute("data-theme");
        const btnThemenUrl = `./assets/css/colors/${btnTheme}.css`;
        if(themeselect == btnThemenUrl){
          elem.classList.add('working');
        }
    })
}
}
