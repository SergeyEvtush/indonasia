"use strict";
export default
class Element{
   constructor(title,classElem,parent,dutyClass,...items){
      this.title=title;
      this.classElem=classElem;
      this.parent=parent;
      this.items=items;
      this.dutyClass=dutyClass
      this.elem=document.createElement(this.title);
   }
   assignClass(){
      return this.elem.classList.add(this.classElem);
   }
   assignDutyClass(){
      return this.elem.classList.add(this.dutyClass);
   }
   removeDutyClass(){
      return this.elem.classList.remove(this.dutyClass);
   }
   pushElem(obj){
      return this.elem.push(obj);
   }

}