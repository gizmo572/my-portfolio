import React, { useRef } from "react";

type EventHandler<K extends keyof HTMLElementEventMap> = (event: HTMLElementEventMap[K]) => void;


export function useEventListener<K extends keyof HTMLElementEventMap>(eventName: K, handler: EventHandler<K>): void {

  
  const savedHandler = useRef<EventHandler<K>>();
  
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  
  React.useEffect(() => {
    if (typeof document == 'undefined') return;

    const eventListener = (event: HTMLElementEventMap[K]) => {
      if (savedHandler.current) savedHandler.current(event);
    }

    document.addEventListener(eventName, eventListener as EventListener);

    return () => {
      document.removeEventListener(eventName, eventListener as EventListener);
    };
  }, [eventName]);
}