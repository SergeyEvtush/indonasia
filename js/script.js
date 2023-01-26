

import  scroll  from "./scroll.js";
import view from "./viewScroll.js";


const searchingParent=document.querySelector('.header__serch'),
      searchingInput=searchingParent.querySelector('.search'),
      readMore=document.querySelectorAll('.link-title'),
      paragraphDescription=document.querySelectorAll('.paragraph-description'),
      menuLink=document.querySelectorAll('.list-link'),
      body=document.querySelector('body'),
      burger=document.querySelector('.burger__span'),
      navigation=document.querySelector('.nav'),
       menu=document.querySelector('.menu');




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
//добавил data атрибут из объекта во viewScroll
menuLink.forEach((el)=>{
      let a=el.innerHTML;
      view.addDataAttrToLink(el,a.split(' ').join('').toLowerCase());
      });
//добавил скролл к ссылкам в header ,цели скрола взял из data атрибутов и добавил к ним точку
menuLink.forEach((el)=>{     
      el.addEventListener('click',(e)=>{
            e.preventDefault();
            if(body.classList.contains('body-lock')&&navigation.classList.contains('active')&&burger.classList.contains('active')){
                  burger.classList.remove('active');
                  navigation.classList.remove('active');
                  body.classList.remove('body-lock');
            }
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

menu.addEventListener('click',(e)=>{
      const target=e.target;
     menuLink.forEach((link)=>{
      if(target==link){
      }
     });
      if(document.documentElement.clientWidth<=1000){
         if(target==burger){
            burger.classList.toggle('active');
            navigation.classList.toggle('active');
            body.classList.toggle('body-lock');

         }
      }
});