
"use strict";
import model from "../model/Element.js";
import link from "../model/Link.js";
import Burger from "../model/burger.js";



 const scrollingObjects=[
      {Information:"Footer"},
      {aboutUs:"bromo"},
      {culture:"indonasian-culture"},
];
    const menuItems=['information','about us','culture'];
    const Element=model;
    const scrollingLink=link;
    
    const headerSerch=new Element('div','header__serch','header__wraper');
          headerSerch.appenedMoreClass();
          headerSerch.child=`
        <svg class="sprite-search">
        <use xlink:href="icons/sprite.svg#search">
        </svg>
        <h3>Search</h3>
          <input type="text" class="search" >`;
          headerSerch.appendChilds();
     

    export const ul=new Element('ul',['menu__ul','list']);
   export const liArr=[];
          menuItems.forEach((el)=>{
            const menuItem=new Element('li','list__item','menu__ul');
                  menuItem.appenedMoreClass();
             const itemLink=new scrollingLink('a','list-link','list__item');
                  
                  itemLink.appenedMoreClass();
                  itemLink.attribute=['href','#'];
                  itemLink.setAttributeToElem();
                  itemLink.child=el;
                  itemLink.dataAtribut='data-goto';
                  itemLink.scrollingData=scrollingObjects;
                  itemLink.addDataAttrToLink();
                  itemLink.appendChilds();
                  menuItem.child=itemLink;
                  menuItem.appendChilds();
                  liArr.push(itemLink);
                  ul.child=menuItem;
                  ul.appendChilds();
                  }
            );
          ul.appenedMoreClass();

    const nav=new Element('nav','nav','menu');
          nav.child=ul;
          nav.appendChilds();
          nav.appenedMoreClass();        
    const menu=new Element('div','menu','header__wraper');
          menu.appenedMoreClass();
          menu.child=nav;
          menu.appendChilds(nav);

    const logoLink=new Element('a','link-log','logo');
          logoLink.appenedMoreClass();
          logoLink.child=`QWERy`;
          logoLink.attribute=['href',"#"];
          logoLink.setAttributeToElem();
          logoLink.appendChilds();

    const logo=new Element('div',"logo",'header__wraper',logoLink);
          logo.appenedMoreClass();
          logo.child=logoLink;
          logo.appendChilds();
     
     export const body=document.querySelector('body'); 
     export const burger=new Burger('span','burger__span','burger','body-lock',body,nav.elem);
            burger.appenedMoreClass();
      const burgerParent=new Element('div','burger','header__wraper');
      burgerParent.appenedMoreClass();
      burgerParent.child=burger;
      burgerParent.appendChilds();     

    const headerWraper=new Element('div','header__wraper','header');
          headerWraper.appenedMoreClass();
          headerWraper.child=[logo,menu,burgerParent,headerSerch];
          headerWraper.appendChilds();

  export const header=new Element('header','header','.wraper','active',headerWraper);

          header.appenedMoreClass();
          header.appendChilds();

    const wraper=document.querySelector('.wraper');
          wraper.insertAdjacentElement('afterbegin',header.elem);





 
