"use strict";
import Element from "./Element.js";
export default
class Ul {
   constructor(classElem=[],child=[],childClass){
      this.classElem=classElem;
      this.child=child;
      this.childClass=childClass;
      this.elem=document.createElement('ul');
      
      this.appendChilds=()=>{
         this.child.forEach((el)=>{
            const li=document.createElement('li');
            li.classList.add(this.childClass);
            li.innerHTML=el;
            this.elem.append(li);
         });
      };
      this.appendChilds();
      this.appendClass=()=>{
         this.classElem.forEach(el=>{
            this.elem.classList.add(el);
         });
      };
      this.appendClass();
   }
}