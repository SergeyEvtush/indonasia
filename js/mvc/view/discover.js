"use strict"
import ContentBlock from "../model/ContentBlock.js";

export const blockDiscover=document.querySelector('.discover .content');
export const contentDiscover=new ContentBlock('explore the Nature Beauty','Wonderful Indonesia',`
`,'Discover',`<svg class="sprite-arrow">
<use xlink:href="icons/sprite.svg#arrow_down">
</svg>`);

contentDiscover.content.child[contentDiscover.content.child.length-1].child.removeClass('yellow');//setDataAtribute()
contentDiscover.content.child[contentDiscover.content.child.length-1].child.changeDataAttribute('data-link','footer');
console.log(contentDiscover.content.child[contentDiscover.content.child.length-1].child);

blockDiscover.append(contentDiscover.content.elem);