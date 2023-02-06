'use strict';

import Link from "./Link.js";
import Element from "./Element.js";
import Content from "./Content.js";
export default
//content
class ContentBlock{
      constructor(subtitleText,titleText,descriptionText,mainPageTitleText=null,arrow=`
      <svg class="sprite-arrow rotate-yellow">
      <use xlink:href="icons/sprite.svg#arrow_down">
      </svg>`){
            this.subtitleText=subtitleText;
            this.mainPageTitleText=mainPageTitleText;
            this.titleText=titleText;
            this.descriptionText=descriptionText;
            this.arrow=arrow;
            this.content=new Content('div',['content__title', 'title'],['title__subtitle','title-main','content__description',['title__link', 'yellow-title']]);

            this.subtitle=new Element('h3','subtitle',this.subtitleText);
            this.subtitle.appendChilds();
            this.content.child[0].child=this.subtitle;
            this.content.child[0].appendChilds();

            
            this.titleMain=new Element('h2','title-text',this.titleText);
            this.titleMain.appendChilds();
            
            if(this.mainPageTitleText===null){
                  this.content.child[1].child=this.titleMain;
            }else{
                  this.mainPageTitle=new Element('h1','discover-text',this.mainPageTitleText);
                  this.mainPageTitle.appendChilds();
                  this.content.child[1].child=[this.mainPageTitle,this.titleMain];
            }
            this.content.child[1].appendChilds();
            this.paragraphDescription=new Element('p','paragraph-description',this.descriptionText); 
            this.paragraphDescription.appendChilds(); 
            this.content.child[2].child=this.paragraphDescription;
            this.content.child[2].appendChilds();
            this.linkTitle=new Link('a',['link-title', 'yellow'],'read more');
            this.linkTitle.attribute=['href','#']; 
            this.linkTitle.dataAtribut='data-link';
            this.linkTitle.valueDataAttribute='read';
            this.linkTitle.setHref();
            this.linkTitle.setDataAtribute();
            this.linkTitle.appendChilds();
            this.content.child[this.content.child.length-1].child=this.linkTitle;
            this.content.child[this.content.child.length-1].appendChilds();  
            this.linkTitle.elem.insertAdjacentHTML('afterend',this.arrow); /** */
      }
}


