

import  scroll  from "./scroll.js";
import view from "./viewScroll.js";

const searchingParent=document.querySelector('.header__serch'),
      searchingInput=searchingParent.querySelector('.search'),
      readMore=document.querySelectorAll('.link-title'),
      paragraphDescription=document.querySelectorAll('.paragraph-description'),
      menuLink=document.querySelectorAll('.list-link');
      const arrText=[];

      paragraphDescription.forEach(el=>{
            arrText.push(el.innerText);
      });
      paragraphDescription.forEach(el=>{
            el.innerHTML=sliceText(el.innerHTML,150);
            
       });
      
   searchingParent.addEventListener('click',(e)=>{
         searchingInput.focus();
});
readMore.forEach((el)=>{
      el.addEventListener('click',(e)=>{
            e.preventDefault();
            const target=e.target;
            if(target.dataset.link=="read"){
                  const str=target.parentElement.parentElement.querySelector('.paragraph-description');
                  const text=str.innerText;
                  target.classList.toggle('active');
                  if(target.classList.contains('active')){
                        str.innerHTML=getSubstr(arrText,text);
                  }else{
                        
                        str.innerHTML=sliceText(text,50);
                        
                  }
            }
            if(target.dataset.link==="scroll"){
                  scroll.scrollToElement("."+findSection("."+target.className).nextElementSibling.className);
            }      
      });
});
menuLink.forEach((el)=>{
      let a=el.innerHTML;
      view.addDataAttrToLink(el,a.split(' ').join('').toLowerCase());
      });
menuLink.forEach((el)=>{     
      el.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log("."+el.getAttribute("data-goto"));
            scroll.scrollToElement("."+el.getAttribute("data-goto"));
      });
});

function sliceText(text,textLength){

      if(text.length>textLength){
            const str=text.slice(0,150);
            
            let arr=str.split();
            arr.push('...');
            arr.join();
            return arr;
            
      }else{
            return text;
      }
}
function getSubstr(arr,text){
    return  arr.find(item=>item.includes(text.substr(0,50))); 
}

function findSection(el){
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

