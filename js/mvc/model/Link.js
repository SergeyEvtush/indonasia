'use strict';
import Element from "./Element.js";
export default



class HeaderLink extends Element{
   constructor(title,classElem,dutyClass='active',child=null,attribute=[],dataAtribut,scrollingData){
      super(title,classElem,dutyClass,child,attribute);
      this.dataAtribut=dataAtribut;
      this.scrollingData=scrollingData;
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


   scrollToElement(el){
      
      el.scrollIntoView({
         block:'center',
         inline:'nearest',
         behavior:"smooth"
      });
      }

}