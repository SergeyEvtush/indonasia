"use strict";
import Element from "./Element.js";

export default
class Content extends Element{
   constructor(title,classElem,childs){
      super(title,classElem);
      this.childs=childs;
     this.appendChilds=()=>{
      this.childs.forEach(element => {
        const el=new Element('div',element,this.classElem);
         this.elem.append(el.elem);
         this.child.push(el);
      });
     };
     this.appendChilds();
   }
   removeChild(i){

      console.log(this.childs);
      if(Array.isArray(this.childs)){
            let array=[];
           
            this.childs.forEach((element,index) => {
                  if(index!=i){
                        array.push(element);
                  }
            });
            this.childs=[];
            
            array.forEach(el=>{
                  this.childs.push(el);
            });
      }
    return this.childs;
   }
}