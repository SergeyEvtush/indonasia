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
}