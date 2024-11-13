'use client'

import { useEventListener } from '@/lib/custom-hooks';

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 * 
 * This is an iteration of Animated Cursor by @author Stephen Scaff
 */

import React, { useRef, useEffect, useState, useCallback, CSSProperties, ReactNode, HTMLAttributes } from 'react';
import { useMobile } from '@/components/mobile-context';
interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CustomCursorProps extends WrapperProps {
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
}


const CustomCursor: React.FC<CustomCursorProps> = ({
  color = '244, 63, 94',
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
  children
}) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number>();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);
  const { isMobile } = useMobile();

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined && cursorOuterRef.current) {
      coords.x += (endX.current - coords.x) / 8;
      coords.y += (endY.current - coords.y) / 8;
      cursorOuterRef.current.style.top = `${coords.y}px`;
      cursorOuterRef.current.style.left = `${coords.x}px`;
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current != null) {
        cancelAnimationFrame(requestRef.current);
      }
    }
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);
  
  useEventListener('mousemove', onMouseMove);
  useEventListener('mousedown', onMouseDown);
  useEventListener('mouseup', onMouseUp);
  useEventListener('mouseenter', onMouseEnter);
  useEventListener('mouseleave', onMouseLeave);

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return;

    if (isActive) {
      cursorInnerRef.current.style.transform = 'scale(1)';
      cursorOuterRef.current.style.transform = 'scale(1)';
    } else {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable && cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `scale(${.6})`;
      cursorOuterRef.current.style.transform = `scale(${.6})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return;
    
    if (isVisible) {
      cursorInnerRef.current.style.opacity = '1';
      cursorOuterRef.current.style.opacity = '1';
    } else {
      cursorInnerRef.current.style.opacity = '0';
      cursorOuterRef.current.style.opacity = '0';
    }
  }, [isVisible]);

  useEffect(() => {
    if (typeof document == 'undefined') return;

    // the cursor shadow is removed on-hover over these elements 
    // TODO: make 'clickables' a prop with a default value
    const clickables = document.querySelectorAll(
      'a, input, label[for], select, button, textarea, .link, .text-input, [data-radix-collection-item]',
    );
    clickables.forEach(element => {
      const el = element as HTMLElement;

      el.addEventListener('mouseover', () => {
        setIsActive(true);
      });
      el.addEventListener('click', () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true);
      });
      el.addEventListener('mouseup', () => {
        setIsActive(true);
      });
      el.addEventListener('mouseout', () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickables.forEach(el => {
        el.removeEventListener('mouseover', () => {
          setIsActive(true);
        });
        el.removeEventListener('click', () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener('mouseup', () => {
          setIsActive(true);
        });
        el.removeEventListener('mouseout', () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  const styles: { cursorOuter: CSSProperties; cursorInner: CSSProperties } = isMobile
    ? {
      cursorInner: {
        display: 'none',
      },
      cursorOuter: {
        display: 'none',
      },
    }
    : {
      cursorInner: {
        zIndex: 999,
        position: 'fixed',
        borderRadius: '50%',
        width: innerSize,
        height: innerSize,
        pointerEvents: 'none',
        backgroundColor: `rgba(${color}, 1)`,
        transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
      },
      cursorOuter: {
        zIndex: 999,
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        width: outerSize,
        height: outerSize,
        backgroundColor: `rgba(${color}, ${outerAlpha})`,
        transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
      },
    };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
      {children}
    </>
  );
};

export default CustomCursor;