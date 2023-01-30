
export default
class Element{
   constructor(title,classElem,parent,dutyClass='active',child=null,attribute=[]){
      this.title=title;
      this.parent=parent;
      this.dutyClass=dutyClass;
      this.child=child;
      this.attribute=attribute;
      this.elem=document.createElement(this.title);//)
      this.classElem=classElem;
      
   }
  appendChilds(){
   if(!Array.isArray(this.child)){
      if(this.child!=null&&typeof(this.child)==='object'){
      
         this.elem.append(this.child.elem);
      }else{
         this.elem.insertAdjacentHTML('afterbegin',this.child);
      }
   }else{
      this.child.forEach(el=>{
         
         this.elem.append(el.elem);
      });
   }
  
  }
  setAttributeToElem(){
   if(this.attribute.length>0){
     return this.elem.setAttribute(this.attribute[0],this.attribute[1]);
   }
  }
  appenedMoreClass(){
   if(Array.isArray(this.classElem)){
      this.classElem.forEach(el=>{
         this.elem.classList.add(el);
      });
   }else{
      this.elem.classList.add(this.classElem);
   }
  }
}
