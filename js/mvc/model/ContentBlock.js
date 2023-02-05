'use strict';

import Link from "./Link.js";
import Element from "./Element.js";
import Content from "./Content.js";
export default
//content
class ContentBlock{
      constructor(subtitleText,titleText,descriptionText){
            this.subtitleText=subtitleText;
            this.titleText=titleText;
            this.descriptionText=descriptionText;

             this.content=new Content('div',['content__title', 'title'],['title__subtitle','title-main','content__description',['title__link', 'yellow-title']]);

            this.subtitle=new Element('h3','subtitle',this.subtitleText);
            this.subtitle.appendChilds();
            this.content.child[0].child=this.subtitle;
            this.content.child[0].appendChilds();
            
            this.titleMain=new Element('h2','title-text',this.titleText);
            this.titleMain.appendChilds();
            this.content.child[1].child=this.titleMain;
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
            this.content.child[3].child=this.linkTitle;
            this.content.child[3].appendChilds();  
            this.linkTitle.elem.insertAdjacentHTML('afterend',`
                  <svg class="sprite-arrow rotate-yellow">
                     <use xlink:href="icons/sprite.svg#arrow_down">
                  </svg>`); 
      }
}


