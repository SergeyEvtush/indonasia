"use strict"
import ContentBlock from "../model/ContentBlock.js";

export const blockDiscover=document.querySelector('.discover .content');
const contentDiscover=new ContentBlock('explore the Nature Beauty','Wonderful Indonesia',`
`,'Discover');

blockDiscover.append(contentDiscover.content.elem);