
"use strict";
import model from "../model/Element.js";
import link from "../model/Link.js";
import Burger from "../model/burger.js";
import Input from "../model/Input.js";


//!пример создания составного елемента
// const obj=new ElInContainer('div','header','wraper','',null,[],'testtest','div');
// const div=document.createElement('div');
// obj.appendEelemToChild(div);


      const scrollingObjects=[
            {Information:"Footer"},
            {aboutUs:"bromo"},
            {culture:"indonasian-culture"},
      ];
       const menuItems=['information','about us','culture'];
       const Element=model;
       const scrollingLink=link;
    
export const headerSerch=new Element('div','header__serch','header__wraper');

export const search=new Input('input','search','header__serch');
             search.attribute=['type','text'];
             search.setAttributeToElem();
       const titleSearch=new Element('h3','text','header__serch');
             titleSearch.child="Search";
             titleSearch.appendChilds();
       const iconSearch=new Element('div',"sprite-wraper",'header__serch'); 
             iconSearch.child=`<svg class="sprite-search"><use xlink:href="icons/sprite.svg#search"></svg>`;
             iconSearch.appendChilds();     
             headerSerch.child=[iconSearch,titleSearch,search,];
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


       const menu=new Element('div','menu','header__wraper');
             menu.child=nav;
             menu.appendChilds(nav);

       const logoLink=new Element('a','link-log','logo');
             logoLink.child=`QWERy`;
             logoLink.attribute=['href',"#"];
             logoLink.setAttributeToElem();
             logoLink.appendChilds();

       const logo=new Element('div',"logo",'header__wraper',logoLink);
             logo.child=logoLink;
             logo.appendChilds();

export const body=document.querySelector('body'); 
export const burger=new Burger('span','burger__span','burger','body-lock',body,nav.elem);
       const burgerParent=new Element('div','burger','header__wraper');
             burgerParent.child=burger;
             burgerParent.appendChilds();     

       const headerWraper=new Element('div','header__wraper','header');
             headerWraper.child=[logo,menu,burgerParent,headerSerch];
             headerWraper.appendChilds();

export const header=new Element('header','header','.wraper','active',headerWraper);
             header.appendChilds();

       const wraper=document.querySelector('.wraper');
             wraper.insertAdjacentElement('afterbegin',header.elem);





 
