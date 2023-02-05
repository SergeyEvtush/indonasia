"use strict"
import ContentBlock from "../model/ContentBlock.js";

export const blockCulture=document.querySelector('.indonasian-culture .content');
const contentCulture=new ContentBlock('INDONESIAN CULTURE','Our culture here is very friendly to people',`
Known for his politeness,
                                 manners and gentleness. 
                                 This becomes a characteristic when they mingle with other tribes
                                 and become basic traits that are passed down by their ancestors.`);

   blockCulture.append(contentCulture.content.elem);