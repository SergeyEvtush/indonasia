"use strict";
import Element from "./Element.js";
export default
class ElInContainer extends Element{
   constructor(title,classElem,classElemdutyClass='active',child=null,attribute=[],childClass,childElem){
      super(title,classElem,child=null,attribute=[]);
      this.childClass=childClass;
      this.childElem=childElem;
      this.appendChild=()=>{
       const child=new Element(this.childElem,this.childClass,this.childElem);
       
       this.child=child;
         this.elem.append(child.elem);
        
        };
        this.appendChild();
        
   }
   appendEelemToChild(element){
      if(typeof(element)=='object'&&!Array.isArray(element))
      {this.child.elem.append(element); }
      else if(Array.isArray(element)){
         element.forEach((el)=>{
            if(typeof(el)=='object'){
               
               this.child.elem.append(el.elem);
            }else{
               console.error('так нельзя добавлять,не хватило мозгов добавить функционала');
            }
         });
      }
      else{
         this.child.elem.insertAdjacentHTML('afterbegin',element);
      }
   }
}