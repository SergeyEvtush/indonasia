"use strict"
import ContentBlock from "../model/ContentBlock.js";

export const blockDiscover=document.querySelector('.discover .content');
export const contentDiscover=new ContentBlock('explore the Nature Beauty','Wonderful Indonesia',`
`,'Discover',`<svg class="sprite-arrow">
<use xlink:href="icons/sprite.svg#arrow_down">
</svg>`,['title__subtitle','title-main',['title__link', 'yellow-title']]);


contentDiscover.content.child[contentDiscover.content.child.length-1].child.child="Scroll";
contentDiscover.content.child[contentDiscover.content.child.length-1].child.changeChilds();
contentDiscover.content.child[contentDiscover.content.child.length-1].child.removeClass('yellow');
contentDiscover.content.child[contentDiscover.content.child.length-1].child.changeDataAttribute('data-link','footer');
blockDiscover.append(contentDiscover.content.elem);