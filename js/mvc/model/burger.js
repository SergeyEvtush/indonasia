"use strict";
import Element from "./Element.js";
export default
class Burger extends Element{
      constructor(title,classElem,dutyClass,dutyClassBody,body,navigation){
         super(title,classElem,dutyClass);
         this.body=body;
         this.navigation=navigation;
         this.dutyClassBody=dutyClassBody;
      }
toggleClass(){
   this.elem.classList.toggle(this.dutyClass);
            this.navigation.classList.toggle(this.dutyClass);
            this.body.classList.toggle(this.dutyClassBody);
   }
   removeClass(){
      this.elem.classList.remove(this.dutyClass);
            this.navigation.classList.remove(this.dutyClass);
            this.body.classList.remove(this.dutyClassBody);
   }
}