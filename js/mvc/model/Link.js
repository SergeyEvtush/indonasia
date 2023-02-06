'use strict';
import Element from "./Element.js";
export default



class Link extends Element{
   constructor(title,classElem,child=null,attribute=[],dataAtribut,scrollingData,valueDataAttribute){
      super(title,classElem,child,attribute);
      this.dataAtribut=dataAtribut;
      this.scrollingData=scrollingData;
      this.valueDataAttribute=valueDataAttribute;
   }
   addDataAttrToLink(){
      const obj=new Object();
      this.scrollingData.map((el)=>{
        for (let key in el) {
         let g=this.child.split(' ').join('').toLowerCase();
         let f=key.split(' ').join('').toLowerCase();
         
          if(f===g){
            
            obj[key.toLowerCase()]=el[key].toLowerCase();
          }
         
        }
      });
      this.elem.setAttribute(this.dataAtribut,obj[this.child.split(' ').join('').toLowerCase()]);
  }
setDataAtribute(){
   this.elem.setAttribute(this.dataAtribut,this.valueDataAttribute);
}
setHref(){
   this.elem.setAttribute(this.attribute[0],this.attribute[1]);
}
   scrollToElement(el){
      
      el.scrollIntoView({
         block:'center',
         inline:'nearest',
         behavior:"smooth"
      });
      }
changeDataAttribute(changingAttribute,valueChangingAttribute){
  /*  console.log(this.attribute); */
  this.dataAtribut=[];
  this.elem.setAttribute(changingAttribute,valueChangingAttribute);
  this.dataAtribut=[changingAttribute,valueChangingAttribute];
}
}