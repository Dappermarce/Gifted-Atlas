import { useState, useCallback } from 'react';

export function useCounterAnimation(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  const startAnimation = useCallback(() => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }, [target, duration]);

  return { count, startAnimation };
}
