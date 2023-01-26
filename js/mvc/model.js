
export default
class Element{
   constructor(title,classElem,parent,dutyClass='active',...items){
      this.title=title;
      this.classElem=classElem;
      this.parent=parent;
      this.items=items;
      this.dutyClass=dutyClass;
      this.elem=document.createElement(this.title);
   }
   addToParent(){
      const parentElement=document.querySelector(this.parent);
      parentElement.insertAdjacentHTML('afterbegin',`${this.elem}`);
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
   returnItem(i){
      return this.items[i];
   }
   pushElem(i){
      console.log(this.items[i]);
     return this.elem.insertAdjacentHTML('afterbegin',this.returnItem(i));
   }

}