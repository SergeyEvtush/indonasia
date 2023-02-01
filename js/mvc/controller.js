
import {liArr,burger,headerSerch,search} from "./view/header.js";
import {content,linkTitle} from "./view/content.js";
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
//content
console.log(content.elem);
linkTitle.elem.addEventListener('click',(e)=>{
   e.preventDefault();
   const target=e.target;
      linkTitle.scrollToElement(returnElem('data-link',target));
});


//функция возвращающая элемент по атрибуту
function returnElem(dataType,target){
   const elClass='.'+target.getAttribute(dataType);
   const elem=document.querySelector(elClass);
   return elem;
}