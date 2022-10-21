import React from "react";
import { useState, useLayoutEffect } from "react";

const queries = [
        '(max-width: 480px)',
        '(min-width: 481px) and (max-width: 768px)',
        '(min-width: 769px)'
]

export  function useMatchMedia(){
  

    const mediaQueryList = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryList.map(mql => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(()=>{
        const handler = () => setValues(getValues);

        mediaQueryList.forEach(mql => mql.addEventListener("change", handler));

        return () => mediaQueryList.forEach(mql => mql.removeEventListener("change", handler));
    })
    
    return ["isMobile", "isTablet", "isDesktop"].reduce((acc, screen, index) => ({...acc, [screen]: values[index]}), {})
}