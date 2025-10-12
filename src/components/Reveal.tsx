import React, { useEffect, useRef, useState } from 'react';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delayMs?: number;
  once?: boolean;
  threshold?: number;
}

export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delayMs = 0,
  once = true,
  threshold = 0.15,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frameId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          frameId = window.requestAnimationFrame(() => setVisible(true));
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          frameId = window.requestAnimationFrame(() => setVisible(false));
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [once, threshold]);

  const translateClass = (() => {
    switch (direction) {
      case 'down':
        return 'translate-y-3';
      case 'left':
        return '-translate-x-3';
      case 'right':
        return 'translate-x-3';
      case 'fade':
        return '';
      case 'up':
      default:
        return '-translate-y-3';
    }
  })();

  return (
    <div
      ref={ref}
      className={[
        'will-change-transform will-change-opacity',
        'transition-all duration-300 ease-out',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass}`,
        className,
      ].join(' ')}
      style={{ transitionDelay: `${delayMs}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
