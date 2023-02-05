"use strict";
import ContentBlock from "../model/ContentBlock.js";


export const block=document.querySelector('.nusa-tenggara .content');
const content=new ContentBlock('EAST NUSA TENGGARA','Have you enjoyed your holiday?',`
You will be amazed if you take part in this sailing
Komodo island tour package. So it is also mandatory for you,
besides enjoying Komodo tourism on Komodo Island,
you also have to taste the marine tourism.
The beautiful waters of Komodo will make
you meet many travelers from other countries.`);
console.log(content);
block.append(content.content.elem);
