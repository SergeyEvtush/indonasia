
export default
class Element{
   constructor(title,classElem,child=[],attribute=[]){
      this.title=title;
      this.child=child;
      this.attribute=attribute;
      this.elem=document.createElement(this.title);//)
      this.classElem=classElem;
      this.appenedMoreClass=function(){
         if(Array.isArray(this.classElem)){
            this.classElem.forEach(el=>{
               this.elem.classList.add(el);
            });
         }else{
            this.elem.classList.add(this.classElem);
         }
        };
        this.appenedMoreClass();
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
  removeChild(){
  this.child.forEach(el=>console.log(el));
   }

  
  
  setAttributeToElem(){
   if(this.attribute.length>0){
     return this.elem.setAttribute(this.attribute[0],this.attribute[1]);
   }
  }
  
}
