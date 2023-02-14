"use strict"
import ContentBlock from "../model/ContentBlock.js";
import {getResourse} from "../model/functions.js";



export const blockBromo=document.querySelector('.bromo .content');
export  const contentBromo=new ContentBlock('Bromo',
'Steady your steps, we will climb together!',`
Enjoying the vast expanse of the sea of ​​​​sand,
witnessing the splendor of Mount Semeru that soars into the sky,
and gazing at the beauty of the sun moving out of its bed or otherwise enjoying the dim
   twilight from the Bromo ridge is an unforgettable experience when visiting Bromo.`
); 
    contentBromo.content.child[3].child.addClass('bromo');
       blockBromo.append(contentBromo.content.elem);

 


