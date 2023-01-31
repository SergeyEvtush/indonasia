
import {liArr,burger} from "./view/header.js";

liArr.forEach((el)=>{
   el.elem.addEventListener('click',(e)=>{
      e.preventDefault();
      const elClass='.'+e.target.getAttribute('data-goto');
      const elem=document.querySelector(elClass);
      el.scrollToElement(elem);
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