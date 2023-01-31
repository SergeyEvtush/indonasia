"use strict";
import Element from "./Element.js";
export default
class ElInContainer extends Element{
   constructor(title,classElem,parent,dutyClass='active',child=null,attribute=[],childClass,childElem){
      super(title,classElem,parent,dutyClass='active',child=null,attribute=[]);
      this.childClass=childClass;
      this.childElem=childElem;
      this.appendChild=()=>{
       const child=new Element(this.childElem,this.childClass,this.childElem);
       this.child=child;
         this.elem.append(child.elem);
        
        };
        this.appendChild();
   }
}