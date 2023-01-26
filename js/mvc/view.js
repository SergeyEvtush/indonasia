

import model from "./model.js";
export default
function renderPage(){
  const Element=model;
   
   const headerWraper=new Element('div','header__wraper','header');
   headerWraper.assignClass();
   const logo=new Element('div','logo','header__wraper');
   logo.assignClass();
   headerWraper.elem.insertAdjacentElement('afterbegin',logo.elem);
   const header=new Element('header','header','.wraper','active');
   header.assignClass();
   header.elem.insertAdjacentElement('afterbegin',headerWraper.elem);
   const wraper=document.querySelector('.wraper');
   wraper.insertAdjacentElement('afterbegin',header.elem);


   
}
renderPage();


 
