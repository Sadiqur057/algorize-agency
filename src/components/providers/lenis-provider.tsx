"use client";

import { ReactLenis } from 'lenis/react';

export function LenisProvider({ children }:{ children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        prevent: (node) => {
          // Prevent Lenis from handling scroll in modal elements
          return Boolean(
            node.closest('[data-lenis-prevent]') ||
            node.closest('.modal') ||
            node.closest('[role="dialog"]') ||
            node.classList.contains('modal') ||
            node.classList.contains('is-visible')
          );
        }
      }}
    >
      {children}
    </ReactLenis>
  );
}
