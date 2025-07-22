import React from 'react';
import { cn } from '@/lib/cn';

/**
 * @param {object} props
 * @param {number} props.size
 * @param {string} [props.gradient]
 * @param {string} [props.className]
 * @param {object} [props.style]
 * @param {string} [props.glowColor] - Цвет свечения (по умолчанию полностью прозрачный)
 * @param {number} [props.glowSize]
 * @param {React.ReactNode} [props.children]
 */
export const GradientBall = ({
  size = 24,
  gradient = '',
  className,
  style,
  glowColor = 'rgba(0,0,0,0)', // По умолчанию НЕВИДИМО
  glowSize,
  children,
  ...props
}) => {
  const haloSize = glowSize || size * 1.6;
  const ballVisible = !!gradient;

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      style={{ width: haloSize, height: haloSize, ...style }}
      {...props}
    >
      {/* Glow layer */}
      <div
        className='absolute inset-0 rounded-full pointer-events-none'
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          filter: 'blur(6px)',
          zIndex: 0,
        }}
        aria-hidden='true'
      />
      {/* Main ball */}
      {ballVisible && (
        <div
          className='relative rounded-full'
          style={{
            width: size,
            height: size,
            background: gradient,
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
};
