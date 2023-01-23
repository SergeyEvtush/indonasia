

import  scroll  from "./scroll.js";

const searchingParent=document.querySelector('.header__serch'),
      searchingInput=searchingParent.querySelector('.search'),
      searchingTitle=document.querySelector('.header__serch h3'),
      readMore=document.querySelectorAll('.link-title'),
      paragraphDescription=document.querySelectorAll('.paragraph-description'),
       height=document.documentElement.clientHeight,
       nusaTenggara=document.querySelector('.nusa-tenggara');
            console.log(height);
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