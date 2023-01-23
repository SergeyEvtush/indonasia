

export default{
      scrollToElement:(elementClass)=>{
      const scrollToElement=document.querySelector(elementClass);
      scrollToElement.scrollIntoView({
         block:'center',
         inline:'nearest',
         behavior:"smooth"
      });
      }
};


