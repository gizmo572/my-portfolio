'use client';

import { useTheme } from "next-themes";
import { useState, forwardRef, useEffect } from "react";



interface ShootingStarProps {
  shootingStars?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


const ShootingStar = forwardRef<HTMLDivElement, ShootingStarProps>(({
  shootingStars = true,
  className,
  style
}, ref) => {
  const [star, setStar] = useState<{ id: number, top: string, left: number, direction: string }>();
  // const [starSpeed, setStarSpeed] = useState(10);
  const { theme } = useTheme();
  
  useEffect(() => {
      if (shootingStars) {
          const interval = setInterval(() => {
              const rng = Math.random();

              const newStar = {
                  id: rng,
                  top: `${1 + Math.random() * 50}%`,
                  left: rng * 100,
                  direction: rng < 0.5 ? 'left' : 'right',
              }

              setStar(newStar);

          }, 350 * 10);

          return () => clearInterval(interval);
      }
  }, [shootingStars]);

  return (
      <>
        {shootingStars && star &&
        <>
        {/* <input type="number" min="1" max="20" value={starSpeed} onChange={(e) => setStarSpeed(parseInt(e.target.value))} /> */}
        <div
            key={star.id}
            ref={ref}
            className={`${className} ${theme === 'light' ? 'hidden' : ''}`}
            style={{
                position: 'fixed',
                top: star.top,
                left: 0,
                zIndex: '0',
                width: '1px',
                height: '1px',
                background: `linear-gradient(to ${star.direction}, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`, // Horizontal gradient for trail
                animation: `${star.direction === 'left' ? 'shooting-star' : 'shooting-star-reverse'} ${0.25 * 10}s linear forwards`,
                perspective: '1000px',
                ...style,
            }}
            />
          </>
        }
        <style jsx>{`
            @keyframes shooting-star {
                0% {
                    width: 1px; // Start small
                    opacity: 0;
                    transform: scale(1); // Start far away, small and rotated
                    transform-origin: left center;
                    left: ${(star?.left || 0) - 33.33}%;
                }
                33% {
                    width: 33%; // Expand width for trail
                    opacity: 1;   // Fully visible
                    transform: scale(1); // Move closer and grow
                    left: ${(star?.left || 0) - 16.67}%;
                }
                67% {
                    width: 33%;
                    opacity: .75;   // Hold visibility
                    transform: scale(2); // Closest to the viewer, full size
                    left: ${(star?.left || 0) + 0}%;
                }
                100% {
                    width: 33%;  // Shrink width as it fades
                    opacity: 0;  // Fade out
                    transform: scale(3); // Move past the viewer and grow
                    transform-origin: left center;
                    left: ${(star?.left || 0) + 16.67}%;
                }
            }
            @keyframes shooting-star-reverse {
                0% {
                    width: 1px; // Start small
                    opacity: 0;
                    transform: scale(1); // Start far away, small and rotated
                    transform-origin: right center;
                    left: ${(star?.left || 100) + 25}%;
                }
                33% {
                    width: 33%; // Expand width for trail
                    opacity: 1;   // Fully visible
                    transform: scale(1); // Move closer and grow
                    transform-origin: right center;
                    left: ${(star?.left || 100) - 41.67}%;
                }
                67% {
                    width: 33%;
                    opacity: .75;   // Hold visibility
                    transform: scale(2); // Closest to the viewer, full size
                    left: ${(star?.left || 100) - 58.33}%;
                }
                100% {
                    width: 33%;  // Shrink width as it fades
                    opacity: 0;  // Fade out
                    transform: scale(3); // Move past the viewer and grow
                    transform-origin: right center;
                    left: ${(star?.left || 100) - 75}%;
                }
            }
        `}</style>
      </>
  );
});

ShootingStar.displayName = 'ShootingStar';

export { ShootingStar };