import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  type?: 'car' | 'coin' | 'metal' | 'graffiti' | 'industrial';
}

const ImageComparison = ({ beforeImage, afterImage, type = 'metal' }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerLeft = containerRect.left;
    const relativeX = clientX - containerLeft;
    
    // Calculate position as percentage
    let newPosition = (relativeX / containerWidth) * 100;
    
    // Clamp the value between 0 and 100
    newPosition = Math.max(0, Math.min(100, newPosition));
    
    setSliderPosition(newPosition);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove as any);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove as any);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`image-comparison ${type}`}
    >
      <div 
        className="before"
        style={{ backgroundImage: `url('${beforeImage}')` }}
      ></div>
      <div 
        className="after"
        style={{ 
          backgroundImage: `url('${afterImage}')`,
          width: `${sliderPosition}%`
        }}
      ></div>
      <div 
        className="slider"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="slider-button">
          <ChevronLeft className="h-4 w-4 text-primary" />
          <ChevronRight className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="label before-label bg-primary/80 text-primary-foreground">Before</div>
      <div className="label after-label bg-primary/80 text-primary-foreground">After</div>
    </div>
  );
};

export default ImageComparison;
