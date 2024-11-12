import { ShootingStar } from './shooting-star';

interface BackgroundProps {
    shootingStars?: boolean; // New prop for shooting stars
    className?: string;
    style?: React.CSSProperties;
}

const Background = ({
    shootingStars = true, // Default is false
    className,
    style
}: BackgroundProps) => {


  return (
    <>
      {shootingStars && (
        <>
          <ShootingStar className={className} style={style} />
        </>
      )}
    </>
  );
};

Background.displayName = 'Background';

export { Background };