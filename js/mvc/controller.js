
import {liArr,burger,headerSerch,search} from "./view/header.js";
import {block,content} from "./view/nussaTengara.js";
import {blockBromo,contentBromo} from "./view/bromo.js";
import {blockCulture,contentCulture} from "./view/culture.js";
import {blockDiscover,contentDiscover} from "./view/discover.js";
import ContentBlock from "./model/ContentBlock.js";
import {VacationMenuFooter} from "./view/menuFooterItem.js";


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

blockDiscover.addEventListener('click',(e)=>{
                     e.preventDefault();
                     const target=e.target;
                     if(target.classList.contains('link-title')){
                        contentDiscover.content.child[contentDiscover.content.child.length-1]
                        .child.scrollToElement(returnElem('data-link',target));
                     }
               
});
const paragraph=document.querySelectorAll('.paragraph-description');
paragraph.forEach(el=>{
   const text=el.innerHTML;
   console.log();
   el.innerHTML=text.slice(0,150)+'...';
});


const yellowLink=document.querySelectorAll('.link-title.yellow');
yellowLink.forEach((link)=>{
   link.addEventListener('click',(e)=>{
      e.preventDefault();
      link.classList.toggle('active');
     
   });
});
const vacation=document.querySelector('.vacation');
vacation.append(VacationMenuFooter.elem);

//функция возвращающая элемент по атрибуту
function returnElem(dataType,target){
   const elClass='.'+target.getAttribute(dataType);
   const elem=document.querySelector(elClass);
   return elem;
}


  