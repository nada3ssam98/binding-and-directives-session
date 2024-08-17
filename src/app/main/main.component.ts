import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  username:string = ""
  showDetails:boolean = true
  btnClicks:number[]=[]
  clickNumber:number = 0
  isBlueBg:boolean = false
  isTextWhite:boolean = false
  btnSpecialClass = {
    "blueBG":!this.isBlueBg,
    "textWhite":!this.isTextWhite
  }
  clearInput(){
    this.username =''
  }
  onToggle(){
    this.showDetails = !this.showDetails
    this.btnClicks.push(this.clickNumber++)
  }
  onClick(){
    this.btnClicks.push(this.clickNumber++)
  }

}
