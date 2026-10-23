import React, { useState, useEffect, useRef, useCallback } from 'react';

const MATRIX_GLYPHS = '0123456789ABCDEF!@#$%&*<>[]{}~=+/\\_?^';

export default function ScrambleText({
  text = '',
  className = '',
  scrambleColor = '',
  duration,
  triggerOnParent = false,
  as: Component = 'span',
}) {
  const [isScrambling, setIsScrambling] = useState(false);
  const [resolvedCount, setResolvedCount] = useState(text ? text.length : 0);
  const [scrambledGlyphs, setScrambledGlyphs] = useState(() => []);
  const [lockedDimensions, setLockedDimensions] = useState(null);

  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const startTimeRef = useRef(0);
  const lastShuffleTimeRef = useRef(0);
  const isHoveredRef = useRef(false);
  const lockedDimensionsRef = useRef(null);

  // Sync state if text prop changes
  useEffect(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setIsScrambling(false);
    setLockedDimensions(null);
    lockedDimensionsRef.current = null;
    setResolvedCount(text ? text.length : 0);
    setScrambledGlyphs([]);
  }, [text]);

  const stop = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setIsScrambling(false);
    setLockedDimensions(null);
    lockedDimensionsRef.current = null;
    setResolvedCount(text ? text.length : 0);
  }, [text]);

  const trigger = useCallback(() => {
    // Check reduced motion preference
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    if (!text || text.length === 0) return;

    // 1. Calculate and lock dimensions of original text element before starting animation
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const dims = {
          width: Math.ceil(rect.width * 100) / 100,
          height: Math.ceil(rect.height * 100) / 100,
        };
        lockedDimensionsRef.current = dims;
        setLockedDimensions(dims);
      }
    }

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    const len = text.length;
    // Generate initial random glyphs for scrambling positions
    const initialGlyphs = Array.from({ length: len }, (_, i) => {
      if (text[i] === ' ') return ' ';
      return MATRIX_GLYPHS[Math.floor(Math.random() * MATRIX_GLYPHS.length)];
    });

    setScrambledGlyphs(initialGlyphs);
    setResolvedCount(0);
    setIsScrambling(true);

    startTimeRef.current = performance.now();
    lastShuffleTimeRef.current = startTimeRef.current;

    // Total duration: snappy Matrix decode between 380ms and 750ms
    const totalDuration = duration || Math.max(380, Math.min(750, len * 35 + 240));

    const animate = (now) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(1, elapsed / totalDuration);

      // Number of resolved characters from left to right
      const currentResolved = Math.floor(progress * (len + 1));
      setResolvedCount(currentResolved);

      // Re-randomize scrambled characters roughly every 35ms to avoid visual strobe
      const shouldShuffle = now - lastShuffleTimeRef.current > 35;
      if (shouldShuffle && progress < 1) {
        lastShuffleTimeRef.current = now;
        setScrambledGlyphs((prev) => {
          const next = [...prev];
          for (let i = currentResolved; i < len; i++) {
            if (text[i] !== ' ') {
              next[i] = MATRIX_GLYPHS[Math.floor(Math.random() * MATRIX_GLYPHS.length)];
            }
          }
          return next;
        });
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsScrambling(false);
        setResolvedCount(len);
        setLockedDimensions(null);
        lockedDimensionsRef.current = null;
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [text, duration]);

  // Handle pointer enter/leave on self
  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    trigger();
  }, [trigger]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
  }, []);

  // Handle parent trigger (e.g. when wrapped in a button or link)
  useEffect(() => {
    if (!triggerOnParent || !containerRef.current) return;
    const parent =
      containerRef.current.closest('button, a, [role="button"], .group') ||
      containerRef.current.parentElement;

    if (!parent) return;

    const onParentEnter = () => {
      isHoveredRef.current = true;
      trigger();
    };

    const onParentLeave = () => {
      isHoveredRef.current = false;
    };

    parent.addEventListener('mouseenter', onParentEnter);
    parent.addEventListener('mouseleave', onParentLeave);
    parent.addEventListener('focusin', onParentEnter);
    parent.addEventListener('focusout', onParentLeave);

    return () => {
      parent.removeEventListener('mouseenter', onParentEnter);
      parent.removeEventListener('mouseleave', onParentLeave);
      parent.removeEventListener('focusin', onParentEnter);
      parent.removeEventListener('focusout', onParentLeave);
    };
  }, [triggerOnParent, trigger]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <Component
      ref={containerRef}
      className={`relative inline-block select-none transition-colors duration-200 ${
        isScrambling ? scrambleColor : ''
      } ${className}`}
      style={{
        width: lockedDimensions ? `${lockedDimensions.width}px` : undefined,
        minWidth: lockedDimensions ? `${lockedDimensions.width}px` : undefined,
        maxWidth: lockedDimensions ? `${lockedDimensions.width}px` : undefined,
        height: lockedDimensions ? `${lockedDimensions.height}px` : undefined,
        willChange: isScrambling ? 'contents' : 'auto',
      }}
      onMouseEnter={triggerOnParent ? undefined : handleMouseEnter}
      onMouseLeave={triggerOnParent ? undefined : handleMouseLeave}
      onFocus={triggerOnParent ? undefined : handleMouseEnter}
      onBlur={triggerOnParent ? undefined : handleMouseLeave}
      aria-label={text}
    >
      {/* 
        Base anchor text: keeps the element in the document flow with its exact natural 
        font metrics, kerning, and dimensions. Becomes invisible during animation.
      */}
      <span
        className={isScrambling ? 'invisible select-none pointer-events-none' : ''}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* 
        Matrix scramble overlay: positioned absolutely within the locked container bounds.
        Each character renders within a dedicated fixed-width slot so random glyphs 
        cannot alter layout width or cause layout shifts.
      */}
      {isScrambling && (
        <span
          className="absolute inset-0 block pointer-events-none whitespace-pre select-none overflow-hidden"
          aria-hidden="true"
        >
          {Array.from(text).map((char, index) => {
            if (char === ' ') {
              return (
                <span key={index} className="inline-block whitespace-pre" aria-hidden="true">
                  {' '}
                </span>
              );
            }

            const isResolved = index < resolvedCount;
            const displayChar = isResolved ? char : (scrambledGlyphs[index] || char);

            return (
              <span
                key={index}
                className="relative inline-block text-center align-baseline"
                aria-hidden="true"
              >
                {/* Fixed-width character slot anchor */}
                <span className="invisible select-none pointer-events-none" aria-hidden="true">
                  {char}
                </span>

                {/* Scrambled or resolved character centered strictly inside this character's slot */}
                <span
                  className={`absolute inset-0 flex items-center justify-center ${
                    !isResolved
                      ? `${scrambleColor} font-mono font-medium leading-none`
                      : ''
                  }`}
                  aria-hidden="true"
                >
                  {displayChar}
                </span>
              </span>
            );
          })}
        </span>
      )}

      {/* Accessible text for screen readers */}
      <span className="sr-only">{text}</span>
    </Component>
  );
}
