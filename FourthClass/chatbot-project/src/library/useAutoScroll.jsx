import { useRef, useEffect } from "react";

export function useAutoScroll(dependencies){
  const chatMessageRef = useRef(null)

  useEffect(()=>{
    const containerElem = chatMessageRef.current;
    if(containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }

  }, [dependencies])

  return chatMessageRef;
};