import React, { useRef, useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fadeDurationMs?: number;
}

export default function LazyImage({ fadeDurationMs = 250, className = '', ...rest }: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      ref={imgRef}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={[
        'transition-opacity',
        loaded ? 'opacity-100' : 'opacity-0',
        className,
      ].join(' ')}
      style={{ transitionDuration: `${fadeDurationMs}ms` }}
      {...rest}
    />
  );
}
