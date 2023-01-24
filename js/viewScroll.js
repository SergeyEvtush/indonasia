import  scrollingObjects  from "./scroll.js";

export default{

  addDataAttrToLink:(menuLink,linkText)=>{
      const obj=new Object();
      scrollingObjects.scrollingObjects.map((el)=>{
        for (let key in el) {
         obj[key.toLowerCase()]=el[key].toLowerCase();
        }
      });
      menuLink.setAttribute('data-goto',obj[linkText]);
  }
};