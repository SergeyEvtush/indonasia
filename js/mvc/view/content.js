'use strict';
import ElInContainer from "../model/ElInContainer.js";
import link from "../model/Link.js";
import model from "../model/Element.js";
/**<!-- <div class="content">
                        <div class="content__title title">
                           <div class="title__subtitle">
                              <h3 class="subtitle">explore the Nature Beauty</h3>
                           </div>
                           <div class="title-main title__discover">
                              <h1 class="discover-text">Discover</h1>
                              <h2 class="title-text">Wonderful Indonesia</h2>
                           </div>
                           <div class="title__link white">
                              <a href="#" class="link-title" data-link="scroll">Scroll down</a>
                              <svg class="sprite-arrow">
                                 <use xlink:href="icons/sprite.svg#arrow_down">
                              </svg>
                           </div>
                        </div>
                     </div> --> */

const Element=model;
const scrollingLink=link;
      const titleSubtitle=new ElInContainer('div',['title__subtitle'],'',null,[],'subtitle','h3');
             titleSubtitle.appendEelemToChild('explore the Nature Beauty');

      const discoverText=new Element('h1','discover-text',null);
                  discoverText.child='Discover';
                  discoverText.appendChilds();
      const titleText=new Element('h2','title-text',null);
               titleText.child='Wonderful Indonesia';
               titleText.appendChilds();
      const titleMain=new Element('div',['title-main', 'title__discover']);
               titleMain.child=[discoverText,titleText];
             titleMain.appendChilds();
     export const  linkTitle=new scrollingLink('a','link-title','title__link');
               linkTitle.attribute=['href','#'];
               linkTitle.dataAtribut='data-link';
               linkTitle.child="Scroll down";
               linkTitle.appendChilds();
               linkTitle.scrollingData=[{scrollDown:"Footer"}]; 
               linkTitle.addDataAttrToLink();
               linkTitle.setAttributeToElem();   
               
      const iconArrow=new Element('div',"sprite-wraper",'title__link');
               iconArrow.child=
               `<svg class="sprite-arrow">
               <use xlink:href="icons/sprite.svg#arrow_down">
            </svg>`;
            iconArrow.appendChilds();
      const  titleLink=new Element('div',['title__link', 'white'],'content__title');
               titleLink.child=[linkTitle,iconArrow]; 
               titleLink.appendChilds();       
export const content=new ElInContainer('div','content','',null,[],['content__title','title'],'div');
             content.appendEelemToChild([titleSubtitle,titleMain,titleLink]);
       const discoverContent=document.querySelector('.discover__content');
       discoverContent.insertAdjacentElement('afterbegin',content.elem);