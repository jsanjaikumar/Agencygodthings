import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-node') ||
        target.closest('.cursor-pointer')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-electric-gold rounded-full pointer-events-none z-[9999] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${hovered ? 0.5 : 1})`,
        }}
      />
      {/* Outer Halo */}
      <div
        className="fixed top-0 left-0 rounded-full border border-electric-gold pointer-events-none z-[9998] transition-all duration-200 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: hovered ? '48px' : '28px',
          height: hovered ? '48px' : '28px',
          backgroundColor: hovered ? 'rgba(250, 204, 21, 0.08)' : 'transparent',
          borderColor: hovered ? 'rgba(250, 204, 21, 0.8)' : 'rgba(250, 204, 21, 0.3)',
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) -translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
