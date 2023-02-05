
import {liArr,burger,headerSerch,search} from "./view/header.js";
import {block} from "./view/nussaTengara.js";
import {blockBromo} from "./view/bromo.js";
import {blockCulture} from "./view/culture.js";
import {blockDiscover} from "./view/discover.js";


liArr.forEach((el)=>{
   el.elem.addEventListener('click',(e)=>{
      e.preventDefault();
      const target=e.target;
      el.scrollToElement(returnElem('data-goto',target));
   });
});
burger.elem.addEventListener('click',(e)=>{
   e.preventDefault();
   burger.toggleClass();
   liArr.forEach((el)=>{
      el.elem.addEventListener('click',(e)=>{
         e.preventDefault();
         burger.removeClass();
      });
   });
});
headerSerch.elem.addEventListener('click',()=>{
   search.focusToElement();
});


//функция возвращающая элемент по атрибуту
function returnElem(dataType,target){
   const elClass='.'+target.getAttribute(dataType);
   const elem=document.querySelector(elClass);
   return elem;
}


  