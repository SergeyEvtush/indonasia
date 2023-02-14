
export default
class Element{
   constructor(title,classElem=[],child=[],attribute=[]){
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
  changeChilds(){
   this.elem.innerHTML=this.child;
  }
  removeChild(i){
   if(Array.isArray(this.child)){
      let array=[];
      this.child.forEach((element,index) => {
            if(element.index!=i){
                  array.push(element);
            }
      });
      this.child=[];
      array.forEach(el=>{
            this.child.push(el);
      });
}
return this.child;
   }

  
  
  setAttributeToElem(){
   if(this.attribute.length>0){
     return this.elem.setAttribute(this.attribute[0],this.attribute[1]);
   }
  }
  removeClass(removingClass){
   this.elem.classList.remove(removingClass);
  let array=[];
  
   this.classElem.forEach((el)=>{
      if(el!=removingClass){
         array.push(el);
      }
   });
   this.classElem=[];
   array.forEach(el=>{
      this.classElem.push(el);
   })
  }
  addClass(addingClass){
   this.elem.classList.add(addingClass);
   this.classElem.push(addingClass);
  }
}
