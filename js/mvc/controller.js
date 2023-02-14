
import {liArr,burger,headerSerch,search} from "./view/header.js";
import {block,nusaTenggaraContent} from "./view/nussaTengara.js";
import { blockBromo, contentBromo} from "./view/bromo.js";
import {blockCulture,contentCulture} from "./view/culture.js";
import {blockDiscover,contentDiscover} from "./view/discover.js";
import ContentBlock from "./model/ContentBlock.js";
import {VacationMenuFooter} from "./view/menuFooterItem.js";
import {returnElem,getResourse,findSection,sliceText} from "./model/functions.js";

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
   sliceText(el);
});


const yellowLink=document.querySelectorAll('.link-title.yellow');

yellowLink.forEach((link)=>{
   link.addEventListener('click',(e)=>{
      e.preventDefault();
      const target=e.target;
      target.classList.toggle('active');
      const element=findSection("."+target.className.split(' ')[2]);
      const elementClass=element.className;
      const p=element.querySelector('.paragraph-description');
      if(target.classList.contains('active')){
         
      getResourse('db.json').then(data=>{ 
      const text=data.find(el=>el[elementClass]);
      p.textContent=text[elementClass];
      });
      }else{
      sliceText(p);
      }
      

   });
});
const vacation=document.querySelector('.vacation');
vacation.append(VacationMenuFooter.elem);




  