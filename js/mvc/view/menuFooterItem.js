"use strict";
import Element from "../model/Element.js";
import Ul from "../model/Ul.js";


      const services=new Ul(['menu-footer__ul','ul-menu'],['Services','Email marketing','Campings','Branding','Offline'],'ul-menu__li');
      const about=new Ul(['menu-footer__ul','ul-menu'],['About','Our Story','Benefits','Team','Careers'],'ul-menu__li');
      const help=new Ul(['menu-footer__ul','ul-menu'],['FAQs','Contact Us'],'ul-menu__li');
      const menuFooterItem=new Element('div',['menu-footer__item'],[services]);
      menuFooterItem.appendChilds();
      const menuFooterItem2=new Element('div',['menu-footer__item'],[about]);
      menuFooterItem2.appendChilds();
      const menuFooterItem3=new Element('div',['menu-footer__item'],[help]);
      menuFooterItem3.appendChilds();
export const VacationMenuFooter=new Element('div',['vacation__menu','menu-footer'],[menuFooterItem,menuFooterItem2,menuFooterItem3]);
VacationMenuFooter.appendChilds();