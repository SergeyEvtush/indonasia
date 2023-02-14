"use strict"
export function returnElem(dataType,target){
   const elClass='.'+target.getAttribute(dataType);
   const elem=document.querySelector(elClass);
   return elem;
}

export const getResourse= async (url)=>{
   const res= await fetch(url);

   if(!res.ok){
      throw new Error(`Could not fetch ${url},status: ${res.status}`);
   }

   return await res.json();
};
export function findSection(el){
   
   if(document.querySelector(el).tagName=="SECTION"){
      
         return document.querySelector(el);
   }else{
         let str=document.querySelector(el).parentElement.className;
        
         if(str.includes(" ")){
               str="."+str.substr(0,str.indexOf(" "));
         }else{
               str="."+str;
         }
         return findSection(str);
   }
}
export function sliceText(paragraphElement){
      const text=paragraphElement.innerHTML;
    return  paragraphElement.innerHTML=text.slice(0,150)+'...';
}