import React, { useEffect } from 'react';

function useScrolle (func){

   function handleScroll(){
     const scrolled = window.scrollY;
     const viewportHeight = window.innerHeight;
     const fullHeight = document.getElementById('render_target').clientHeight;
     if( (scrolled + viewportHeight + 10) > fullHeight)
     func();
   }

   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => {window.removeEventListener('scroll', handleScroll)}
   });
 }

export default useScrolle
