

import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textcomponent',
  standalone: true,
  imports: [FormsModule, NgIf,NgTemplateOutlet, NgFor],
  templateUrl: './textcomponent.component.html',
  styleUrl: './textcomponent.component.css'
})

export class TextcomponentComponent {
  // text: string = "Akshay";
  // imgURL: string = 'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj';
  // isDisabled: boolean = true;
  // isActive: boolean = false;
  // userName: string = "Akshay";

  // isUser: boolean = false;
  // loginCount: number = 0;

  // countLogin() {
  //   this.loginCount ++;
  //   console.log(this.loginCount);
  // }


  // buttonClick() {
  //   console.log("test");
  // }

  // keyEnter(user:HTMLInputElement) {
  //   console.log(user.value);

  // }



  users:Array<string> =['Akshay','asnassnn','sommmsa','aslaslasl'];


  userObj:Array<any>=[
    {id:1,name:"akshay",email:'akshay@gmail.com'},
    {id:1,name:"manu",email:'manu@gmail.com'},
    {id:1,name:"chillu",email:'chillu@gmail.com'},
    {id:1,name:"kunji",email:'kunji@gmail.com'},
  ]


  addUser(){
    let user= { id: 1, name: "nava", email: 'nava@gmail.com' };
    this.userObj.push(user);
  }

  onDelete(i:number){
    this.userObj.splice(i ,1)
    console.log(i);
  }
}
