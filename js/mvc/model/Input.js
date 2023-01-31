"use strict";
import Element from "./Element.js";
export default
class Input extends Element{
   constructor(title,classElem,parent,dutyClass='active',child=null,attribute=[]){
      super(title,classElem,parent,dutyClass='active',child=null,attribute=[]);
   }
   focusToElement(){
      this.elem.focus();
   }
}