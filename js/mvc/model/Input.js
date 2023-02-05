"use strict";
import Element from "./Element.js";
export default
class Input extends Element{
   constructor(title,classElem,child=null,attribute=[]){
      super(title,classElem,child=null,attribute=[]);
   }
   focusToElement(){
      this.elem.focus();
   }
}